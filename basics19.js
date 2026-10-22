// async/await

function getData(){
    return new Promise((resolve,reject)=>{
        resolve("Data received Successfully")
    })
}

async function displayData(){
    const result= await getData() //here, promise object is stored in result 
    console.log(result)
}
displayData();
//if async and await is not used then line may execute simultaneously & then promise pending status might get printed

//Same program using Timeout

function getUsers(){
return new Promise((resolve)=>{
    setTimeout(()=>{
        id:1
        name:"Mini"
    },2000)
    })
}
async function displayUser()
{
    console.log("Fetching User")
    const user = await getUser()
    console.log("User received",user)
}
displayUser()
console.log("Other code continues")


//Multiple Asynchronous Operation
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
async function processOrder(){
    try {
        const user= await getUsers(1)
        console.log("User",user)
        const orders=await getOrders(user.id)
         console.log("Orders:",orders)
        
        const details=await getOrders(orders[0].id)
         console.log("Orders details",details)
         const payment=await makePayment(details)
         console.log("Payment",payment)
    } catch (error) {
       console.log("Error",error) 
    }
}
processOrder()