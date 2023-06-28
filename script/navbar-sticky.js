const navbar = document.querySelector(".navbar");
let prevScrollPos = window.scrollY;

function handleScroll() {
  const currentScrollPos = window.scrollY;
  console.log(currentScrollPos);

  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0";
  } else if (currentScrollPos > 70) {
    navbar.style.top = "-56px";
  }

  prevScrollPos = currentScrollPos;
}

function handleResize() {
  prevScrollPos = window.scrollY;
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", handleResize);
