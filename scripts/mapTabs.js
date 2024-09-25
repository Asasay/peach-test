export const attachMapTabsHandler = () => {
  const mapRadios = document.querySelectorAll(".map .map__tab-input");
  const cities = document
    .querySelector(".map .map__map-img")
    .contentDocument.querySelectorAll("g[data-map-region]");
  for (let radio of mapRadios) {
    radio.addEventListener("change", tabHanlder(cities));
  }
};

function tabHanlder(cities) {
  return function (e) {
    for (const region of cities) {
      if (region.dataset.mapRegion !== this.value && this.value !== "all")
        region.style.display = "none";
      else region.style.display = "block";
    }
  };
}
