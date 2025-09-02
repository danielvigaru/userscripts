// ==UserScript==
// @name        TikTok Watch in Browser
// @match       https://www.tiktok.com/*/video/*
// @grant       none
// @version     1.1.0
// @downloadURL https://github.com/danielvigaru/userscripts/raw/main/tiktok-watch-in-browser/tiktok-watch-in-browser.user.js
// @updateURL   https://github.com/danielvigaru/userscripts/raw/main/tiktok-watch-in-browser/tiktok-watch-in-browser.user.js
// @homepageURL https://github.com/danielvigaru/userscripts/tree/main/tiktok-watch-in-browser
// ==/UserScript==

(function () {
    const { protocol, hostname, pathname, search } = window.location;

    if (search.length) {
        const blockerElement = document.createElement('div');
        blockerElement.style.position = 'absolute';
        blockerElement.style.inset = '0';
        blockerElement.style.backgroundColor = 'rgb(255, 255, 255, 0.9)';
        blockerElement.style.zIndex = '9999';
        blockerElement.style.display = 'flex';
        blockerElement.style.justifyContent = 'center';
        blockerElement.style.alignItems = 'center';
        blockerElement.style.pointerEvents = 'none';
        blockerElement.appendChild(document.createTextNode('Redirecting...'));
        document.body.appendChild(blockerElement);

        window.location = `${protocol}//${hostname}${pathname}`;
    }
})();
