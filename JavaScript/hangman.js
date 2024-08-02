// liste mit Wörtern erstellen
// Zufällige Auswahl der Wörter erstellen
// Das Wort das ausgewählt wurde in unterstriche umwandeln
// Input vom User abfangen und mit dem Buchstaben vergleichen


// // User input
// let userInput = prompt('Enter letter: ');
// alert("Sie haben eingegeben: " + userInput);

// Letters

// 

// Variable
let words = ["banana","apple", "orange", "pineapple"];
let empty_letter = "";
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let underscore_from_chosen_word = [];

// Choose random word from the list and split it into letters
let chosen_word = (words[(Math.floor(Math.random() * words.length))]);
letter_from_chosen_word = chosen_word.split('');
// console.log(letter_from_chosen_word);

// Replace underscores with the letters
// underscore_from_chosen_word = letter_from_chosen_word.map(letter=> " _ ").join('');
for (let u = 0; u < letter_from_chosen_word.length; u++){
    underscore_from_chosen_word.push("_")
}
// console.log(underscore_from_chosen_word);

// Choose Random letters from the alphabet
while (empty_letter.length < chosen_word.length) {
    empty_letter = "";
    empty_letter += alphabet[Math.floor(Math.random() * alphabet.length)]; // set random letter
    if (underscore_from_chosen_word != letter_from_chosen_word){ // check that the variables not equal
        for (let i = 0; i < chosen_word.length; i++) { 
            for (let j = 0; j < chosen_word.length; j++) {
                if (letter_from_chosen_word[i] == empty_letter[j]){ // replace "_" with letter wenn the letters are equal
                    underscore_from_chosen_word[i] = letter_from_chosen_word[i]
                }
                else {
                    break; // when not equal the inner Loop stops, because we have in empty_letter only one letter
                }
            }
        }
    }
}
console.log(underscore_from_chosen_word);







