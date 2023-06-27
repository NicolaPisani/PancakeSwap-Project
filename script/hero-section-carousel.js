const $carousel = document.querySelector(".carousel");
const $items = document.querySelectorAll(".carousel__item");
const buttonsHTML = Array.from($items, () => {
  return `<button class="carousel__button"></button>`;
});
$carousel.insertAdjacentHTML(
  "beforeend",
  `
    <div class="carousel__nav">
        ${buttonsHTML.join("")}
    </div>
`
);

const $buttons = document.querySelectorAll(".carousel__button");

let isDragging = false;
let dragStartX = 0;
let dragDistance = 0;
let maxWidth = $carousel.clientWidth;
let currentIndex = 0;
let prevSlide;
let currentSlide;
let nextSlide;
let opacityNonSelected = 0;
let opacitySelected = 1;
let prevButton;
let currentButton;
let nextButton;
let mouseScroll = 0;
let isScrolling = false;
let intervalId;

const indexFunction = () => {
  if (currentIndex >= $items.length - 1) {
    prevSlide = $items[currentIndex - 1];
    currentSlide = $items[currentIndex];
    nextSlide = $items[0];
    prevButton = $buttons[currentIndex - 1];
    currentButton = $buttons[currentIndex];
    nextButton = $buttons[0];
  } else if (currentIndex <= 0) {
    prevSlide = $items[$items.length - 1];
    currentSlide = $items[currentIndex];
    nextSlide = $items[currentIndex + 1];
    prevButton = $buttons[$buttons.length - 1];
    currentButton = $buttons[currentIndex];
    nextButton = $buttons[currentIndex + 1];
  } else {
    prevSlide = $items[currentIndex - 1];
    currentSlide = $items[currentIndex];
    nextSlide = $items[currentIndex + 1];
    prevButton = $buttons[currentIndex - 1];
    currentButton = $buttons[currentIndex];
    nextButton = $buttons[currentIndex + 1];
  }
};

const scrollAuto = () => {
  indexFunction();
  if (currentIndex >= $items.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex += 1;
  }
  currentButton.classList.remove("carousel__button--active");
  currentSlide.classList.remove("carousel__item--selected");
  currentSlide.style.opacity = "0";

  currentButton = $buttons[currentIndex];
  currentSlide = $items[currentIndex];

  currentButton.classList.add("carousel__button--active");
  currentSlide.classList.add("carousel__item--selected");
  currentSlide.style.opacity = "1";
};

const startAuto = () => {
  intervalId = setInterval(scrollAuto, 4000);
};

$buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    $items.forEach((item) => {
      item.classList.remove("carousel__item--selected");
      item.style.opacity = "0";
    });
    $buttons.forEach((button) =>
      button.classList.remove("carousel__button--active")
    );
    currentIndex = i;
    $items[i].classList.add("carousel__item--selected");
    $items[i].style.opacity = "1";
    button.classList.add("carousel__button--active");
  });
  $items[0].classList.add("carousel__item--selected");
  $buttons[0].classList.add("carousel__button--active");
});

startAuto();

const handleMouseDown = (event) => {
  event.preventDefault();
  if (event.target.classList.contains("carousel__button")) {
    return;
  }
  indexFunction();
  isDragging = true;
  isScrolling = true;
  dragStartX = event.clientX;
};

const handleMouseMove = (event) => {
  event.preventDefault();
  const dragCurrentX = event.clientX;
  dragDistance = dragCurrentX - dragStartX;

  if (isDragging && isScrolling) {
    if (dragDistance <= 0) {
      if (event.movementX <= 0) {
        prevSlide.style.opacity = 0;
        currentSlide.style.opacity = `${(opacitySelected -= 0.00086805555)}`;
        nextSlide.style.opacity = `${(opacityNonSelected += 0.00086805555)}`;
        if (dragDistance <= -maxWidth / 2) {
          scroll(-1);
          isScrolling = false;
        }
      } else {
        prevSlide.style.opacity = 0;
        currentSlide.style.opacity = `${(opacitySelected += 0.00086805555)}`;
        nextSlide.style.opacity = `${(opacityNonSelected -= 0.00086805555)}`;
      }
    } else {
      if (event.movementX >= 0) {
        nextSlide.style.opacity = 0;
        currentSlide.style.opacity = `${(opacitySelected -= 0.00086805555)}`;
        prevSlide.style.opacity = `${(opacityNonSelected += 0.00086805555)}`;
        if (dragDistance >= maxWidth / 2) {
          scroll(1);
          isScrolling = false;
        }
      } else {
        nextSlide.style.opacity = 0;
        currentSlide.style.opacity = `${(opacitySelected += 0.00086805555)}`;
        prevSlide.style.opacity = `${(opacityNonSelected -= 0.00086805555)}`;
      }
    }
  }
};

const handleMouseUp = (event) => {
  event.preventDefault();
  if (isDragging) {
    isDragging = false;
    isScrolling = false;
    opacitySelected = 1;
    opacityNonSelected = 0;
    indexFunction();
    nextSlide.style.opacity = `0`;
    currentSlide.style.opacity = `1`;
    prevSlide.style.opacity = `0`;
  }
};

const scroll = (delta) => {
  if (delta > 0) {
    if (currentIndex <= 0) {
      currentIndex = $items.length - 1;
    } else {
      currentIndex -= 1;
    }
    currentButton.classList.remove("carousel__button--active");
    currentSlide.classList.remove("carousel__item--selected");

    currentButton = $buttons[currentIndex];
    currentSlide = $items[currentIndex];

    currentButton.classList.add("carousel__button--active");
    currentSlide.classList.add("carousel__item--selected");
    isScrolling = true;
  } else {
    if (currentIndex >= $items.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex += 1;
    }
    currentButton.classList.remove("carousel__button--active");
    currentSlide.classList.remove("carousel__item--selected");

    currentButton = $buttons[currentIndex];
    currentSlide = $items[currentIndex];

    currentButton.classList.add("carousel__button--active");
    currentSlide.classList.add("carousel__item--selected");
    isScrolling = true;
  }
};

$carousel.addEventListener("mousedown", handleMouseDown);
$carousel.addEventListener("mousemove", handleMouseMove);
$carousel.addEventListener("mouseup", handleMouseUp);
$carousel.addEventListener("mouseleave", handleMouseUp);
