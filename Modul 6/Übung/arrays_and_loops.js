let fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.pop(fruits[0]);
console.log(fruits);

function myList() {

};


// Aufgabe 1 include

let nameList = ['Anna', 'Ben', 'Clara'];
let name1 = "Ben";
let name2 = "Daniel";

function containsElement(array, element) {
    if (array.includes(element)) {
        console.log("true");
    } else {
        console.log("false");
    }
}

containsElement(nameList, name1); 
containsElement(nameList, name2); 

// Aufgabe 2 indexOf

let numberList = [10, 20, 30, 40];
let number1 = 30
let number2 = 50

function findElementIndex(array, element) {
    console.log(array.indexOf(element))
    if (array.indexOf(element) === -1) {
        console.log("Element not found");
    }
    else {
        console.log("Element found");
    }  
}

findElementIndex(numberList, number1);

findElementIndex(numberList, number2);

// Aufgabe 3 shift

function removeFirstElement(array, element) {
    array.shift()
}

console.log(removeFirstElement([10, 20, 30, 40])); // [20, 30, 40]

// Aufgabe 4 unshift

function addElementToStart(array, element) {
    array.unshift(element)
    return array
}

console.log(addElementToStart([2, 3, 4], 1)); // [1, 2, 3, 4]

console.log(addElementToStart(['b', 'c', 'd'], 'a')); // ['a', 'b', 'c', 'd']

// Aufgabe 5 slice

function getSubArray(array, start, end) {
    return array.slice(start, end);
}

console.log(getSubArray([1, 2, 3, 4, 5], 1, 4)); // [2, 3, 4]

console.log(getSubArray(['a', 'b', 'c', 'd', 'e'], 0, 3)); // ['a', 'b', 'c']

// Aufgabe 6 join

function joinArray(array, separator) {
    return array.join(separator);
}


console.log(joinArray(['apple', 'banana', 'cherry'], ', ')); // "apple, banana, cherry"

console.log(joinArray([1, 2, 3, 4], ' - ')); // "1 - 2 - 3 - 4"


// Aufgabe 1 Summe der Elemente eines Arrays


function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumArray([3, 7, 1, 4])); // Erwartete Ausgabe: 15 (3 + 7 + 1 + 4)

console.log(sumArray([1, 2, 3, 4, 5])); // Erwartete Ausgabe: 15 (1 + 2 + 3 + 4 + 5)


// Aufgabe 2  Ausgabe einer Zahlenreihe




function printNumbers(array) {
    let summary = [];
    for (let index = 1; index < array+1; index++) {
        summary.push(index);
    }
    console.log(summary);
}

printNumbers(5); // Erwartete Ausgabe: 1, 2, 3, 4, 5

printNumbers(3); // Erwartete Ausgabe: 1, 2, 3


// Aufgabenstellung 3: Rückwärts laufende for-Schleife


function printNumbersReverse(array) {
    let summaryReverse = [];
    for (let i = array ; i > 0 ; i--) {
        summaryReverse.push(i);
    }
    console.log(summaryReverse);
}


printNumbersReverse(5);

// Erwartete Ausgabe: 5, 4, 3, 2, 1


printNumbersReverse(3);

// Erwartete Ausgabe: 3, 2, 1



//  Aufgabenstellung 4: Nur jedes dritte Element ausgeben


function printEveryThirdElement(array) {
    let summary = [];
    for (let index = 0; index < array.length; index += 3) {
            summary.push(array[index]);
    }
    console.log(summary);
}


printEveryThirdElement([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// Erwartete Ausgabe: 1, 4, 7


printEveryThirdElement(['a', 'b', 'c', 'd', 'e', 'f']);

// Erwartete Ausgabe: 'a', 'd'

// Bonusaufgabe: Prüfung auf Primzahlen


function isPrime(number) {
    if (number % 2 === 0) {
        return false;
    }
    else {
        return true;
    }
}


console.log(isPrime(7)); // Erwartete Ausgabe: true (7 ist eine Primzahl)

console.log(isPrime(4)); // Erwartete Ausgabe: false (4 ist keine Primzahl)

console.log(isPrime(21)); 













function initArrays() {
    let reflist = document.getElementsByClassName("red_box");

    for (let index = 0; index < reflist.length; index++) {
        const singleRef = reflist[index];
        singleRef.innerText = index;
        singleRef.style.display = "flex";
        singleRef.style.flexDirection = "column";
        singleRef.style.alignItems = "center";
        // singleRef.style.height = "100px";
        // singleRef.style.width = "100%";
        
    }
    console.log(reflist);
}