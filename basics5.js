
let day= "Tuesday'smagic";
console.log(day.length);

let subday=day.slice(0,4);
console.log(subday); // 0 to 3 element
console.log(day[1]); 

let splitday=day.split("s") //word splits on the basis of 's' and will be stored as an array
console.log(splitday[0]);
console.log(splitday[1]);
console.log(splitday[2]);
console.log(splitday);

//date functions : string to integer conversion is required
let date = '23';
let nextdate='27';
let difference=parseInt(nextdate)-parseInt(date);
console.log(difference);

day ="Tuesday";
let newquote=day+" is funday";
console.log(newquote);
let val=newquote.indexOf("day");
console.log(val);
let count=0;
let value=newquote.indexOf("day",5); //search "day" from index 5
console.log(value);
while(val!==-1) //4!=-1
{
    count++
    val=newquote.indexOf("day",val+1); //returns -1 when "day" not found
}
console.log(val)
console.log(count)

