let myObject = {
    'name': 'Flo',
    'age': 45,
    'jobs': 'Dev-Mentor',
    'good_guy' : true,
};


const objKeys = Object.keys(myObject);
let ourArray = [];

for (let i = 0; i < objKeys.length; i++) {
    const element = objKeys[i];
    ourArray.push(myObject[objKeys[i]])
}

console.table(ourArray);
// myObject.logJob(651)
// console.table(myObject.age, myObject.job.name, myObject.name);