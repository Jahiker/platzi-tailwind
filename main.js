console.log("Happy Hacking!!!");

import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".loader").classList.remove("loading");
});

class ThemeToggle extends HTMLElement {
  constructor() {
    super();

    this.init();
    this.addEventListener("click", this.toggle.bind(this));
  }

  init() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  toggle() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
  }
}

customElements.define("theme-toggle", ThemeToggle);
