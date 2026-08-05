import lang, { LANG } from './lang.js';
import { updateCopyrightYear } from './copyright-year-utils.js';

const userLang = navigator.language || navigator.userLanguage;
const localLang = window.localStorage.getItem('lang.viniciusalmeida.dev');
const selectedLang = localLang ?? userLang;

const langSelector = document.querySelector('#lang');
langSelector.addEventListener('change', () => {
  const value = langSelector.value;
  document.querySelector('html[lang]').setAttribute("lang", value);
  window.localStorage.setItem('lang.viniciusalmeida.dev', value);
  translate(value);
});

Object.entries(LANG).forEach(([key, value], index) => {
  const option = new Option(value, key);
  langSelector.add(option);
  if (selectedLang.includes(key)) {
    langSelector.value = key;
    const changeEvent = new Event('change');
    langSelector.dispatchEvent(changeEvent);
  }
});


function translate(language) {
  const translation = lang(language);
  if (!translation) return;
  Object.entries(translation).forEach(([key, value]) => {
    document.querySelectorAll(`[data-lang="${key}"`).forEach((el) => {
      console.log(key, el.childNodes.length);
      if (el.hasAttribute('title')) {
        el.setAttribute('title', value);
      } else {
        el.innerHTML = value;
      }
      if (el.href) el.href = translation[`${key}Href`]
    });
    updateCopyrightYear();
  });
}