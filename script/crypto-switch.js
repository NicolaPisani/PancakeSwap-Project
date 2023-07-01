const $button = document.querySelector(".crypto-section__btn");
const $content = document.querySelectorAll(".crypto-section__content");
const $title = document.querySelector("#title");
let firstClick = true;

const toggleContent = () => {
  if (firstClick) {
    $content[0].classList.remove("crypto-section__content--active");
    $content[1].classList.add("crypto-section__content--active");
    $title.innerHTML = "Syrup Pools";
    firstClick = false;
  } else {
    $content[1].classList.remove("crypto-section__content--active");
    $content[0].classList.add("crypto-section__content--active");
    $title.innerHTML = "Farms";
    firstClick = true;
  }
};

const startToggleInterval = () => {
  intervalId = setInterval(toggleContent, 6000);
};

const stopToggleInterval = () => {
  clearInterval(intervalId);
};

$button.addEventListener("click", () => {
  toggleContent();
  stopToggleInterval();
});

$button.addEventListener("mouseup", startToggleInterval);

startToggleInterval();
