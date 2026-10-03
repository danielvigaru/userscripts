// ==UserScript==
// @name             IMDB links
// @icon             https://www.imdb.com/favicon.ico
// @description      Links to torrents and trakt directly from imdb page
// @license          MIT
// @match            https://imdb.com/title/*
// @match            https://*.imdb.com/title/*
// @version          3.0.0
// @updateURL        https://github.com/danielvigaru/userscripts/raw/main/imdb-trakt-and-tracker-links/imdb-trakt-and-tracker-links.user.js
// @downloadURL      https://github.com/danielvigaru/userscripts/raw/main/imdb-trakt-and-tracker-links/imdb-trakt-and-tracker-links.user.js
// @homepageURL      https://github.com/danielvigaru/userscripts/tree/main/imdb-trakt-and-tracker-links
// @grant            none
// ==/UserScript==

window.addEventListener("load", () => {
    const template = `
        <style>
            @charset "UTF-8";
            .imdb-external-links-toggle {
                position: fixed;
                bottom: 10%;
                right: 1%;
                border: 2px solid hsl(47, 100%, 45%);
                border-radius: 100%;
                width: 45px;
                height: 45px;
                background-color: hsl(47, 92%, 53%);
                z-index: 1000;
                cursor: pointer;
                anchor-name: --imdb-external-links-toggle;
            }
            .imdb-external-links-modal {
                gap: 20px;
                padding: 20px;
                flex-direction: column;
                border: 2px solid hsl(240, 10%, 92%);
                border-radius: 10px;
            }
            .imdb-external-links-modal:open {
                display: flex;
            }
            .imdb-external-links-modal-close {
                position: absolute;
                top: 0;
                right: 0;
                border: none;
                border-radius: 0 0 0 5px;
            }
            .imdb-external-links-modal a,
            .imdb-external-links-modal button {
                cursor: pointer;
            }
            .imdb-external-links-modal [data-imdb-external-link],
            .imdb-external-links-modal [data-imdb-external-link]:visited {
                color: currentColor;
            }
            .imdb-external-links-modal [data-imdb-external-link]::after,
            .imdb-external-links-modal [data-imdb-external-link]:visited::after {
                content: "⎋";
                display: inline-block;
                transform: scaleX(-1);
                margin-left: 1ch;
            }
            @media screen and (min-width: 768px) {
                .imdb-external-links-modal {
                    position-anchor: --imdb-external-links-toggle;
                    inset: auto anchor(right) anchor(top) auto;
                    margin-bottom: 24px;
                }
            }
        </style>

        <button type="button" id="imdb-external-links-toggle" class="imdb-external-links-toggle">🔗</button>

        <dialog id="imdb-external-links-modal" class="imdb-external-links-modal" closedby="any">
            <button
                type="button"
                id="imdb-external-links-modal-close"
                class="imdb-external-links-modal-close"
            >
                &#215;
            </button>

            <a data-imdb-external-link target="_blank" href="https://trakt.tv/search/imdb?q=tt{movieId}">
                Trakt
            </a>
            <a
                data-imdb-external-link
                target="_blank"
                href="https://filelist.io/browse.php?search=tt{movieId}"
            >
                FileList
            </a>
        </dialog>
    `;

    function getIMDBid() {
        const regexImdbNum = /\/title\/tt(\d{1,})/;
        const location = String(document.location);
        const id = regexImdbNum.exec(location)?.[1] ?? null;
        return id;
    }

    const movieId = getIMDBid();
    if (!movieId) return;

    document.body.insertAdjacentHTML("beforeend", template);

    const linksDialog = document.getElementById("imdb-external-links-modal");

    linksDialog.querySelectorAll("[data-imdb-external-link]").forEach(function (el) {
        el.href = el.href.replace("{movieId}", movieId);
    });

    document.getElementById("imdb-external-links-toggle").addEventListener("click", function () {
        linksDialog.showModal();
    });

    document
        .getElementById("imdb-external-links-modal-close")
        .addEventListener("click", function () {
            linksDialog.close();
        });
});
