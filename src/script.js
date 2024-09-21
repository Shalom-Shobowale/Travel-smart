const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");
const menu = document.querySelector(".menu");
// const scroll = document.querySelector('.scroll-nav')

document.querySelector(".open").addEventListener("click", function () {
  menu.classNameList.remove("hidden");
  closeButton.classNameList.remove("hidden");
  openButton.classNameList.add("hidden");
});
document.querySelector(".close").addEventListener("click", function () {
  menu.classNameList.add("hidden");
  openButton.classNameList.remove("hidden");
  closeButton.classNameList.add("hidden");
});

document.addEventListener("scroll", () => {
  const scroll = document.querySelector(".scroll-nav");
  if (window.scrollY > 10) {
    scroll.classNameList.add("scrolled");
  } else {
    scroll.classNameList.remove("scrolled");
  }
});
