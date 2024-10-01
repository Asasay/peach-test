import Glide from "@glidejs/glide";
import { attachMapTabsHandler } from "@/sections/map/mapTabs";
import { attachAccordionHandlers } from "@/sections/business/accordion";
import { attachMapMenuHandlers } from "@/sections/map/mapMenu";
function shrinkWrap(element) {
  const { firstChild, lastChild } = element;
  if (!element || !firstChild || !lastChild) return;
  const range = document.createRange();
  range.setStartBefore(firstChild);
  range.setEndAfter(lastChild);
  const { width } = range.getBoundingClientRect();
  element.style.width = width + "px";
  element.style.boxSizing = "content-box";
}
var _debounce = function (ms, fn) {
  var timer;
  return function () {
    clearTimeout(timer);
    var args = Array.prototype.slice.call(arguments);
    args.unshift(this);
    timer = setTimeout(fn.bind.apply(fn, args), ms);
  };
};

window.addEventListener("load", () => {
  attachMapTabsHandler();
  attachMapMenuHandlers();
  attachAccordionHandlers();

  new Glide(".glide", {
    type: "carousel",
    autoplay: 5000,
  }).mount();

  const nav = document.querySelector(".map__navbar");
  const textBlocks = document.querySelectorAll(".map__nav-item-text");
  const ro = new ResizeObserver(
    _debounce(10, function (muts) {
      textBlocks.forEach((tb) => tb.removeAttribute("style"));
      textBlocks.forEach((tb) => shrinkWrap(tb));
    }),
  );
  ro.observe(nav);
});
