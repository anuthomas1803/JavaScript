//Promises in Javascript is an object that represents the eventual success or failure of an
//  asynchronous operation

//States of promise : 3 states - Pending , Fulfilled (Success) , Rejected(failure)
// promises can be used instead of callback to reduce complexity

console.log(myPromise)

//How to consume a promise using then and catch - Running the same promise
const promise = new Promise((resolve,reject)=>
{
let success = true
if(success)
    {
   resolve(" Data received Successfully")
    }
    else
    {
        reject("unable to receive data")
    }
})
promise.then((result) =>
{
    console.log(result);
})
.catch((error) =>
{
    console.log(error);
});

//Promise Chaining 
function getUser(id){
return Promise.resolve({
    id:id,
    name:"Mini",  
}) 
}

function getOrders(UserId){
    return Promise.resolve([{
        id:101,
        product:"laptop"
    }
    ])
}

function getOrderDetails(OrderId){
    return Promise.resolve(
        {
            OrderId:OrderId,
            amount:50000
        }
    )
}

function makePayment(details){
    return Promise.resolve(                  //Promise is a class 
      {
        amount:details.amount,
        status: "Success"
      }  
    )
}

getUser(1)
.then((user)=>{
    console.log("User:",user) //passing object
    return getOrders(user.Id)
})
.then((orders)=>{
    console.log("Orders:",orders)
    return getOrderDetails(orders[0].id)
})
.then((details)=>{
    console.log("Details:",details)
    return makePayment(details) 
})
.then((result)=>{
    console.log("Payment:",result)
})
.catch((error)=>{
    console.log("Error:",error)
})
//Asynchronous hence any order is followed in execution for promise based codes. 
//Therefore, Async and await are keywords used for sequential execution