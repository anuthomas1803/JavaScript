//Advanced Java Concepts
//Hoisting : It is a behaviour where javascript function & variables are declared before they are executing in the code

//1. Hoisting with var keyword : varibles cannot be used before its declaration
//console.log(a)
//let a=10; // var : error doesnot happen here on run code(undefined) but for let & const 'reference error'
 //Hoisting in Javascript is a behaviour where javascript processes functions & 
 // variables before executing the code

 //Hoisting with FUNCTIONS : using the function declaration syntax can be called before its declaration

 greet() // here calling is done before the function declaration and it works
 function greet()
 {
    console.log("Hello")
 }

 //Hoisting with function expression : cannot be called for function declaration
 greet1()
 var greet1 = function()  // This method is called Function expression, and undefined output
 {
    console.log("Hello")
 }


