window.addEventListener("scroll", () => {
  const $buttonDiv = document.querySelector(".scroll-up");
  const $button = document.querySelector(".scroll-up__button");
  let maxHeight = 600;
  if (window.pageYOffset >= maxHeight) {
    $buttonDiv.style.display = "block"; // Mostra l'elemento
  } else {
    $buttonDiv.style.display = "none"; // Nascondi l'elemento
  }

  $button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
