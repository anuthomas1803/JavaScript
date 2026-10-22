//This keyword : Object associated with the current funtion call : Its values depends on how a funtion is called
// This is used inside an object , class , function

//1. this inside an Object [object= variable+functions]
const student = {

    name: "Arun",
    age: 21,
    display: function()
              {
                console.log(this.name); //this here refers to the studnet object
                console.log(this.age)
              }

    }
student.display()

//2. this inside a constructor function
     // here this refers to the newly created object
function Employee(name,salary)
{
    this.name=name // this.name => emp1.name or emp2.name
    this.salary=salary
}
const emp1=new Employee("Anu", 40000)
const emp2=new Employee("Ravi", 50000)
console.log(emp1.name)
console.log(emp2.salary)

3. //this inside a class 
// this inside a method refers to the instance when the method is called
class Student
{
    constructor(name)
    {
        this.name=name
    }
    display()
    {
        console.log(this.name)
    }
}
const s1= new Student("Anu")
s1.display()