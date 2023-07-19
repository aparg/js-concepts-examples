//Array Desctructuring
let arr1 = [1, 2, 3, 4];
let [a, b, c, d] = arr1;

console.log(a, b, c, d);

//object destructuring
let obj = {
  name: "Apar",
  age: 21,
  nationality: "Nepalese",
};

({ name: personName, age: personAge, nationality: personNationality } = obj);
console.log(personName, personAge, personNationality);

//array + object destructuring
const people = [
  { firstName: "Ram", age: 20 },
  { firstName: "Hari", age: 22 },
];
let [{ firstName }, { age }] = people;
console.log(firstName, age);
