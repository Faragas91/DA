const orderedFoodList = document.querySelector('.basket__ordered-container');

// Generates the HTML structure for all dishes and inserts it into the main container
function createHtmlStructureForAllDishes() {
    let dishContainer = '';

    for (let i = 0; i < myDishes.length; i++) {
        dishContainer += templateDishContainer(myDishes[i], i);
    }
    document.querySelector(".dish__main-container").innerHTML = dishContainer;
};

// Button appears when the size of the Display is under 700px
// With the button the basket can be shown and hidden 
function basketButton() {
    const buttonBasket = document.getElementById("basket-btn");
    const screenBasketRight = document.getElementById("container-right");
    const screenBasketLeft = document.getElementById("container-left");

    buttonBasket.addEventListener("click", () => {
        buttonBasket.classList.toggle('active');
        screenBasketRight.classList.toggle('active');
        screenBasketLeft.classList.toggle('active');    
    });
};

// Add EventListener to every Dish in the database.js
function buttonAddDishesToBasket() {
    document.querySelectorAll('.dish__add-button').forEach((dishElement, index) => {
        dishElement.addEventListener('click', () => {
            const dishName = dishElement.getAttribute('data-name');
            const selectedDish = myDishes.find(dish => dish.name === dishName);

            if (selectedDish) {
                addDishToBasket(selectedDish, index);
            }
        });
    });
}

createHtmlStructureForAllDishes();
buttonAddDishesToBasket();
basketButton();



