class Ingredient {
    constructor(description, unit, amount) {
        this.description = description;
        this.unit = unit;
        this.amount = amount;
        this.calc_amount = amount;
    }
}

const Ingredients = [
    new Ingredient("Hackfleisch", "g", 100),
    new Ingredient("Zwibel(n)", "", 0.33),
    new Ingredient("Tomatenmark", "EL", 0.17),
    new Ingredient("Tomatenpüree", "ml", 83.3),
    new Ingredient("Oregano", "", 0),
    new Ingredient("Salz und Pfeffer", "", 0),
    new Ingredient("Knoblauchzehe(n)", "", 0.17),
    new Ingredient("Paprikapulver", "", 0),
    new Ingredient("Butter", "g", 13.3),
    new Ingredient("Mehl", "g", 13.3),
    new Ingredient("Gemüsebrühe", "L", 0.08),
    new Ingredient("Milch", "L", 0.08),
    new Ingredient("Pizzakäse", "PAK", 0.17),
    new Ingredient("Muskat", "", 0),
    new Ingredient("Lasagneplatten", "PAK", 0.17),
];

document.addEventListener("DOMContentLoaded", function () {
    calculatPortions();
});

createIngredientsRows();

function calculatPortions() {
    let user_portions_input = document.getElementById("input_field");
    let user_portions = parseInt(user_portions_input.value);

    if (user_portions > 20) {
        document.getElementById("error_message").textContent =
            "Fehler: Maximale Portion 20 Stk";
        document.getElementById("error_message").style.color = "red";
        return;
    } else if (user_portions < 1) {
        document.getElementById("error_message").textContent =
            "Fehler: Minimale Portion 1 Stk";
        document.getElementById("error_message").style.color = "red";
        return;
    }
    else if (isNaN(user_portions) || !isFinite(user_portions)) {
        document.getElementById("error_message").textContent =
            "Fehler: Bitte gebe eine gültige Anzahl an Portionen ein";
    
        document.getElementById("error_message").style.color = "red";
        return;
    }

    for (let index = 0; index < Ingredients.length; index++) {
        const element = Ingredients[index];
        element.calc_amount = user_portions * element.amount;
    }
    createIngredientsRows();
}

function createIngredientsRows() {
    let ingredient_table = document.getElementById("table");
    ingredient_table.innerHTML = "";

    for (let index = 0; index < Ingredients.length; index++) {
        const element = Ingredients[index];
        let amountText =
            element.amount === 0
                ? "nach Geschmack"
                : element.calc_amount.toFixed(2);
        const row =
            "<tr><td>" +
            amountText +
            "</td><td>" +
            element.unit +
            "</td><td>" +
            element.description +
            "</td></tr>";
        ingredient_table.innerHTML += row;
    }

    const tableRows = document.querySelectorAll(".table_ingredient tr");

    for (let i = 0; i < tableRows.length; i++) {
        if (i % 2 === 0) {
            tableRows[i].style.backgroundColor = "#EFEFEF";
        } else {
            tableRows[i].style.backgroundColor = "#ffffff";
        }
    }

    const inputField = document.getElementById("input_field");
    const error_message = document.getElementById("error_message");

    inputField.addEventListener("input", function () {
        const portions = parseInt(inputField.value);
        if (portions > 20) {
            error_message.textContent = "Fehler: Maximale Portion 20 Stk";
            error_message.style.color = "red";
        } else {
            error_message.textContent = "";
        }
    });
}
