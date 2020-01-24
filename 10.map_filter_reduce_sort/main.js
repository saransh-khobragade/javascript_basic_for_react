const a = [1,9,2,3,7,2,10]
const b = [{a:1,b:2},{a:4,b:5},{a:6,b:9},{a:10,b:12}]

//map
console.log("1",a.map(x=>x))
console.log("2",a.map(x=>x*2))
console.log("3",b.map(x=>x.a))

//filter
console.log("4",a.filter(x=>x>5))
console.log("5",b.filter(x=>x.a>5))
console.log("6",a.filter((ele,index)=>{
    if(index>4){
        return ele
    }
}))

//reduce
console.log("7",a.reduce((accumulator,ele)=>accumulator+ele))
console.log("8",a.reduce((accumulator,ele,index)=>{
    if(index%2==0){
        return accumulator+ele
    }else{
        return accumulator
    }
}))

//sort
console.log("9",a.sort())
console.log("10",a.sort((x,y)=>x-y))  //asc
console.log("11",a.sort((x,y)=>y-x))  //desc

console.log("13",b.sort((x,y)=>x.a-y.a))
console.log("14",b.sort((x,y)=>y.a-x.a))  //sorting array of object desc






