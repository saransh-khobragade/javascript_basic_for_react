//old style function
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

console.log("1",abc(5,6) )
console.log("2",abc2(5,6) )
console.log("3",abc3(5,6) )
console.log("4",function_returning_object(2,4))

//function to variable
const a = function_returning_object
console.log("5",a)
console.log("6",a(4,5))

//object with function
function xyz(m,n){
    this.a=m
    this.b=n
    console.log("7",this)
    console.log(arguments)
}
const b = new xyz(2,3)
console.log("8",b.a)
console.log("9",this)

//No personal this for arrow function
const c = ()=>{
    console.log("10",this)
}
c()