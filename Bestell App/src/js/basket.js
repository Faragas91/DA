const basket = document.querySelector('.basket');
const offScreenMenu = document.querySelector('.off-screen-menu');

const orderedFoodList = document.querySelector('.basket__ordered-container');

// Set the varibles active or not acitve
basket.addEventListener('click', () => {
    basket.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});


// Füge einen Event-Listener zu jedem Gericht hinzu
document.querySelectorAll('.dish__details-container').forEach(dishElement => {
    dishElement.addEventListener('click', () => {
        const dishName = dishElement.getAttribute('data-name');
        
        // Finde das Gericht in myDishes anhand des Namens
        const selectedDish = myDishes.find(dish => dish.name === dishName);

        if (selectedDish) {
            // console.log(`Selected dish: ${selectedDish.name}`);
            // Hier kannst du weitere Aktionen für das ausgewählte Gericht hinzufügen
            addDishToBasket(selectedDish);
            //plusOneAmount(dishAmount);
        }
    });
});


function orderExists() {
    const existingDishContainer = document.querySelector('data-name');

    if (existingDishContainer) {
        dishAmount += 1;

        const amountDisplay = existingDishContainer.querySelector('.dish__price');
        amountDisplay.textContent = `${dishAmount} x ${dish.price.toFixed(2)}€`;
    
        return true;
    } 
    return false;
}


// Plus one amount

function plusOneAmount(dishAmount) {
    // console.log(typeof dishAmount === 'number');
    const amountPlus = document.getElementById('basket-plus');
    amountPlus.addEventListener('click', () => {
        dishAmount += 1;
    });
    return dishAmount;
}
