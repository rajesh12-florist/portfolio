/**
 * @copyright Joshsjosh
 * @author Josh <joshuaalfred708@gmail.com>
 */

"use strict";

/** 
 * *Light and dark mode
 */

const /** {NodeElement} */ $themeBtn = document.querySelector("[data-theme-btn]");
const /** {NodeElement} */ $HTML = document.documentElement;
let /** {Boolean | string} */ isDark =window.matchMedia("(prerfers-color-scheme:dark)").matches;

if (sessionStorage.getItem("theme")){
    $HTML.dataset.theme = sessionStorage.getItem("theme");
} else{
    $HTML.dataset.theme =isDark ? "dark" : "light";
    sessionStorage.setItem("theme",$HTML.dataset.theme);
}

const changeTheme = () => {
    $HTML.dataset.theme =sessionStorage.getItem("theme") === "light" ? "dark" :
    "light";
    sessionStorage.setItem("theme",$HTML.dataset.theme);
}

$themeBtn.addEventListener("click", changeTheme);

/** 
 * *TAB
 */

const $tabBtn = document.querySelectorAll("[data-tab-btn]");
let lastActiveTab = document.querySelector(".tab-content.active");
let lastActiveTabBtn = document.querySelector("[data-tab-btn].active");

$tabBtn.forEach(item => {
    item.addEventListener("click", function (){
        lastActiveTab.classList.remove("active");
        lastActiveTabBtn.classList.remove("active");

        const /**NodeElement */ $tabContent = document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`);
        $tabContent.classList.add("active");
        this.classList.add("active");

        lastActiveTab = $tabContent;
        lastActiveTabBtn = this;
    });
});