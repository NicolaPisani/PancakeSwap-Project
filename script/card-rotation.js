const $cardContainer = document.querySelector(
  ".card-prediction__relative-container"
);
const $downButton = document.querySelector(".card-prediction__enter-btn--down");
const $upButton = document.querySelector(".card-prediction__enter-btn--up");
const $enter = document.querySelector(".card-prediction-back__enter");
const $svg = document.querySelector(".card-prediction-back__svg");
const $upDownText = document.querySelector(".card-prediction-back__down-up");
const $back = document.querySelector(".card-prediction-back__flip");

const svgUp = `<svg
    viewBox="0 0 24 24"
    color="white"
    width="20px"
    xmlns="http://www.w3.org/2000/svg"
    class="sc-231a1e38-0 iDcbEw"
  >
    <path d="M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z"></path>
  </svg>`;
const svgDown = `<svg viewBox="0 0 24 24" color="white" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-231a1e38-0 iDcbEw"><path d="M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z"></path></svg>`;

$downButton.addEventListener("click", () => {
  $cardContainer.style.transform = "rotateY(180deg)";
  if ($enter.classList.contains("card-prediction-back__enter--up")) {
    $enter.classList.remove("card-prediction-back__enter--up");
    $enter.classList.add("card-prediction-back__enter--down");
    $svg.innerHTML = svgDown;
    $upDownText.innerHTML = "DOWN";
  } else {
    $enter.classList.add("card-prediction-back__enter--down");
    $svg.innerHTML = svgUp;
    $upDownText.innerHTML = "UP";
  }
});

$upButton.addEventListener("click", () => {
  $cardContainer.style.transform = "rotateY(180deg)";
  if ($enter.classList.contains("card-prediction-back__enter--down")) {
    $enter.classList.remove("card-prediction-back__enter--down");
    $enter.classList.add("card-prediction-back__enter--up");
    $svg.innerHTML = svgUp;
    $upDownText.innerHTML = "UP";
  } else {
    $enter.classList.add("card-prediction-back__enter--up");
    $svg.innerHTML = svgUp;
    $upDownText.innerHTML = "UP";
  }
});

$enter.addEventListener("click", () => {
  if ($enter.classList.contains("card-prediction-back__enter--down")) {
    $enter.classList.remove("card-prediction-back__enter--down");
    $enter.classList.add("card-prediction-back__enter--up");
    $svg.innerHTML = svgUp;
    $upDownText.innerHTML = "UP";
  } else {
    $enter.classList.remove("card-prediction-back__enter--up");
    $enter.classList.add("card-prediction-back__enter--down");
    $svg.innerHTML = svgDown;
    $upDownText.innerHTML = "DOWN";
  }
});

$back.addEventListener("click", () => {
  $cardContainer.style.transform = "rotateY(0deg)";
});
