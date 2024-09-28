import Glide from "@glidejs/glide";
import { attachMapTabsHandler } from "@/sections/map/mapTabs";
import { attachAccordionHandlers } from "@/sections/business/accordion";
import { attachMapMenuHandlers } from "@/sections/map/mapMenu";

window.addEventListener("load", () => {
  attachMapTabsHandler();
  attachMapMenuHandlers();
  attachAccordionHandlers();
  new Glide(".glide", {
    type: "carousel",
    autoplay: 5000,
  }).mount();
});
