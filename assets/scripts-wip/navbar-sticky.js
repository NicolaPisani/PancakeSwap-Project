//glitching in mobile mode
const navBar = document.getElementById("navbar");
let prevScrollPos = window.scrollY;

function handleScroll() {
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    navBar.style.top = "0";
  } else if (currentScrollPos > 70) {
    navBar.style.top = "-56px";
  }

  prevScrollPos = currentScrollPos;
}

function handleResize() {
  // Recalculate scroll position when the viewport dimensions change
  prevScrollPos = window.scrollY;
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", handleResize);

// ----------------other alternative-----------------------------------
// const body = document.body;
// let lastScroll = 0;

// window.addEventListener("scroll", () => {
//   const currentScroll = window.pageYOffset;
//   if (currentScroll <= 0) {
//     body.classList.remove("scroll-up");
//     return;
//   }

//   if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
//     body.classList.remove("scroll-up");
//     body.classList.add("scroll-down");
//   } else if (
//     currentScroll < lastScroll &&
//     body.classList.contains("scroll-down")
//   ) {
//     body.classList.remove("scroll-down");
//     body.classList.add("scroll-up");
//   }
//   lastScroll = currentScroll;
// });
