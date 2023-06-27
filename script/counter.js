class FromZero {
  constructor(selector) {
    this.itemToReplace = document.querySelectorAll(selector);
    this.timer;
    this.intermediateValues = new Array(this.itemToReplace.length).fill(0);
    this.maxValues = Array.from(this.itemToReplace).map((item) => {
      const value = parseFloat(item.innerText.replace(/,/g, ""));
      this.intermediateValues.push(value);
      return value;
    });
    this.dividedValues = this.maxValues.map((max) => max / 80);
    this.timer = setInterval(this.updatePercentages.bind(this), 16);
  }

  updatePercentages() {
    let allReachedMax = true;
    for (let i = 0; i < this.itemToReplace.length; i++) {
      if (this.intermediateValues[i] < this.maxValues[i]) {
        this.intermediateValues[i] += this.dividedValues[i];

        if (this.intermediateValues[i] >= this.maxValues[i]) {
          this.intermediateValues[i] = this.maxValues[i];
        } else {
          allReachedMax = false;
        }
        if (
          this.itemToReplace[i].classList.contains(
            "crypto-section__item-percentage"
          )
        ) {
          this.itemToReplace[i].innerHTML = this.intermediateValues[i] + "%";
        } else if (
          this.itemToReplace[i].classList.contains(
            "cake-token-section__item-number"
          )
        ) {
          const formattedNumber = this.formatNumber(this.intermediateValues[i]);
          this.itemToReplace[i].innerHTML = formattedNumber;
        } else {
          const formattedNumber = this.formatNumber(this.intermediateValues[i]);
          this.itemToReplace[i].innerHTML = "$" + formattedNumber;
        }
      }
    }

    if (allReachedMax) {
      clearInterval(this.timer);
    }
  }

  formatNumber(number) {
    return number.toLocaleString(undefined, {
      useGrouping: true,
      maximumFractionDigits: 0,
    });
  }
}

let sectionsToObserve = [
  document.querySelector(".crypto-section__item-percentage"),
  document.querySelector(".cake-token-section__item-number"),
  document.querySelector(".count"),
];

function activateScript(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const counter = new FromZero(`.${entry.target.classList.value}`);

      observer.unobserve(entry.target);
    }
  });
}

sectionsToObserve.forEach((section) => {
  const observer = new IntersectionObserver(activateScript, {
    root: null,
    threshold: 0.5,
  });
  observer.observe(section);
});
