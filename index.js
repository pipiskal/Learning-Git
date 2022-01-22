
let foodList = document.querySelector("ol");

let newFruit = document.createElement('li');

newFruit.textContent = "WaterMellons";
newFruit.className = "food-list-item";

console.log(newFruit);

foodList.appendChild(newFruit);