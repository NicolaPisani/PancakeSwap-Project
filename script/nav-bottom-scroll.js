const $navButtons = document.querySelectorAll(".nav-bottom__scroll-btn");
const $navButtonLeft = document.querySelector(".nav-bottom__scroll-btn--left");
const $navButtonRight = document.querySelector(
  ".nav-bottom__scroll-btn--right"
);
const $container = document.querySelector(".nav-bottom__items-container");
let lastScrollLeft = $container.scrollLeft;

$navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    scrollNav(button);
  });
});

$container.addEventListener("scroll", () => {
  const maxScroll = $container.scrollWidth - $container.clientWidth;

  if ($container.scrollLeft === 0) {
    $navButtonLeft.classList.remove("show");
  } else {
    $navButtonLeft.classList.add("show");
  }

  if ($container.scrollLeft >= maxScroll) {
    $navButtonRight.classList.remove("show");
  } else {
    $navButtonRight.classList.add("show");
  }

  lastScrollLeft = $container.scrollLeft;
});

function scrollNav(button) {
  if (button.classList.contains("nav-bottom__scroll-btn--left")) {
    $container.scrollLeft -= 100;
  } else {
    $container.scrollLeft += 100;
  }
}
