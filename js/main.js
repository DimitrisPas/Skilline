const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".nav-links");

hamburger.addEventListener("click", function () {
      this.classList.toggle("is-active");
});

hamburger.addEventListener("click", function () {
      links.classList.toggle("test");
});