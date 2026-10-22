//Polymorphism - Same method using differently 
// method overriding or run-time overriding
class Animal //example of inheritance
{
    speak()
    {
        console.log("Animal makes sound")
    }
}
class Dog extends Animal
{
    speak()
    {
        console.log("Dog barks")
    }
}
class Cat extends Animal
{
    speak()
    {
        console.log("Cat meows")
    }
}
const animals=[new Dog(), new Cat() , new Animal()] //Object creation : array of Objects
animals.forEach(animal=>animal.speak()) // animal is each element 
//for loop needs to know size of array but foreach doenot require to know size

//------------------------------------------------------
//Another example of Polymorphism
class Car //class 1
{
 move()
 {
    console.log("Car is being driven")
 }
}
class Bird //class 2
{
    move()
{
    console.log("Bird is flying")
}
}

function startMoving(vehicle) //In javascript datatype is not to be given
{
    vehicle.move();
}
startMoving(new Car())
startMoving(new Bird())
