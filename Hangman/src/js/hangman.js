let letterButtons = '';
let letter;
for (let i = 65; 90 >= i; i++) {// A-65, Z-90
  letter = String.fromCharCode(i);
  letterButtons += '<button onclick="setLetter(\'' + letter + '\');">' + letter + '</button>';
}
document.getElementById('box').innerHTML = letterButtons;

let setLetter = function(x) {
  document.getElementById('name').innerHTML += x;
};