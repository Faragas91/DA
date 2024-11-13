// Generates the HTML structure for all dishes and inserts it into the main container
let dishContainer = '';

// Loops through the array `myDishes` and creates an HTML template
for (let i = 0; i < myDishes.length; i++) {
    dishContainer += templateDishContainer(myDishes[i], i);
    console.log(dishContainer);
}

// Inserts the entire HTML of the dishes into the container
document.querySelector(".dish__main-container").innerHTML = dishContainer;

// Button appears when the size of the Display is under 700px
// With the button the basket can be shown and hidden 
const buttonBasket = document.getElementById("basket-btn");
const screenBasketRight = document.getElementById("container-right");
const screenBasketLeft = document.getElementById("container-left");

buttonBasket.addEventListener("click", () => {
    buttonBasket.classList.toggle('active');
    screenBasketRight.classList.toggle('active');
    screenBasketLeft.classList.toggle('active');    
});
