const dishContainer = myDishes.map((dish, index) => templateFoodContainer(dish, index));
document.querySelector(".dish__main-container").innerHTML = dishContainer.join("");






