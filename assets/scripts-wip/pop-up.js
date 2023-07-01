//not working(?)
const popup = document.querySelector("#walletModalBackground");
const popupContent = document.querySelector("#walletModal");
const walletButton = document.querySelector("#connectWalletButton");
const darkThemeButton = null;

connectWalletButton.addEventListener("click", () => {
  popup.classList.add("active");
});

popup.addEventListener("click", () => {
  popup.classList.remove("active");
});

popupContent.addEventListener("click", () => {
  console.log("clicked");
  return;
});

////////////////////////////////////////////////////////////////////////////////
//LOGIC - TESTED - it works
// const popup = document.querySelector("#popup");
// const popupContent = document.querySelector("#popupContent");
// const walletButton = document.querySelector("#connectWalletButton");
// const darkThemeButton = null;

// connectWalletButton.addEventListener("click", () => {
//   popup.classList.add("active");
// });

// popup.addEventListener("click", () => {
//   popup.classList.remove("active");
// });

// popupContent.addEventListener("click", () => {
//   console.log("clicked");
//   return;
// });
