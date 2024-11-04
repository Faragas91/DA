// Generates the HTML structure for all dishes and inserts it into the main container
let dishContainer = '';

// Loops through the array `myDishes` and creates an HTML template
for (let i = 0; i < myDishes.length; i++) {
    dishContainer += templateContainer(myDishes[i], i);
    console.log(dishContainer);
}

// Inserts the entire HTML of the dishes into the container
document.querySelector(".dish__main-container").innerHTML = dishContainer;
