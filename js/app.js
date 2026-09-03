(function () {
  "use strict";

  const A4_WIDTH_PX = 793.7008;
  const A4_HEIGHT_PX = 1122.5197;
  const templateSelect = document.getElementById("template-select");
  const form = document.getElementById("template-form");
  const documentElement = document.getElementById("document-a4");
  const previewCanvas = document.getElementById("preview-canvas");
  const paperShell = document.getElementById("paper-shell");
  const printButton = document.getElementById("print-button");
  const resetButton = document.getElementById("reset-button");
  const saveStatus = document.getElementById("save-status");
  const layoutStatus = document.getElementById("layout-status");
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

  function renderComputedText() {
    documentElement.querySelector("[data-computed='dpcReference']").textContent =
      activeData.event.actionReference + " - S " + activeData.event.sessionReference;
  }

  function renderContacts() {
    documentElement.querySelectorAll("[data-contact-index]").forEach(function (container) {
      const person = activeData.contacts.people[Number(container.dataset.contactIndex)];
      container.querySelectorAll("[data-contact]").forEach(function (element) {
        const key = element.dataset.contact;
        element.textContent = person[key];
      });
      const phone = container.querySelector("[data-contact-link='phone']");
      const email = container.querySelector("[data-contact-link='email']");
      phone.href = "tel:" + person.phone.replace(/[^+\d]/g, "");
      email.href = "mailto:" + person.email;
    });
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
    renderTextBindings();
    renderDateParts();
    renderLists();
    renderComputedText();
    renderContacts();
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
    activeData = deepMerge(template.data, saved);
    renderForm();
    renderPreview();
    saveStatus.textContent = saved ? "Données restaurées" : "Données originales";
  }

  function resetTemplate() {
    window.TemplateStorage.clear(activeTemplateId);
    activeData = clone(window.templates[activeTemplateId].data);
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
