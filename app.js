let menuBtn = document.getElementById("menuBtn");
let mobileMenu = document.getElementById("mobileMenu");

menuBtn.onclick = function () {
  if (
    mobileMenu.style.maxHeight === "0px" ||
    mobileMenu.style.maxHeight === ""
  ) {
    mobileMenu.style.maxHeight = "500px";
  } else {
    mobileMenu.style.maxHeight = "0px";
  }
};
