const button = document.querySelector(".collapsible__button");
const buttonVisibleContent = document.querySelector(
  ".collapsible__action--visible"
);
const buttonHiddenContent = document.querySelector(
  ".collapsible__action--hidden"
);
const content = document.querySelector(".collapsible__content");

buttonVisibleContent.style.position = "absolute";

let isOpen = false;

const visibleEffect = [
  {
    opacity: 0,
  },
  {
    opacity: 1,
  },
];

const hiddenEffect = [
  {
    opacity: 1,
  },
  {
    opacity: 0,
  },
];

const timing = {
  duration: 300,
  fill: "forwards",
};

content.animate(visibleEffect, timing).pause();
buttonVisibleContent.animate(visibleEffect, timing).pause();

button.onclick = () => {
  if (isOpen) {
    content.animate(hiddenEffect, timing);
    buttonVisibleContent.animate(hiddenEffect, timing);
    buttonHiddenContent.animate(visibleEffect, timing);
    isOpen = false;
  } else {
    content.animate(visibleEffect, timing);
    buttonVisibleContent.animate(visibleEffect, timing);
    buttonHiddenContent.animate(hiddenEffect, timing);
    isOpen = true;
  }
};
