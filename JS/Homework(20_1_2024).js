let abc = {
    title: "Key Holder",
    description:
        "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    brand: "Oppo",
    gender: "male",
    price: 100,
    discountPercentage: 8,
    category: ["smartphones", "3g", "4g"],
    color: ["red", "black", "white"],
    size: ["44", "45", "42", "43"],
    isAvailable: true,
    availableStock: 54,
    rating: 485,
    totalRaters: 123,
    totalSoldUnit: 0,
};





//ANSWER:

//*********************************************************************************************** */

//Print Nested Object 

const obj = {
    name: "Riddhesh Dobariya",
    discription: {
        age: 28,
        occupation: "Textile Business"
    }
};

console.log(obj.discription.occupation);


//*********************************************************************************************** */

//Print Array
//for Print 4 in nested array situation

const nstary = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9]
];
console.log(nstary[1][0]);


//*********************************************************************************************** */

//Condition Run if 0 exist using Or operator

let x = 0;

if (Object.keys(x).length == 0) {
    console.log("-=-=-=X-=-=-=->Empty");
} else {
    console.log("-=-=-=!X-=-=-=->Not Empty");
}


//*********************************************************************************************** */

//To Check if object is empty or not

let x = {};

if (Object.keys(x).length === 0) {
    console.log("-=-=-=X-=-=-=->Empty");
} else {
    console.log("-=-=-=!X-=-=-=->Not Empty");
}


//*********************************************************************************************** */

//Print Description
console.log(abc.description);


//*********************************************************************************************** */

//Print White Color
console.log("For Print White Color: ", abc.color[2]);


//*********************************************************************************************** */

//Print Size 45
console.log("For Print 45 size : ", abc.size[1]);


//*********************************************************************************************** */

//Print Price after Discount
function finalPrice(abc) {
    return abc.price - (abc.price * abc.discountPercentage) / 100;
}
console.log("Final Price after DiscountPercentage is : ", finalPrice(abc));


//*********************************************************************************************** */
