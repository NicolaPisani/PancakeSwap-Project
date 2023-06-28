import { internalMemory } from "./internalMemory.mjs";

const phishingCloseButton = document.querySelector(".phishing-popup__close");
const phishingPopup = document.querySelector(".phishing-popup");

phishingCloseButton.addEventListener("click", () => {
  phishingPopup.style.display = "none";
  internalMemory.save("isPopupClosed", true);
});

if (internalMemory.get("isPopupClosed")) {
  phishingPopup.style.display = "none";
}
