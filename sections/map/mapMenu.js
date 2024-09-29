export const attachMapMenuHandlers = () => {
  const dropdown = document.querySelector("div[class^=map__dropdown]");
  dropdown.addEventListener("click", dropdownHandler(dropdown));

  const expandables = document.querySelectorAll(
    "li[class^=map__nav-item--expandable]",
  );
  for (const elem of expandables) {
    elem.addEventListener("click", expandableHanlder(expandables));
  }
};

function dropdownHandler(dropdown) {
  return function (e) {
    if (
      this == e.target ||
      dropdown.querySelector(".map__dropdown-arrow").contains(e.target)
    ) {
      if (this.className == "map__dropdown--closed") {
        this.className = "map__dropdown--opened";
        document.querySelector("object.map__map-img").style.opacity = "10%";
      } else {
        this.className = "map__dropdown--closed";
        document.querySelector("object.map__map-img").style.opacity = "100%";
      }
    }
  };
}

function expandableHanlder(expandables) {
  return function (e) {
    if (window.innerWidth >= 1024) return;
    if (this.className == "map__nav-item--expandable-closed") {
      for (const expandable of expandables) {
        expandable.className = "map__nav-item--expandable-closed";
      }
      this.className = "map__nav-item--expandable-opened";
    } else this.className = "map__nav-item--expandable-closed";
  };
}
