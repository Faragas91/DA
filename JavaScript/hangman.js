// liste mit Wörtern erstellen
// Zufällige Auswahl der Wörter erstellen
// Das Wort das ausgewählt wurde in unterstriche umwandeln
// Input vom User abfangen und mit dem Buchstaben vergleichen


// User input
let userInput = prompt('Enter letter: ');
alert("Sie haben eingegeben: " + userInput);

// List of words
let words = ["apple", "orange", "pineapple"];

// Choose random word from the list and split it into letters
let chosen_word = (words[(Math.floor(Math.random() * words.length))]);
letter_from_chosen_word = chosen_word.split('');
console.log(letter_from_chosen_word);

// Replace underscores with the letters
underscore_from_chosen_word = letter_from_chosen_word.map(letter=> " _ ").join('');
console.log(underscore_from_chosen_word);








