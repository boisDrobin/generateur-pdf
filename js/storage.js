(function () {
  "use strict";

  const PREFIX = "medical-s-pdf-template:";

  function key(templateId) {
    return PREFIX + templateId;
  }

  function load(templateId) {
    try {
      const value = localStorage.getItem(key(templateId));
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.warn("Lecture localStorage impossible", error);
      return null;
    }
  }

  function save(templateId, data) {
    try {
      localStorage.setItem(key(templateId), JSON.stringify(data));
      return true;
    } catch (error) {
      console.warn("Écriture localStorage impossible", error);
      return false;
    }
  }

  function clear(templateId) {
    try {
      localStorage.removeItem(key(templateId));
    } catch (error) {
      console.warn("Suppression localStorage impossible", error);
    }
  }

  window.TemplateStorage = { load: load, save: save, clear: clear };
}());
