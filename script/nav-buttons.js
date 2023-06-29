const $modalsContainer = document.querySelector(".modals-container");
const $walletModal = document.querySelector(".modals-container");
const $walletButton = document.querySelectorAll(".connectWalletButton");
const $walletContainer = document.querySelector(".walletModal");

const $infoPopup = document.querySelector("#popup_btn");
const $popup = document.querySelector(".popup");
const $popupClose = document.querySelector(".popup__close");

const $body = document.querySelector("body");

$walletButton.forEach((button) => {
  button.addEventListener("click", () => {
    $modalsContainer.style.display = "flex";
    $body.style.overflow = "hidden";
    $walletContainer.style.display = "initial";
  });
});

$infoPopup.addEventListener("click", () => {
  $modalsContainer.style.display = "flex";
  $body.style.overflow = "hidden";
  $popup.style.display = "initial";
});

$popupClose.addEventListener("click", (event) => {
  $modalsContainer.style.display = "none";
  $body.style.overflow = "initial";
  $popup.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === $modalsContainer) {
    $modalsContainer.style.display = "none";
    $body.style.overflow = "initial";
    $popup.style.display = "none";
    $walletContainer.style.display = "none";
  }
});
