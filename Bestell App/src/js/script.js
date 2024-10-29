const dishContainer = myDishes.map((dish, index) => templateContainer(dish, index));
document.querySelector(".dish__main-container").innerHTML = dishContainer.join("");

