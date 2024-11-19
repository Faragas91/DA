// Checks whether the selected dish is already in the shopping cart and if not, the quantity is increased
function orderExists(dish) {
    const existingDishContainer = document.querySelector(`.basket__ordered-food[data-name="${dish.name}"]`);
    if (existingDishContainer) {
        dish.amount += 1;
        const amountDisplay = existingDishContainer.querySelector('.dish__price');
        amountDisplay.textContent = `${dish.amount}x`;
        return true;  
    }
    return false;  
}

// Function to update the dish amount
function updateDishAmount(dish, change) {
    dish.amount += change;
    if (dish.amount <= 0) {
        updateRemoveDish(dish);
    } else {
        updateChange(dish);
    }
}

// Function when the amount is under 0 it will remove the dish
function updateRemoveDish(dish) {
    dish.amount = 0;
    const dishContainer = document.querySelector(`.basket__ordered-food[data-name="${dish.name}"]`);
    if (dishContainer) {
        dishContainer.remove();
        calculateTotalSum();
    }
}

// Function to change the amount of the dish 
function updateChange(dish) {
    const amountDisplay = document.querySelector(`.basket__ordered-food[data-name="${dish.name}"] .dish__price`);
    amountDisplay.textContent = `${dish.amount}x`;
    const priceDisplay = document.querySelector(`.basket__ordered-food[data-name="${dish.name}"] .dish__sum`);
    const totalPrice = dish.amount * dish.price;
    priceDisplay.textContent = `${totalPrice.toFixed(2)}€`;
    calculateTotalSum();
}

// Function to delete a dish from the basket
function deleteDishFromBasket(dish) {
    const dishContainer = document.querySelector(`.basket__ordered-food[data-name="${dish.name}"]`);
    if (dishContainer) {
        dishContainer.remove();
        calculateTotalSum();
    }
}

// Function to show the basket status 
// Is the basket empty a text will be displayed else it shows the choosen dishes
function visibilityBasketCosts(totalSum) {
    const basketCosts = document.querySelector('.basket__costs');
    if (basketCosts) {
        if (totalSum === 0) {
            templateBasketCostsEmpty(basketCosts)
        } else {
            templateBasketCostsShown(basketCosts, totalSum)
        }
    }
}

// Function to show or hide the dividers in the basket
function visibilityDivider(totalSum) {
    const dividers = document.querySelectorAll('.divider');
    dividers.forEach(divider => {
        divider.style.visibility = totalSum === 0 ? 'hidden' : 'visible';
    });
}

// Function to calculate the total sum of all orderded dishes in the basket
function calculateTotalSum() {
    let totalSum = 0;
    document.querySelectorAll('.dish__sum').forEach(priceElement => {
        const priceText = priceElement.textContent.replace('€', '').trim();
        const price = parseFloat(priceText);
        totalSum += isNaN(price) ? 0 : price;
    });
    visibilityDivider(totalSum);
    visibilityBasketCosts(totalSum);
    const subtotalSumElement = document.getElementById('subtotal-sum');
    if (subtotalSumElement) {
        subtotalSumElement.innerHTML = `${totalSum.toFixed(2)}€`;
    }
    basketButtonSum(totalSum);
}

function basketButtonSum(totalSum) {
    const basketSumElement = document.getElementById('basket-sum');
    if (basketSumElement) {
        const total = parseFloat(totalSum.toFixed(2)) + 3.99;
        basketSumElement.innerHTML = `${(total.toFixed(2))}€`;
    }
}

// Calls the calculateTotalSum function only once when loading the basket page. This prevents the “innerHTML is null” error from occurring.
document.addEventListener('DOMContentLoaded', calculateTotalSum);





