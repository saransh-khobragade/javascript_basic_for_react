//Object
const a = {
    "name": "saransh",
    "age": 23,
    "company":{
        "name":"infosys"
    }
}

//Object adding key
a.suranme = "khobragade"
//a.min-salary=1222
a["min-salary"]=12222

console.log("1",a)
console.log("2",a.name)
console.log("3",a.company.name)

//Object methods
var c = Object.keys(a)
var d = Object.values(a)

console.log("4",c)
console.log("5",d)

//loops in object
for (let x in a){
    console.log("loop",a[x])
}

//check key in object
if("name" in a){
    console.log(a["name"],"found")
}

//Array
var c = [1,2,3,4,5,6,7,8,9,10]
var d = [{a:1},{a:2},{a:3},{a:4},{a:5}]


console.log("4",c)
console.log("5",c[3])
console.log("6",d[0]['a'])

//loops in array
c.forEach((x)=>{
    console.log(x)
})//doesnt breaks

//can use break statement
for(let x in c){
    console.log("index",x)//index
}
for(let x of c){
    console.log("value",x)//values
}

//check ele in array
if(3 in c && c.includes(3)){
    console.log(3,"found")
}

//array methods
c.push(11)  //add to last
c.pop()     //removes last ele
c.shift()   //removes first ele
c.unshift(4)  //add first ele
c.slice(0,2)    //array from position 0 to 2 ,return new array
c.splice(1,2,12)    //from 1st position 2 ele will be removed and 12 will be inserted at same place ,this change in orignal array

console.log(c)

console.log(c.length)   //length



