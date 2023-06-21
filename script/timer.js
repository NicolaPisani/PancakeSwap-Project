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

var timeoutHandle;

function countdown(minutes, seconds) {
  const $timeLeft = document.querySelector("#time-left");
  const $firstEntry = document.querySelector("#first-entry");
  function tick() {
    $timeLeft.innerHTML = `
      ${minutes < 10 ? "0" : ""}${minutes.toString()}:${
      seconds < 10 ? "0" : ""
    }${String(seconds)}`;
    $firstEntry.innerHTML = `
      ~${minutes < 10 ? "0" : ""}${minutes.toString()}:${
      seconds < 10 ? "0" : ""
    }${String(seconds)}`;
    seconds--;
    if (seconds >= 0) {
      timeoutHandle = setTimeout(tick, 1000);
    } else {
      if (minutes >= 1) {
        setTimeout(function () {
          countdown(minutes - 1, 59);
        }, 1000);
      } else {
        if ($timeLeft.classList.contains("prediction-section__time-left")) {
          $timeLeft.innerHTML = "Closing";
        }
      }
    }
  }
  tick();
}

countdown(5, 0);

function secondCountdown(otherMinutes, otherSeconds) {
  const $secondEntry = document.querySelector("#second-entry");
  function secondTick() {
    $secondEntry.innerHTML = `
      ~${otherMinutes < 10 ? "0" : ""}${otherMinutes.toString()}:${
      otherSeconds < 10 ? "0" : ""
    }${String(otherSeconds)}`;
    otherSeconds--;
    if (otherSeconds >= 0) {
      timeoutHandle = setTimeout(secondTick, 1000);
    } else {
      if (otherMinutes >= 1) {
        setTimeout(function () {
          secondCountdown(otherMinutes - 1, 59);
        }, 1000);
      }
    }
  }
  secondTick();
}

secondCountdown(10, 0);
