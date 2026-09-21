(function () {
  "use strict";

  const A4_WIDTH_PX = 793.7008;
  const A4_HEIGHT_PX = 1122.5197;
  const MODALITY_DEFAULTS = {
    "classe-virtuelle": {
      welcome: "Questions, échanges et interactions tout au long de la session",
      welcomeIcon: "assets/icons/chat.svg",
      placeIcon: "assets/icons/desktop-computer.svg",
      legacyWelcome: "Connexion des participants quelques minutes avant le début de la session"
    }
  };
  const priorityFieldPaths = [
    "event.date",
    "event.time",
    "event.venue",
    "event.address",
    "event.sessionReference",
    "speaker.name",
    "speaker.role",
    "schedule.meeting"
  ];
  const templateSelect = document.getElementById("template-select");
  const form = document.getElementById("template-form");
  const documentElement = document.getElementById("document-a4");
  const previewCanvas = document.getElementById("preview-canvas");
  const paperShell = document.getElementById("paper-shell");
  const printButton = document.getElementById("print-button");
  const resetButton = document.getElementById("reset-button");
  const saveStatus = document.getElementById("save-status");
  const layoutStatus = document.getElementById("layout-status");
  const heroImage = document.querySelector(".hero-image-frame img");
  const welcomeIcon = document.querySelector(".welcome-icon");
  const placeIcon = document.querySelector(".place-item .doc-icon");
  const compensationMarker = document.querySelector(".compensation-value sup");
  let activeTemplateId = Object.keys(window.templates)[0];
  let activeData;
  let saveTimer;

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function deepMerge(base, saved) {
    if (!saved || typeof saved !== "object") return clone(base);
    if (Array.isArray(base)) return Array.isArray(saved) ? clone(saved) : clone(base);
    const result = {};
    Object.keys(base).forEach(function (key) {
      if (base[key] && typeof base[key] === "object") {
        result[key] = deepMerge(base[key], saved[key]);
      } else {
        result[key] = saved[key] !== undefined ? saved[key] : base[key];
      }
    });
    return result;
  }

  function applyModalityDefaults(template, data) {
    const defaults = MODALITY_DEFAULTS[template.modality];
    if (!defaults) return data;
    if (!data.course) data.course = {};
    const welcome = String(data.course.welcome || "").trim();
    if (!welcome || welcome === defaults.legacyWelcome) data.course.welcome = defaults.welcome;
    return data;
  }

  function getValue(object, path) {
    return path.split(".").reduce(function (value, key) {
      return value == null ? undefined : value[key];
    }, object);
  }

  function setValue(object, path, value) {
    const keys = path.split(".");
    const finalKey = keys.pop();
    const target = keys.reduce(function (current, key) {
      return current[key];
    }, object);
    target[finalKey] = value;
  }

  function normalizeUrl(value) {
    if (!value) return "";
    return /^https?:\/\//i.test(value) ? value : "https://" + value;
  }

  function createField(field) {
    const wrapper = document.createElement("div");
    wrapper.className = "form-field";
    const id = "field-" + field.path.replace(/\./g, "-");
    const label = document.createElement("label");
    label.htmlFor = id;
    label.textContent = field.label;

    let input;
    if (field.type === "textarea" || field.type === "list") {
      input = document.createElement("textarea");
      input.rows = field.rows || 3;
    } else {
      input = document.createElement("input");
      input.type = "text";
    }
    input.id = id;
    input.dataset.path = field.path;
    input.dataset.valueType = field.type || "text";
    if (priorityFieldPaths.includes(field.path)) input.classList.add("priority-field");
    const value = getValue(activeData, field.path);
    input.value = field.type === "list" ? value.join("\n") : value;
    wrapper.append(label, input);
    return wrapper;
  }

  function renderForm() {
    form.replaceChildren();
    window.templates[activeTemplateId].formSections.forEach(function (section, index) {
      const fieldset = document.createElement("fieldset");
      const legend = document.createElement("legend");
      legend.textContent = section.title;
      fieldset.append(legend);
      section.fields.forEach(function (field) {
        fieldset.append(createField(field));
      });
      if (index === 0) fieldset.open = true;
      form.append(fieldset);
    });
  }

  function renderTextBindings() {
    documentElement.querySelectorAll("[data-text]").forEach(function (element) {
      const value = getValue(activeData, element.dataset.text);
      element.textContent = value == null ? "" : value;
    });
    documentElement.querySelectorAll("[data-link]").forEach(function (element) {
      const value = getValue(activeData, element.dataset.link) || "";
      element.href = normalizeUrl(value);
    });
  }

  function renderLists() {
    documentElement.querySelectorAll("[data-list]").forEach(function (list) {
      const items = getValue(activeData, list.dataset.list) || [];
      list.replaceChildren();
      items.forEach(function (item) {
        const li = document.createElement("li");
        li.textContent = item;
        list.append(li);
      });
    });
  }

  function renderScheduleStepIcons() {
    const icons = activeData.schedule && Array.isArray(activeData.schedule.icons) ? activeData.schedule.icons : [];
    documentElement.querySelectorAll(".schedule-list > li").forEach(function (step, index) {
      const icon = step.querySelector(".schedule-step-icon");
      const source = icons[index] || "";
      icon.hidden = !source;
      if (source) icon.src = source;
      else icon.removeAttribute("src");
      step.classList.toggle("has-step-icon", Boolean(source));
    });
  }

  function renderDateParts() {
    const parts = String(activeData.event.date || "").trim().split(/\s+/).filter(Boolean);
    const values = {
      weekday: parts.shift() || "",
      day: parts.shift() || "",
      year: parts.pop() || "",
      month: parts.join(" ")
    };
    documentElement.querySelectorAll("[data-date-part]").forEach(function (element) {
      element.textContent = values[element.dataset.datePart] || "";
    });
  }

  function renderTemplateAssets() {
    const template = window.templates[activeTemplateId];
    const modalityDefaults = MODALITY_DEFAULTS[template.modality] || {};
    documentElement.dataset.template = template.id;
    documentElement.dataset.modality = template.modality || "presentiel";
    documentElement.setAttribute("aria-label", "Fiche " + template.name + " au format A4");
    heroImage.src = template.coverImage;
    heroImage.alt = template.imageAlt || "";
    welcomeIcon.src = template.welcomeIcon || modalityDefaults.welcomeIcon || "assets/icons/cocktail.svg";
    placeIcon.src = template.placeIcon || modalityDefaults.placeIcon || "assets/icons/placeholder.svg";
  }

  function renderComputedText() {
    const actionReference = String(activeData.event.actionReference || "").trim();
    const sessionReference = String(activeData.event.sessionReference || "").trim();
    let reference = actionReference;
    if (actionReference && sessionReference) reference += " - S " + sessionReference;
    if (!actionReference && sessionReference) reference = "S " + sessionReference;
    documentElement.querySelector("[data-computed='dpcReference']").textContent = reference;
    compensationMarker.hidden = !String(activeData.event.compensation || "").trim();
  }

  function updateOverflowStatus() {
    window.requestAnimationFrame(function () {
      const overflowing = documentElement.scrollHeight > documentElement.clientHeight + 1;
      documentElement.classList.toggle("is-overflowing", overflowing);
      layoutStatus.textContent = overflowing ? "Contenu trop long" : "1 page A4";
      layoutStatus.classList.toggle("warning", overflowing);
    });
  }

  function renderPreview() {
    renderTemplateAssets();
    renderTextBindings();
    renderDateParts();
    renderLists();
    renderScheduleStepIcons();
    renderComputedText();
    updateOverflowStatus();
  }

  function scheduleSave() {
    window.clearTimeout(saveTimer);
    saveStatus.textContent = "Enregistrement…";
    saveTimer = window.setTimeout(function () {
      const didSave = window.TemplateStorage.save(activeTemplateId, activeData);
      saveStatus.textContent = didSave ? "Enregistré localement" : "Sauvegarde indisponible";
    }, 180);
  }

  function handleInput(event) {
    const input = event.target.closest("[data-path]");
    if (!input) return;
    let value = input.value;
    if (input.dataset.valueType === "list") {
      value = value.split(/\r?\n/).map(function (item) { return item.trim(); }).filter(Boolean);
    }
    setValue(activeData, input.dataset.path, value);
    renderPreview();
    scheduleSave();
  }

  function loadTemplate(templateId) {
    activeTemplateId = templateId;
    const template = window.templates[templateId];
    const saved = window.TemplateStorage.load(templateId);
    activeData = applyModalityDefaults(template, deepMerge(template.data, saved));
    renderForm();
    renderPreview();
    saveStatus.textContent = saved ? "Données restaurées" : "Données originales";
  }

  function resetTemplate() {
    window.TemplateStorage.clear(activeTemplateId);
    const template = window.templates[activeTemplateId];
    activeData = applyModalityDefaults(template, clone(template.data));
    renderForm();
    renderPreview();
    saveStatus.textContent = "Données originales restaurées";
  }

  function updatePreviewScale() {
    const styles = window.getComputedStyle(previewCanvas);
    const horizontalPadding = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);
    const verticalPadding = parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom);
    const availableWidth = previewCanvas.clientWidth - horizontalPadding;
    const availableHeight = previewCanvas.clientHeight - verticalPadding;
    const scale = Math.max(0.34, Math.min(0.86, availableWidth / A4_WIDTH_PX, availableHeight / A4_HEIGHT_PX));
    paperShell.style.width = (A4_WIDTH_PX * scale) + "px";
    paperShell.style.height = (A4_HEIGHT_PX * scale) + "px";
    documentElement.style.transform = "scale(" + scale + ")";
  }

  Object.keys(window.templates).forEach(function (templateId) {
    const option = document.createElement("option");
    option.value = templateId;
    option.textContent = window.templates[templateId].name;
    templateSelect.append(option);
  });

  templateSelect.value = activeTemplateId;
  templateSelect.addEventListener("change", function () { loadTemplate(templateSelect.value); });
  form.addEventListener("input", handleInput);
  resetButton.addEventListener("click", resetTemplate);
  printButton.addEventListener("click", function () { window.print(); });
  window.addEventListener("resize", updatePreviewScale);
  window.addEventListener("beforeprint", function () { documentElement.style.transform = "none"; });
  window.addEventListener("afterprint", updatePreviewScale);

  loadTemplate(activeTemplateId);
  updatePreviewScale();
}());
