const pictures = [
  'hangman_0.png',
  'hangman_1.png',
  'hangman_2.png',
  'hangman_3.png',
  'hangman_4.png',
  'hangman_5.png',
  'hangman_6.png',
  'hangman_7.png',
  'hangman_8.png',
  'hangman_9.png',
  'hangman_10.png',
  'hangman_11.png',
];
function createLetterButtons() {
    let letterButtons = '';
    let letter;
    for (let i = 65; 90 >= i; i++) {// A-65, Z-90
      letter = String.fromCharCode(i);
      letterButtons += '<button class="hangman__letter-button" onclick="setLetter(\'' + letter + '\');">' + letter + '</button>';
    }
    document.getElementById('box').innerHTML = letterButtons;
}

let setLetter = function(letter) {
  document.getElementById('name').innerHTML += letter;
};


function generatePicture() {
  const currentPicture = 0;
  
}