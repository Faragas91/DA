const typeList = ["Ghost", "Fight", "Ground", "Stone", "Water", "Fire", "Grass", "Steel", "Dragon", "Fee", "Dark", "Bug", "Ice", "Psych", "Poison", "Normal", "Electro","Fly"];
let newTypeList = [];
sortedTypeList = typeList.sort();
let length = sortedTypeList.length;
// console.log(length);
// console.log(sortedTypeList);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min - 1)) + min;

} 

// console.log(sortedTypeList[17]);
let randomTypeNumber = getRndInteger(0, length)

console.log(typeList[randomTypeNumber]);

while (sortedTypeList.length > 1) {
    newTypeList = sortedTypeList.splice(randomTypeNumber, 1)
    sortedTypeList = newTypeList;
}

console.log(sortedTypeList);



