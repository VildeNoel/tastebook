const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}

const favoritter = document.querySelectorAll(".favorit");

favoritter.forEach((stjerne) => {
  stjerne.addEventListener("click", () => {
    if (stjerne.textContent === "☆") {
      stjerne.textContent = "★";
    } else {
      stjerne.textContent = "☆";
    }
  });
});
