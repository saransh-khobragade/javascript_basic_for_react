const const_immutable = () => {

    const a = 10
    const b = 25
    //a=23
    
    if(a<b){
        //console.log("inner_scope",a)
        const a = 20
        console.log("inner_scope",a)
    }
    console.log("outer_scope",a)
}
console.log("const_example------")
const_immutable()

const let_immutable = () => {

    let a = 10
    let b = 23
    a = 5   //
    
    if(a<b){
        //console.log("inner_scope",a)
        let a = 20
        console.log("inner_scope",a)
    }
    console.log("outer_scope",a)
}
console.log("let_example---------")
let_immutable()


const let_const_mutable = () =>{
    const a = {}
    a['name']="saransh"
    a['age']=23

    let b=[]
    b.push(1)
    
    console.log(a)
    console.log(b)
}
console.log("let_const_mutable-------")
let_const_mutable()
