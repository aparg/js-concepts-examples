let newString = "stringValue";
let a = 10; //number
let carObj = {
  color: "black",
  brand: "nissan",
};

//array
let arr = [10, 2, 4, 3, 1];

//return even numbers using filter methid
let evenArray = arr.filter((a) => a % 2 == 0);
console.log(evenArray);

//using reduce in array
let sum = arr.reduce((a, b) => {
  let temp = a + b;
  return temp;
});
console.log(sum);

//sort method
arr.sort((a, z) => a - z);
console.log(arr);

//includes method
console.log("Include 5:" + arr.includes(5)); //returns false
console.log(`Incudes 4: ${arr.includes(4)}`); //returns true

//find method
console.log(arr.find((value) => value % 4 > 0)); //returns 10

arr.forEach((element) => element + 90);

//array splice
let automobiles = ["car", "bus", "truck", "cat"];
let animal = automobiles.splice(3, 1);
console.log(
  `removed value is ${animal} and the final array's elements are ${automobiles}`
);

//concat in array
let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8];
let newArray = array1.concat(array2);
console.log(newArray);

//push/pop in array
array1.push(100);
console.log(array1);
array1.pop(100);
console.log(array1);

//shift unshift in array
array1.shift();//remove first element of array
console.log(array1);
array1.unshift(100,99);//add 100,99 to the end of array
console.log(array1);

//boolean
booleanVariable = true;
