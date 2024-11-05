const basket = document.querySelector('.basket');
const offScreenMenu = document.querySelector('.off-screen-menu');

const orderedFoodList = document.querySelector('.basket__ordered-container');

// Show the basket menu or closed it
basket.addEventListener('click', () => {
    basket.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});


// For each dish__details-container a addEventListener will be added 
document.querySelectorAll('.dish__details-container').forEach((dishElement, index) => {
    dishElement.addEventListener('click', () => {

        // Get the attribute from the selected dish
        const dishName = dishElement.getAttribute('data-name');
        
        // Find the name from the selected dish
        const selectedDish = myDishes.find(dish => dish.name === dishName);

        if (selectedDish) {
            addDishToBasket(selectedDish, index);
        }
    });
});


// Checks whether the selected dish is already in the shopping cart and if not, the quantity is increased
function orderExists(dish) {
    // Checks whether the dish with the same name is already in the shopping cart
    const existingDishContainer = document.querySelector(`.basket__ordered-container[data-name="${dish.name}"]`);

    if (existingDishContainer) {
        // When the dish is not already in the shopping cart then the dish.amount will be increased by 1

        dish.amount += 1;

        // Updates the quantity of the dish
        const amountDisplay = existingDishContainer.querySelector('.dish__price');
        amountDisplay.textContent = `${dish.amount} x ${dish.price.toFixed(2)}€`;

        // Gives true back when the dish is already in the shopping cart
        return true;  
    }
    // Gives false back when the dish is not already in the shopping cart
    return false;  
}


// Update the dish amount
function updateDishAmount(dish, change) {
    dish.amount += change;

    // Removes the dish from the shopping cart if the quantity is 0 or less
    if (dish.amount <= 0) {
        dish.amount = 0;

        const dishContainer = document.querySelector(`.basket__ordered-food[data-name="${dish.name}"]`);
        if (dishContainer) {
            dishContainer.remove();
        }
    } else {
        // Updates the quantity of the dish
        const amountDisplay = document.querySelector(`.basket__ordered-food[data-name="${dish.name}"] .dish__price`);
        amountDisplay.textContent = `${dish.amount} x ${dish.price.toFixed(2)}€`; 
    }
}

function deleteDishFromBasket(dish, index) {
    const dishContainer = document.querySelector(`.basket__ordered-food[data-name="${dish.name}"]`);
    if (dishContainer) {
        dishContainer.remove();
    }
}
