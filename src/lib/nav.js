const navLinksEl = document.querySelector(".nav__links");
const openNavBtn = document.getElementById("open-nav");
const closeNavBtn = document.getElementById("close-nav");

openNavBtn.addEventListener("click", () => {
  navLinksEl.classList.add("active");
});

closeNavBtn.addEventListener("click", () => {
  navLinksEl.classList.remove("active");
});
