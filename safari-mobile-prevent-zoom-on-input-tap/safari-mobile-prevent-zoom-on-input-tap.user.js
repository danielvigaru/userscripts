// ==UserScript==
// @name        Prevent Safari zoom on input focus
// @match       https://*/*
// @grant       none
// @version     1.0
// @downloadURL https://github.com/danielvigaru/userscripts/raw/main/safari-mobile-prevent-zoom-on-input-tap/safari-mobile-prevent-zoom-on-input-tap.user.js
// @updateURL   https://github.com/danielvigaru/userscripts/raw/main/safari-mobile-prevent-zoom-on-input-tap/safari-mobile-prevent-zoom-on-input-tap.user.js
// @homepageURL https://github.com/danielvigaru/userscripts/tree/main/safari-mobile-prevent-zoom-on-input-tap
// ==/UserScript==

(function() {
    const scaleMeta = document.createElement('meta');
    scaleMeta.setAttribute('name', 'viewport');
    scaleMeta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1');

    document.head.append(scaleMeta);
})();
