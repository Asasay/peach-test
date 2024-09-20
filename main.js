import Glide from "@glidejs/glide";

const attachMapTabsHandler = () => {
  const mapRadios = document.querySelectorAll(".map .map__tab-input");
  const citiesGroup = document
    .querySelector(".map .map__map-img")
    .contentDocument.querySelector("g.map__cities");
  const cities = citiesGroup.querySelectorAll("g[class^=map__cities-]");

  for (let radio of mapRadios) {
    radio.addEventListener("change", function () {
      for (const key of cities) {
        if (key.className.baseVal !== "map__cities-" + this.value && this.value !== "all")
          key.style.display = "none";
        else key.style.display = "block";
      }
    });
  }
};

const attachMapMenuHandlers = () => {
  const dropdown = document.querySelector("div[class^=map__dropdown]");

  dropdown.addEventListener("click", function (e) {
    if (this == e.target || dropdown.querySelector(".map__dropdown-arrow").contains(e.target)) {
      if (this.className == "map__dropdown--closed") this.className = "map__dropdown--opened";
      else this.className = "map__dropdown--closed";
    }
  });

  const expandables = document.querySelectorAll("li[class^=map__nav-item--expandable]");
  for (const elem of expandables) {
    elem.addEventListener("click", function (e) {
      if (window.innerWidth >= 1024) return;
      if (this.className == "map__nav-item--expandable-closed") {
        for (const expandable of expandables) {
          expandable.className = "map__nav-item--expandable-closed";
        }
        this.className = "map__nav-item--expandable-opened";
      } else this.className = "map__nav-item--expandable-closed";
    });
  }
};

const attachAccordionHandlers = () => {
  const accordion = document.querySelectorAll(".accordion__container");

  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      if (window.innerWidth >= 1024) return;
      this.classList.toggle("accordion__container--opened");
    });
  }
};

window.addEventListener("load", () => {
  attachMapTabsHandler();
  attachMapMenuHandlers();
  attachAccordionHandlers();
  new Glide(".glide", {
    type: "carousel",
    autoplay: 5000,
  }).mount();
});
