import Glide from "@glidejs/glide";
import { attachMapTabsHandler } from "./mapTabs";
import { attachAccordionHandlers } from "./accordion";
import { attachMapMenuHandlers } from "./mapMenu";

window.addEventListener("load", () => {
  attachMapTabsHandler();
  attachMapMenuHandlers();
  attachAccordionHandlers();
  new Glide(".glide", {
    type: "carousel",
    autoplay: 5000,
  }).mount();
});
