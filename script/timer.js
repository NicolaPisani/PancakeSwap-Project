const $cardsPrice = document.querySelectorAll(".card-prediction__price");

var i = 0;
var width = 1;

function move() {
  if (i == 0) {
    i = 1;
    width = 1;
    var elem = document.querySelector(".card-prediction__progress-bar--inner");
    var id = setInterval(frame, 2500);
  }
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      i = 0;
    } else {
      width++;
      elem.style.width = width + "%";
    }
  }
}
move();

class CountDown {
  constructor(clock, selector) {
    this.selector = selector;
    this.item;
    this.clock = clock;
    this.timeoutHandle;
  }
  countdown(minutes, seconds) {
    this.tick(minutes, seconds);
  }
  tick(minutes, seconds) {
    this.item = document.querySelector(this.selector);
    if (this.clock) {
      this.item.innerHTML = `
      ${minutes < 10 ? "0" : ""}${String(minutes)}:${
        seconds < 10 ? "0" : ""
      }${String(seconds)}`;
      seconds--;
    } else {
      this.item.innerHTML = `
      ~${minutes < 10 ? "0" : ""}${String(minutes)}:${
        seconds < 10 ? "0" : ""
      }${String(seconds)}`;
      seconds--;
    }
    if (seconds >= 0) {
      this.timeoutHandle = setTimeout(() => {
        this.tick(minutes, seconds);
      }, 1000);
    } else {
      if (minutes >= 1) {
        setTimeout(() => {
          this.countdown(minutes - 1, 59);
        }, 1000);
      } else {
        if (this.item.classList.contains("prediction-section__time-left")) {
          this.item.innerHTML = "Closing";
          this.item.style.fontSize = "9px";
        }
      }
    }
  }
}
const timeLeft = new CountDown(true, "#time-left");
const firstEntry = new CountDown(false, "#first-entry");
const secondEntry = new CountDown(false, "#second-entry");
timeLeft.countdown(5, 0);
firstEntry.countdown(5, 0);
secondEntry.countdown(10, 0);
