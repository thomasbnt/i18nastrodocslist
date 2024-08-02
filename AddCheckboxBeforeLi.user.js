// ==UserScript==
// @name Automatically add before lists checkboxes.
// @namespace https://i18n.docs.astro.build/
// @version 0.1
// @description Automatically add before lists checkboxes on the Astro documentation.
// @author Thomas Bnt
// @icon https://www.google.com/s2/favicons?sz=64&domain=astro.build
// @match https://i18n.docs.astro.build/*
// @match https://i18n.starlight.astro.build/*
// @homepageURL https://github.com/thomasbnt/i18nastrodocslist
// @updateURL    https://raw.githubusercontent.com/thomasbnt/i18nastrodocslist/main/AddCheckboxBeforeLi.user.js
// @downloadURL  https://raw.githubusercontent.com/thomasbnt/i18nastrodocslist/main/AddCheckboxBeforeLi.user.js
// @grant window.onurlchange
// @noframes
// ==/UserScript==

(function () {
  function saveCheckboxState(checkboxId, isChecked) {
    localStorage.setItem(checkboxId, isChecked);
  }

  function getCheckboxState(checkboxId) {
    return localStorage.getItem(checkboxId) === 'true';
  }

  document.querySelectorAll('li').forEach((li) => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const checkboxId = li.textContent.trim();
    checkbox.id = checkboxId;
    checkbox.checked = getCheckboxState(checkboxId);
    checkbox.addEventListener('change', () => {
      saveCheckboxState(checkboxId, checkbox.checked);
    });
    li.prepend(checkbox);
  });
})();
