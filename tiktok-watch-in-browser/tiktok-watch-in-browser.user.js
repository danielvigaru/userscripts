// ==UserScript==
// @name        TikTok Watch in Browser
// @match       https://www.tiktok.com/*/video/*
// @grant       none
// @version     1.0.0
// @downloadURL https://github.com/danielvigaru/userscripts/raw/main/tiktok-watch-in-browser/tiktok-watch-in-browser.user.js
// @updateURL   https://github.com/danielvigaru/userscripts/raw/main/tiktok-watch-in-browser/tiktok-watch-in-browser.user.js
// @homepageURL https://github.com/danielvigaru/userscripts/tree/main/tiktok-watch-in-browser
// ==/UserScript==

(function () {
    const { protocol, hostname, pathname, search } = window.location;

    if (search.length) {
        window.location = `${protocol}//${hostname}${pathname}`;
    }
})();
