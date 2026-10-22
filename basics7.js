//class 
module.exports =class Person //class name should be capital 
{
age = 25;
get location()
{
    return 'Canada';
}
constructor(firstname,lastname)
{
    this.firstname=firstname //default constructor
    this.lastname=lastname
}
fullname()
{
    console.log(this.firstname +" " +this.lastname)
}
}
/*
let person =new Person(); //object name shoud be lower case
console.log(person.age)
console.log(person.location) //since get function is used '()' is not required while calling

let person1=new Person("Tim","Joseph") // parameterized
person1.fullname();
let person2=new Person("Chris" , "Johns")
person2.fullname();

*/