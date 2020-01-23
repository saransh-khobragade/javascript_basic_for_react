//Object

var a = {
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

var c = [1,2,3,4,5,6,7,8,9,10]
var d = [{a:1},{a:2},{a:3},{a:4},{a:5}]


console.log("array")
console.log(c)
console.log(c[3])
console.log(d[0]['a'])

