//Oops concept -Abstraction : internal details are hidden
//what to do is explosed. How it is done is hidden
class Car 
{
    start() // here two methods are called inside a method start
    {
        this.#checkEngine();
        this.#injectFuel();
        console.log("Car Started")
    }
    #checkEngine()
    {
        console.log("Checking Engine")
    }
     #injectFuel()
    {
        console.log("Injecting Fuel")
    }
}
const car=new Car();
car.start();

//Here user need not call each methods separately . 
// # is used to make the methods private
//Hides complex implementation
class Atm
{
    withdraw(amount)
    {
          this.#verifyPin()
         this.#checkBalance()
         this.#dispenseCash(amount)
          
    }
    #verifyPin()
    {
        console.log("Pin Verified")
    }
    #checkBalance()
    {
        console.log("Balancr Checked")
    }
    #dispenseCash(amount)
    {
        console.log(`dispensing ${amount} rupees`) //value gets printed ${variable} 
    }
}
const atm = new Atm();
atm.withdraw(5000)


