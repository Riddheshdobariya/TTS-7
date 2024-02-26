let a = [
    { name: "urvish", age: 23 },
    { name: "jatin", age: 22 },
    { name: "latesh", age: 34 },
    { Name: "riddhesh", age: 29 },
    { name: "hemant", age: 25 },
];

let allNames = a.map((a) => a.name);
console.log("----- Names ----->", allNames);

let allAges = a.map((a) => a.age);
console.log("----- Ages ----->", allAges);

let nameAndages = a.map((a) => [a.name, a.age]);
console.log("----- Name and Age as an Array ----->", nameAndages);

