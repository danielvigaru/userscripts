// ==UserScript==
// @name        Prevent Safari zoom on input focus
// @match       https://*/*
// @grant       none
// @version     1.0
// ==/UserScript==

window.addEventListener('load', () => {
    const scaleMeta = document.createElement('meta');
    scaleMeta.setAttribute('name', 'viewport');
    scaleMeta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1');

    document.head.append(scaleMeta);
};
