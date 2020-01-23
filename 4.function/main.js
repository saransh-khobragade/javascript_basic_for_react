function abc(a,b){
    return a+b
}

//arrow functions
const abc2 = (a,b) => a+b

const abc3 = (a,b) => {
    return a+b
}

const function_returning_object = (a,b) =>{
    return {a,b}
}

console.log("old_style_function",abc(5,6) )
console.log("arrow",abc2(5,6) )
console.log("arrow",abc3(5,6) )
console.log("function_returning_object",function_returning_object(2,4))

//function to variable
