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

function visibilityBasketCosts(totalSum) {
    // Control the visibility of basket__costs based on the total amount
    const basketCosts = document.querySelector('.basket__costs');
    if (basketCosts) {
        if (totalSum === 0) {
            basketCosts.innerHTML = "Your shopping cart is empty. Please add some dishes.";
            basketCosts.style.fontSize = '36px';
        } else {
            basketCosts.style.fontSize = '16px';
            basketCosts.innerHTML = `
                <p class="basket__total-subsum">Subtotal: <span id="subtotal-sum">${totalSum.toFixed(2)}€</span></p>
                <p class="basket__delivery-costs">Delivery: <span id="delivery-costs">3.99€</span></p>
                <p class="basket__total-sum">Total: <span id="total-sum">${(totalSum + 3.99).toFixed(2)}€</span></p>
                <a href="../src/html/payment.html" class="basket__pay-btn" id="pay-button">Payment</a>
            `;
        }
    }
}

function visibilityDivider(totalSum) {
    // Control the visibility of dividers based on the total amount
    const dividers = document.querySelectorAll('.divider');
    dividers.forEach(divider => {
        divider.style.visibility = totalSum === 0 ? 'hidden' : 'visible';
    });
}

function calculateTotalSum() {
    let totalSum = 0;

    // Calculate the total sum of all the dishes
    document.querySelectorAll('.dish__sum').forEach(priceElement => {
        const priceText = priceElement.textContent.replace('€', '').trim();
        const price = parseFloat(priceText);
        totalSum += isNaN(price) ? 0 : price;
    });
    visibilityDivider(totalSum);
    visibilityBasketCosts(totalSum);

    // Check if the id subtotal-sum is there 
    // Without the check the Error message will be displayed --> Uncaught TypeError: Cannot set properties of null (setting 'innerHTML')
    const subtotalSumElement = document.getElementById('subtotal-sum');
    if (subtotalSumElement) {
        subtotalSumElement.innerHTML = `${totalSum.toFixed(2)}€`;
    }
}

//  Calls the calculateTotalSum function only once when loading the basket page. This prevents the “innerHTML is null” error from occurring.
document.addEventListener('DOMContentLoaded', calculateTotalSum);





