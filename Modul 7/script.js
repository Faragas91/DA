// // let myObject = {
// //     'name': 'Flo',
// //     'age': 45,
// //     'jobs': 'Dev-Mentor',
// //     'good_guy' : true,
// // };


// // const objKeys = Object.keys(myObject);
// // let ourArray = [];

// // for (let i = 0; i < objKeys.length; i++) {
// //     const element = objKeys[i];
// //     ourArray.push(myObject[objKeys[i]])
// // }

// // console.table(ourArray);
// // // myObject.logJob(651)
// // // console.table(myObject.age, myObject.job.name, myObject.name);

// let myObject = [
//     {
//         "name": "Flo",
//         "age": 45,
//         "jobs": "Dev-Mentor",
//         "good_guy": true
//     },
//     {
//         "name": "John",
//         "age": 30,
//         "jobs": "Developer",
//         "good_guy": true,
//     },
//     {
//         "name": "Jane",
//         "age": 25,
//         "jobs": "Designer",
//         "good_guy": false,
//     },
//     {
//         "name": "Bob",
//         "age": 50,
//         "jobs": "Manager",
//         "good_guy": true,
//     },
//     {
//         "name": "Alice",
//         "age": 35,
//         "jobs": "Tester",
//         "good_guy": false,
//     }
// ];


// console.log(
//     myObject.filter(person => person.name.startsWith('J'))
// )

let myObject = [
    {
        "name": "Max",
        "is_a_good_guy": true,
    },
    {
        "name": "Peter",
        "is_a_good_guy": false,
    },
    {
        "name": "Arnold",
        "is_a_good_guy": true,
    },
    {
        "name": "Justus",
        "is_a_good_guy": true,
    },
    {
        "name": "Bombur",
        "is_a_good_guy": false,
    },
];


console.log(
    myObject.findIndex(person => person.name === 'Justus')
)