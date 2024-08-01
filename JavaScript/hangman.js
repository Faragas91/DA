// liste mit Wörtern erstellen
// Zufällige Auswahl der Wörter erstellen
// Das Wort das ausgewählt wurde in unterstriche umwandeln
// Input vom User abfangen und mit dem Buchstaben vergleichen


// // User input
// let userInput = prompt('Enter letter: ');
// alert("Sie haben eingegeben: " + userInput);

// Letters



// Variable
let words = ["apple", "orange", "pineapple"];
let empty_letter = "";
let alphabet = "abcdefghijklmnopqrstuvwxyz";

// Choose random word from the list and split it into letters
let chosen_word = (words[(Math.floor(Math.random() * words.length))]);
letter_from_chosen_word = chosen_word.split('');
console.log(letter_from_chosen_word);

// Replace underscores with the letters
underscore_from_chosen_word = letter_from_chosen_word.map(letter=> " _ ").join('');
console.log(underscore_from_chosen_word);

// Choose Random letters from the alphabet
while (empty_letter.length < chosen_word.length) {
    empty_letter = "";
    empty_letter += alphabet[Math.floor(Math.random() * alphabet.length)];
    // empty_letter = "a"
    for (let i = 0; i < chosen_word.length; i++) {
        for (let j = 0; j < chosen_word.length; j++) {
            // console.log(empty_letter[j]);
            // console.log(letter_from_chosen_word[i])
            if (empty_letter[j] == letter_from_chosen_word[i]){
                underscore_from_chosen_word = underscore_from_chosen_word.replace(underscore_from_chosen_word[i], letter_from_chosen_word[i]);
                
            }
            else {
                break;
            }
        }
    }
}

console.log(underscore_from_chosen_word);









