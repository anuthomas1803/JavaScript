//Types of Array declaration
// Array :position to store group of data 
var marks= Array(6); // length of this Array is 6. Empty Array declaration method
var marks=new Array(20,40,35,10,27,100);
var marks= [20,40,35,10,27,100]; // Here, we cannot use let due to multiple declaration issue
console.log(marks[2]); 

//externally changing 1 value of marks 
marks[3]=14;
console.log(marks);
console.log(marks.length);

//push method is to add an element to the end of the Array. Array size in not fixed in javascript
marks.push(65);
console.log(marks);

//pop :deletes an element at the end 
marks.pop();
console.log(marks);
marks.unshift(12); //add an element at the beginning
console.log(marks);
marks.shift(); //delete an element from the beginning
console.log(marks);

//splice method : 
marks.splice(2,0,22); // 0 is the delete count
console.log(marks);
marks.splice(2,3,22); //3 elements from that position get deleted
console.log(marks);
//find index of a number
console.log(marks.indexOf(100));
// check if an element exist or not :Search
console.log(marks.includes(120));

//slice methods: Array to sub array. returns a sub array/portion of array  
let submarks=marks.slice(2,6);// sub array starts from 2nd position to 6-1; excludes the last given position
console.log(submarks);

//-------------------------------------------------------------------------------------
//sum of elements in an Array
var sum=0;
for(let i=0;i<marks.length;i++)
{
    console.log(marks[i]);
    sum=sum+marks[i];
}
 console.log("sum = " +sum);


 //Reduce method : reduce method  to get the sum of elements in an Array -single value
let total=marks.reduce((sum,mark)=>sum+mark,0);
console.log(total);

 //Reduce method : reduce method  to get the avg of elements in an Array
 let average=marks.reduce((avg,mark)=> avg+mark/marks.length , 0)
 console.log(average);

 //storing data based on some condition
 let evenscores=[]; //empty array
 let scores=[12,13,14,16];
 for(let i=0;i<scores.length;i++)
 {
    if(scores[i]%2==0)
    {
         evenscores.push(scores[i]);          //storing even numbers only
    }
 }
console.log(evenscores);

//filtering data(Array) based on some condition - filter method .
let newfilterevenscores=scores.filter(score=>score%2==0); 
console.log(newfilterevenscores);

//Each element in an Array being mapped based on some value : each element common calculation
let mappedarray=newfilterevenscores.map(score=>score*3); // each element *3
console.log(mappedarray);

let totalvalue=mappedarray.reduce((sum,val)=>sum+val,0);
console.log(totalvalue);

var scores1 = [12,13,14,16];
let sumvalue=scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0);
console.log(totalvalue);

//String Arrays 
let fruits=["banana","mango","guava","apple"]; //sorting is based on ASCII code & it is different for upper and lower case
console.log(fruits.sort());
console.log(fruits.reverse());

let scores2=[12,3,19,16,14];
console.log(scores2.sort()); // sort function may not work correctly for numbers 
console.log(scores2.sort((a,b)=>a-b));// sorting for numbers
console.log(scores2.sort((a,b)=>b-a)); //descending order