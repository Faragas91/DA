const basket = document.querySelector('.basket');
const offScreenMenu = document.querySelector('.off-screen-menu');

// dishList = [];

// Set the varibles active or not acitve
basket.addEventListener('click', () => {
    basket.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});

function FoodToBasket() {
    const orderedFood = document.querySelector('.dish__details-container');
    const orderedFoodList = document.querySelector('.basket__ordered-container');

    orderedFood.addEventListener('click', () => {
        // Erstelle den neuen Container
        basket.classList.toggle('active');
        offScreenMenu.classList.toggle('active');
        const newDishContainer = `
            <div class="basket__ordered-container">
                <img src="../../assets/icons/minus_food.png" class="remove-food">
                <h3 class="dish__title" id="dish-title">bla</h3>
                <img src="../../assets/icons/plus_food.png" class="add-food">
            </div>
        `;

        // Füge den neuen Container zur off-screen-menu hinzu
        orderedFoodList.innerHTML += newDishContainer; // Hier wird der neue Container hinzugefügt
        orderedFoodList.classList.add('active'); // Stelle sicher, dass das off-screen-menu sichtbar ist
    });
}

FoodToBasket();













































// // Funktion zum Hinzufügen von Gerichten zum Warenkorb

// function addFoodToBasket(index) {
//     const dish = myDishes[index]; // Angenommen, 'dishes' ist dein Array mit Gerichten
//     dishList.push(dish);
//     updateBasket();

// }
// // Funktion zum Entfernen von Gerichten aus dem Warenkorb

// function removeFoodFromBasket(index) {
//     const dishIndex = dishList.findIndex(d => d.name === dishes[index].name);
//     if (dishIndex > -1) {
//         dishList.splice(dishIndex, 1);
//     }

//     updateBasket();

// }


// // Funktion zum Aktualisieren des Warenkorbs

// function updateBasket() {
//     basket.innerHTML = ''; // Leere den Warenkorb
//     dishList.forEach((dish, index) => {
//         basket.innerHTML += templateBasketContainer(dishList, index);
//     });

// }

// // Event-Listener für die Plus- und Minus-Buttons

// document.addEventListener('click', (event) => {
//     if (event.target.classList.contains('add-food')) {
//         const index = event.target.getAttribute('data-index');
//         addFoodToBasket(index);
//     } else if (event.target.classList.contains('remove-food')) {
//         const index = event.target.getAttribute('data-index');
//         removeFoodFromBasket(index);
//     }
// });