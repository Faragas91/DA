// Warten, bis das DOM vollständig geladen ist, bevor das Skript ausgeführt wird
document.addEventListener('DOMContentLoaded', () => {

    // Elemente aus dem DOM holen
    const inputField = document.getElementById('recipe__input');
    const calculateButton = document.getElementById('recipe__button');
    const ingredientValues = document.querySelectorAll('.recipe__table-data--value');

    // Ursprüngliche Werte der Zutaten speichern, um sie später basierend auf der Anzahl der Portionen zu multiplizieren
    const originalValues = Array.from(ingredientValues).map(item => parseFloat(item.textContent));

    // Funktion zum Berechnen der Zutaten basierend auf der Portionsmenge
    function calculateIngredients(multiplier) {
        ingredientValues.forEach((item, index) => {
            const newValue = originalValues[index] * multiplier; // Neuer Wert wird berechnet
            item.textContent = newValue;
        });
    }

    // Event-Listener für den Button hinzufügen
    calculateButton.addEventListener('click', () => {
        let multiplier = parseFloat(inputField.value); // Wert aus dem Eingabefeld holen und in eine Zahl umwandeln

        // Eingabevalidierung: Überprüfen, ob der Wert eine gültige Zahl ist
        if (isNaN(multiplier)) {
            alert('Bitte geben Sie eine gültige Zahl ein. Buchstaben sind nicht zulässig.');
            inputField.value = 1;
            multiplier = 1;
            calculateIngredients(multiplier);
            return;
        }

        // Überprüfen, ob der Wert innerhalb des erlaubten Bereichs (1 bis 20) liegt
        if (multiplier < 1 || multiplier > 20) {
            alert('Bitte geben Sie eine Zahl zwischen 1 und 20 ein.');
            inputField.value = 1;
            multiplier = 1;
            calculateIngredients(multiplier);
            return;
        }

        // Wenn der Wert gültig ist, Zutatenmengen basierend auf dem eingegebenen Multiplikator berechnen
        calculateIngredients(multiplier);
    });
});
