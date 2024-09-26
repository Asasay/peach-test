export const attachMapTabsHandler = () => {
  const mapRadios = document.querySelectorAll(".map .map__tab-input");
  const regions = document
    .querySelector(".map .map__map-img")
    .contentDocument.querySelectorAll("g[data-map-region]");
  for (let radio of mapRadios) {
    radio.addEventListener("change", tabHanlder(regions));
  }
};

function tabHanlder(regions) {
  return function (e) {
    for (const region of regions) {
      if (region.dataset.mapRegion !== this.value && this.value !== "all")
        region.style.display = "none";
      else region.style.display = "block";
    }
  };
}
