const async_function_with_promise = () => {
    
    return new Promise((reject,resolve)=>{
        
        setTimeout(()=>{
            resolve("hello")
        },2000)
        //some api taking 2000 response time

    }).catch((err)=>{
        return err
    })
    
}

console.log(async_function_with_promise())

console.log("async_function_with_promise then-------")
async_function_with_promise().then((x)=>{
    console.log(x)
})

console.log("every thing ends")
