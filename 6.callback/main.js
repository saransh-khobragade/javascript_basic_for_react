//Callback
console.log("callback_function---------")

const callback_function = () =>{
    console.log("callback_function start")
}

const a = (a,b,c)=>{
    console.log(a)
    console.log(b)
    c()
}
a(5,10,callback_function)




//Async function

const async_function = () => {
    setTimeout(()=>{
        console.log("after 2 sec called")
    },2000)
    //some api taking 2000 response time
}

console.log("Async function-----start")
async_function()
console.log("Async function-----end")

callback_function()



//Async function with callback
console.log("async_function_with_callback-------- start")
const async_function_with_callback = (callback) => {
    setTimeout(callback,5000)
}
async_function_with_callback(callback_function)
