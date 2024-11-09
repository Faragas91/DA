const orderedFoodList = document.querySelector('.basket__ordered-container');

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

// Show the divider only when the total sum is not 0 when the page is loaded up
document.addEventListener('DOMContentLoaded', function() {
    const dividers = document.querySelectorAll('.divider');
    dividers.forEach(divider => {
        divider.style.display = 'none';
    });
});

// Show the basketCosts only when the total sum is not 0 when the page is loaded up
document.addEventListener('DOMContentLoaded', function() {
    const basketCosts = document.querySelector('.basket__costs');
    if (basketCosts) {
        basketCosts.style.display = 'none';
    };
});


// Checks whether the selected dish is already in the shopping cart and if not, the quantity is increased
function orderExists(dish) {
    // Checks whether the dish with the same name is already in the shopping cart
    const existingDishContainer = document.querySelector(`.basket__ordered-food[data-name="${dish.name}"]`);

    if (existingDishContainer) {
        // When the dish is not already in the shopping cart then the dish.amount will be increased by 1

        dish.amount += 1;

        // Updates the quantity of the dish
        const amountDisplay = existingDishContainer.querySelector('.dish__price');
        amountDisplay.textContent = `${dish.amount}x`;

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
            calculateTotalSum();
        }
    } else {
        // Updates the quantity of the dish
        const amountDisplay = document.querySelector(`.basket__ordered-food[data-name="${dish.name}"] .dish__price`);
        amountDisplay.textContent = `${dish.amount}x`;

        // Updates the total price of the dish
        const priceDisplay = document.querySelector(`.basket__ordered-food[data-name="${dish.name}"] .dish__sum`);
        const totalPrice = dish.amount * dish.price;
        priceDisplay.textContent = `${totalPrice.toFixed(2)}€`;
        
        calculateTotalSum();
    }
}

function deleteDishFromBasket(dish) {
    const dishContainer = document.querySelector(`.basket__ordered-food[data-name="${dish.name}"]`);
    if (dishContainer) {
        dishContainer.remove();
        calculateTotalSum();
    }
}

function calculateTotalSum() {
    let totalSum = 0;

    document.querySelectorAll('.dish__sum').forEach(priceElement => {
        const priceText = priceElement.textContent.replace('€', '').trim();
        const price = parseFloat(priceText);
        totalSum += isNaN(price) ? 0 : price;
    });
    
    document.getElementById('subtotal-sum').innerHTML = `${totalSum.toFixed(2)}€`;
    
    const dividers = document.querySelectorAll('.divider');
    dividers.forEach(divider => {
        divider.style.display = totalSum === 0 ? 'none' : 'block';
    });

    const basketCosts = document.querySelector('.basket__costs');
       if (basketCosts) {
            basketCosts.style.display = totalSum === 0 ? 'none' : 'block';
       }
}




