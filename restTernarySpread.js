//rest operator
function newFunction(...args) {
  console.log(args); //logs an array of arguments
}
newFunction(1, 2, 3);

//ternary operator
a = 3;
a == 2 ? console.log("This is two") : console.log("Not two");

//spread operator
let arr1 = [1, 2, 3, 4];
let newArr = [...arr1, 5, 6, 7];
console.log(newArr); //logs[1,2,3,4,5,6,7]

let obj = {
  name: "Apar",
  age: 21,
  nationality: "Nepalese",
};

let newObj = { ...obj, gender: "Male" };
console.log(newObj);
