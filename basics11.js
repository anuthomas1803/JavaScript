//Encapsulation keeps the data protected and gives controlled ways to access data. 
class BankAccount
{
    #balance =0; // # is used to make variable or functions private so it is encapsulated
    deposit(amount)
    {
        if(amount>0) // here, this is not used since amount is wothin the method
        {
            this.#balance += amount ;
        }
    }
    getBalance()
    {
        return this.#balance
    }
}

const account=new BankAccount()
account.deposit(5000)
console.log(account. getBalance())

//#balance variable can be accessed only using methods. so encansulated
// Encapsulation means protects or bundles data and controls access
//Abstration : Hides comlex implementation details
// Inheritance : Allows one class to interit from another class
//Polymophism : Same method or interface can have different behaviour