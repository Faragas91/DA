let dishContainer = '';

for (let i = 0; i < myDishes.length; i++) {
    dishContainer += templateContainer(myDishes[i], i);
    console.log(dishContainer);
}

document.querySelector(".dish__main-container").innerHTML = dishContainer;







