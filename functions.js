//arrow functions
add = (a, b) => a + b; //example of an arrow  function that automatically returns without return statement
console.log(add(1, 2));

//traditional  function
function add(a, b) {
  return a + b;
}
console.log(add(1, 2));

//this in arrow functions and traditional functions
obj = {
  name: "Apar",
  traditionalFunciton: function () {
    setTimeout(function () {
      console.log(this.name); //prints undefined as this references to the timeout object
    }, 1000);
  },
  arrowFunction: function () {
    setTimeout(() => {
      console.log(this.name); //prints object's name as this value is inherited from it's lexical parent
    }, 1000);
  },
};

obj.traditionalFunciton(); //prints object obj
obj.arrowFunction(); //prints the window object