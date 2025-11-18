let menuBtn = document.getElementById("menuBtn");
let mobileMenu = document.getElementById("mobileMenu");

menuBtn.onclick = function () {
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
  } else {
    mobileMenu.classList.add("hidden");
  }
};
