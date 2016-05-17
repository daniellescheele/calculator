// Create an HTML file that has two input fields to accept the two numbers 
// to perform operations on.
// Create 4 buttons to perform each of the basic mathematical 
// functions (add, subtract, multiply, divide).
// In your JavaScript, put an event listener on each of the buttons.
// Copy the code below an implement a basic calculator.
// When the user performs one of the operations, output the result to 
// another DOM element of your choice.


var num1 = document.getElementById("firstNum");
var num2 = document.getElementById("secondNum");
var answer = document.getElementById("output");
var addBut = document.getElementById("addButton");
var subBut = document.getElementById("subtractButton");
var multBut = document.getElementById("multiplyButton");
var divBut = document.getElementById("divideButton");


function getSum(a, b) {
  return a + b;
}

function getDiff(a, b) {
  return a - b;
}
  
function getProd(a, b) {
  return a * b;
}  

function getQuo(a, b) {
  return a / b;
}
function calculate(operation, a, b){
  answer.innerHTML = operation(a, b);
}

addBut.addEventListener("click", function() {
  calculate(getSum, Number(num1.value), Number(num2.value));
});


subBut.addEventListener("click", function() {
   calculate(getDiff, Number(num1.value), Number(num2.value));
});


multBut.addEventListener("click", function(){
  calculate(getProd, Number(num1.value), Number(num2.value));
});


divBut.addEventListener("click", function(){
  calculate(getQuo, Number(num1.value), Number(num2.value));
});











// CALCULATOR BELOW IS THE LONG WAY TO WORKING

// var addBut = document.getElementById("addButton");
// addBut.addEventListener("click", function() {
//   answer.innerHTML = getSum(Number(num1.value), Number(num2.value));
// });

// var subBut = document.getElementById("subtractButton");
// subBut.addEventListener("click", function() {
//   answer.innerHTML = getDiff(Number(num1.value), Number(num2.value));
// });

// var multBut = document.getElementById("multiplyButton");
// multBut.addEventListener("click", function(){
//   answer.innerHTML = getProd(Number(num1.value), Number(num2.value));
// });

// var divBut = document.getElementById("divideButton");
// divBut.addEventListener("click", function(){
//   answer.innerHTML = getQuo(Number(num1.value), Number(num2.value));
// });



  





  // Create a function that multiplies two numbers
  // passed in as arguments. Return the product.
 


/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */


/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */


/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */



/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */