const languageButton = document.querySelector('.language-toggle');
const languageNodes = document.querySelectorAll('[data-en][data-zh]');

function setLanguage(language) {
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  languageNodes.forEach((node) => {
    node.textContent = node.dataset[language];
  });
  languageButton.textContent = language === 'zh' ? 'EN' : '中文';
  languageButton.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换为中文');
  localStorage.setItem('site-language', language);
}

languageButton?.addEventListener('click', () => {
  setLanguage(document.documentElement.lang.startsWith('zh') ? 'en' : 'zh');
});

setLanguage(localStorage.getItem('site-language') === 'zh' ? 'zh' : 'en');

const yearNode = document.querySelector('#year');
if (yearNode) yearNode.textContent = new Date().getFullYear();
