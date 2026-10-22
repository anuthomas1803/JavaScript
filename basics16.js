// A callback function in javascript is a function that is passed as an argument to another function so that it can be executed later

function greet(name)
{
console.log("Hello" +" " +name)
}
function processUser(callback) // callback is just like a variable 
{
console.log("Hi User")
    let name="Mini"
callback(name)
}
processUser(greet) 
//greet function is passed as parameter of processUser. So, 'greet' is the callback function here

//2. Callback using anonymous function
function calculate(a,b,callback) //function definition
{
let result = a+b;
callback(result)
}
calculate(10,20,function(result){
    console.log("Sum is " +result)
})



