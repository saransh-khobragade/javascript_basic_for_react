//Callback
console.log("callback_function---------")

const callback_function = () =>{
    console.log("3")
}

const a = (a,b,c)=>{
    console.log(a)
    console.log(b)
    c()
}
a(1,2,callback_function)


console.log("async_function---------")

//Async function
const async_function = () => {
    
    setTimeout(()=>{
        console.log("async 2")
    },2000)
    //some api taking 2000 response time
}

console.log("1") //1
async_function() //2
callback_function() //3




//Async function with callback
console.log("async_function_with_callback-------- start")

const async_function_with_callback = (callback) => {
    setTimeout(callback,5000)
}
console.log("1")
console.log("2")
async_function_with_callback(callback_function)
