// Object is a collection of properties(variables+function)
let person={
    firstname:'Tim',
    lastname:'Jo',
    age:24,
    fullname:function()
    {
        console.log(this.firstname +" " +this.lastname)
    }
}
person.fullname() //() is given since a function is also included here
console.log(person.lastname)
console.log(person['lastname'])
console.log(person.firstname)
person.firstname="Tim Dain"
console.log(person.firstname)

person.gender="male" //adding a new attribute //check how to add function 
console.log(person)
console.log('gender' in person) // checks if an attribute is present in an object
delete person.gender // delete an attribute
console.log('gender' in person)

//loop goes through the property names (keys) of an object.
for(let key in person) //print each element in person.
{
    console.log(person[key]) //check why .key not working
}
