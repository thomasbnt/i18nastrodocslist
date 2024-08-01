// ==UserScript==
// @name Automatically add before lists checkboxes.
// @namespace https://i18n.docs.astro.build/
// @version 0.1
// @description Automatically add before lists checkboxes on the Astro documentation.
// @author Thomas Bnt
// @icon https://icons.duckduckgo.com/ip3/astro.build.ico
// @match https://i18n.docs.astro.build/*
// @homepageURL https://github.com/thomasbnt/i18nastrodocslist
// @updateURL    https://raw.githubusercontent.com/thomasbnt/i18nastrodocslist/main/AddCheckboxBeforeLi.user.js
// @downloadURL  https://raw.githubusercontent.com/thomasbnt/i18nastrodocslist/main/AddCheckboxBeforeLi.user.js
// @grant window.onurlchange
// @noframes
// ==/UserScript==

(function () {
  document.querySelectorAll('li').forEach((li) => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = li.textContent;
    checkbox.checked = false;
    li.prepend(checkbox);
  });
})();
