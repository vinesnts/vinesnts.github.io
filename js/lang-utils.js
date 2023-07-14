import lang from './lang.js';

const translate = (language) => {
  const translation = lang(language);

  Object.entries(translation).forEach(([key, value]) => {
    document.querySelectorAll(`[data-lang="${key}"`).forEach((el) => {
      el.innerHTML = value;
      if (el.href) el.href = translation[`${key}Href`]
    });
  });
}

const userLang = navigator.language || navigator.userLanguage;

translate(userLang);