const lightBtn = document.querySelector(".site-header-light");
const darkBtn = document.querySelector(".site-header-dark");

darkBtn.addEventListener("click", () => {
  document.body.classList.add("dark-mode");
});
lightBtn.addEventListener("click", () => {
  document.body.classList.remove("dark-mode");
});
