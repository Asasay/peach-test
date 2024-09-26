export const attachAccordionHandlers = () => {
  const accordions = document.querySelectorAll(".accordion__container");
  accordions.forEach((accordion) => {
    accordion.addEventListener("click", accordionHandler);
  });
};

function accordionHandler() {
  if (window.innerWidth >= 1024) return;
  this.classList.toggle("accordion__container--opened");
}
