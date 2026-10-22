const Person = require("./basics7"); //imported from basics7

//Inheritance
class Pet extends Person //pet is the subclass of person
{
 get location()
{
    return "USA"
}

constructor(firstname, lastname) // If a child class has its own constructor, then must use super() before using this keyword.
{
    super(firstname,lastname); //Child constructor receives the values → passes them to the parent constructor → parent initializes the object.
}
 get parentlocation()
{
    return super.location //calls the parent object
}
 get childlocation()
{
    return this.location //calls the parent object
}
}

let pet=new Pet("Sam","San");
pet.fullname()
console.log(pet.location) //overriding the location
console.log(pet.parentlocation) 
console.log(pet.childlocation) 


