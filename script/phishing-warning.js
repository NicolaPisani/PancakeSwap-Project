const phishingCloseButton = document.querySelector(".phising-popup__close");
const phishingPopup = document.querySelector(".phishing-popup");

window.addEventListener("click", () => {
  phishingPopup.style.display = "none";
  localStorage.setItem("isPopupClosed", true);
});

window.addEventListener("DOMContentLoaded", () => {
  console.log(localStorage.getItem("isPopupClosed"));
  if (JSON.parse(localStorage.getItem("isPopupClosed"))) {
    phishingPopup.style.display = "none";
  }
});
