// ==UserScript==
// @grant           none
// @icon            https://www.reddit.com/favicon.ico
// @match           https://www.reddit.com/*
// @name            Reddit auto theme switcher
// @downloadURL     https://github.com/danielvigaru/userscripts/raw/main/reddit-auto-theme-switcher/reddit-auto-theme-switcher.user.js
// @updateURL       https://github.com/danielvigaru/userscripts/raw/main/reddit-auto-theme-switcher/reddit-auto-theme-switcher.user.js
// @homepageURL     https://github.com/danielvigaru/userscripts/tree/main/reddit-auto-theme-switcher
// @version         1.1.0
// ==/UserScript==

window.addEventListener('load', () => {
    function isLightTheme() {
        const somePartOfTheSiteIdk = document.querySelector('._1VP69d9lk-Wk9zokOaylL');
        const currentBgColor = getComputedStyle(somePartOfTheSiteIdk).backgroundColor;
        return currentBgColor === 'rgb(255, 255, 255)';
    }

    function toggleMenu() {
        const dropdown = document.getElementById('USER_DROPDOWN_ID');
        dropdown.click();
    }

    function toggleTheme() {
        toggleMenu();
        const darkModeToggle = document.querySelectorAll('._3kUvbpMbR21zJBboDdBH7D')[1];
        darkModeToggle.click();
        setTimeout(toggleMenu, 500);
    }

    setInterval(() => {
        if (isLightTheme() && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            toggleTheme();
        }

        if (!isLightTheme() && window.matchMedia('(prefers-color-scheme: light)').matches) {
            toggleTheme();
        }
    }, 2000);
});
