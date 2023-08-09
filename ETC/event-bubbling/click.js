const parentButton = document.querySelector(".parent");
const childButton = document.querySelector(".child");

parentButton.addEventListener("click", () => console.log("Parent clicked!"));
childButton.addEventListener("click", () => console.log("Child clicked!"));
