!function(){var e,t,n,o,c=document.querySelector(".backButton-js"),d=document.querySelector(".forwardButton-js");!function(){var e=!1,t={openModalBtn1:document.querySelector("[data-modal-open1]"),openModalBtn2:document.querySelector("[data-modal-open2]"),openModalBtn3:document.querySelector("[data-modal-open3]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function n(e){"Escape"===e.key&&c()}function o(){if(!e){e=!0,d();var t=document.querySelector(".backdrop");t.addEventListener("click",(function(e){e.target===t&&c()})),document.addEventListener("keydown",n)}}function c(){e&&(e=!1,d(),document.removeEventListener("keydown",n))}function d(){t.modal.classList.toggle("is-hidden")}t.openModalBtn1.addEventListener("click",o),t.openModalBtn2.addEventListener("click",o),t.openModalBtn3.addEventListener("click",o),t.closeModalBtn.addEventListener("click",c)}(),e=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),n=document.querySelector(".js-menu-container"),o=function(){var t="true"===e.getAttribute("aria-expanded")||!1;e.setAttribute("aria-expanded",!t),n.classList.toggle("is-open")},e.addEventListener("click",o),t.addEventListener("click",o),function(){var e=window.innerHeight;function t(e){var t=document.documentElement.scrollTop;window.scroll({top:t+e,behavior:"smooth"})}c.addEventListener("click",(function(n){n.preventDefault(),t(0-e)})),d.addEventListener("click",(function(n){n.preventDefault(),t(e)}))}()}();
//# sourceMappingURL=index.51afc8a5.js.map
