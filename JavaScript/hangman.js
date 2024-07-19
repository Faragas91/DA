// liste mit Wörtern erstellen
// Zufällige Auswahl der Wörter erstellen
// Das Wort das ausgewählt wurde in unterstriche umwandeln
// Input vom User abfangen und mit dem Buchstaben vergleichen



let words = ["apple", "orange", "pineapple"];

// console.log(Math.floor(Math.random() * words.length));

let chosen_word = (words[(Math.floor(Math.random() * words.length))]);

letter_from_chosen_word = chosen_word.split('');

console.log(letter_from_chosen_word);

underscore_from_chosen_word = letter_from_chosen_word.map(letter=> " _ ").join('');

console.log(underscore_from_chosen_word);








