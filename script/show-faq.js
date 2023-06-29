const $faqContainer = document.querySelectorAll(".faq-section__shown");
const $faqButtons = document.querySelectorAll(".faq-section__button");

const showSvg = `<svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-231a1e38-0 cCdTkU">
                    <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
                  </svg>`;

const hideSvg = `<svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-231a1e38-0 cCdTkU"><path d="M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z"></path></svg>`;

$faqContainer.forEach((button, i) => {
  button.addEventListener("click", () => {
    const $hiddenDiv = document.querySelectorAll(".faq-section__hidden");
    if ($hiddenDiv[i].classList.contains("showHidden")) {
      $hiddenDiv[i].classList.remove("showHidden");
      $hiddenDiv[i].style.display = "none";
      $faqButtons[i].innerHTML = `Details${showSvg}`;
    } else {
      $hiddenDiv[i].classList.add("showHidden");
      $hiddenDiv[i].style.display = "initial";
      $faqButtons[i].innerHTML = `Hide${hideSvg}`;
    }
  });
});
