//callback hell: occurs when multiple functions are nested inside one another, making the code difficult to 
//read,debug,understand & maintain
// It is also called Pyramid of Doom because the code gradually move towards the right as more callbacks are nested
//Example of callbackHell
function getUser(userId,callback)
{
    setTimeout(()=> {
const user = {
    id:userId,
    name:"mini"
}
console.log("1.user Fetched")
callback(user)
    },1000) //setting timeout as 1000ms
}

function getOrders(userId,callback)
{
setTimeout(()=> {
    const orders = [
         {id:101,
            product:"laptop"
         },
         {
           id:102,
            product:"mobile" 
         }

    ];
    console.log("2 . Orders fetched from user :", userId)
    callback(orders) 
},1000)
}

function getOrderDetails(orderId,callback)
{
setTimeout(()=> {
    const details = {
        orderId :orderId,
        product : "laptop" ,
        amount : 50000
    }
    console.log(" 3. order detail fetched ")
    callback(details)
},1000)
}

function makePayment(details,callback)
{
   setTimeout(()=> {
    const result = { orderId: details.orderId ,
                     amount : details.amount , 
                     status: "Success"
}
callback(result)
},1000)
}
//callback hell
getUser(1,function(user){
console.log(user)
getOrders(user.id,function(orders){
    console.log(orders)
    getOrderDetails(orders[0].id,function(details){
        console.log(details)
        makePayment(details,function(result){
            console.log("payment successful",result)
        })
    })
})
})
