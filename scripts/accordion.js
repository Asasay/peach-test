export const attachAccordionHandlers = () => {
  const accordion = document.querySelectorAll(".accordion__container");

  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", accordionHandler);
  }
};

function accordionHandler() {
  if (window.innerWidth >= 1024) return;
  this.classList.toggle("accordion__container--opened");
}
