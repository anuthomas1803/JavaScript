//CLOSURES & THIS KEYWORD
// A closure in JavaScript is created when an inner function remembers & can access the variables from 
//its outer funtions scope even after the outer function has finished its execution

function outer()
{
    let message='hello'
    function inner()
    {
       console.log(message)
    }
    return inner;
}
const result=outer() // accessibility of outer end here 
result() // but message/variable is stored in result hence again its variable is remembered here


//Another example

function bankAccount()
{
   let balance=1000;
return { // curley brace should be in the same line as that of return. Else, JavaScript interprets it like 'return'
    deposit(amount)
    {
        balance+= amount
        return balance
    },
    getBalance()
    {
        return balance
    }
 } 
}
const account =bankAccount()
console.log(account.getBalance())
console.log(account.deposit(500))
//console.log(account.balance) 
// Here balance cannot be accesses directly throught account.balance. It can be accessed only through methods because they form closures over the outer functions' scope
