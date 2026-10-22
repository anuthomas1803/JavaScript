 //Scope Chain : Is the machanism to find the variable when it is accessed inside a function or block 
 // Reference error is when variables are not found anywhere in the scope
//searching of variable > first inner scope variable > then outer scope and finnally global score 
 let a=10 // global scope
 let x=10
 function outer()
 {
    let b=20;
    let x=20
    function inner() // c has inner scope ; b has outer scope
    {
        let c=30;
        let x=30;
        console.log(a) // Global scope
        console.log(b) // Outer scope
        console.log("value of x is " +x) // x is in both outer and global scope >> outerscope gets printed
        console.log(c) // Inner scope
        // console.log(d) // results in reference error
    }
    inner()
 }
 outer()