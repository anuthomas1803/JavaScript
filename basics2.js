const flag=true;
if(flag)
{
    console.log("Condition Satisfied");
}
else
{
   console.log("Condition Not Satisfied"); 
}
//while loop : entry control
let i=0;
while(i<10)
{
    i++;
    console.log(i);
}
//do while loop : exit control
i=0;
do
{
    i++ ;
console.log(i); 
}
while(i<10);
// for loop : entry control loop
for(let i=0;i<=10;i++)
{
    console.log(i);
}
//for loop with condition
for(let i=1;i<=100;i++)
{
    if((i%2==0) && (i%5==0))
    {
        console.log(i);
    }
}
