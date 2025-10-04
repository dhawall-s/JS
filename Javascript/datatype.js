//Datatypes
//Primitive Datatype
//number,string,boolean,undefined,null,bigint,symbol

let a=10
let b=20
console.log(a,b)
console.log('type of a is',typeof(a))
console.log("type of b is",typeof(b))

let c='strike is coming'
let d='dhawal'
console.log(c,d,typeof(c))

let login=true
let f=false
console.log(typeof(login),f)

//undefined -> koi bhi value present nhi hoti variable ko declare karte samay
//but we can not do with it const
let user;
const p=10;
console.log(user,p)

//bigint
let num=2321442482409240942084n
console.log(num)

//null ->variable ke andar kuch nhi dalna chahata hu

let weather=null

//Nom Primitive Datatype
//array,object,function

let arr=[10,20,11,"Rohit",true];
console.log(arr)
console.log(typeof(arr))

//object -> store as a key value pair
let obj={
    name:"Dhawal",
    acc:"123124",
    age:21,
    category:'gen'
}
console.log(obj)
console.log(typeof(obj))

//function
function add(){
    console.log("hello")
}
add()

//Js mein apan function ko variable ke andar store karwa sakte hain
let s=function addd(){
    console.log('hello')
}
s()
console.log(s)


let us;
console.log(typeof(us))
us=2
console.log(typeof(us))

//null ka type object hi hota hain
let weather2=null
console.log(typeof(weather2))

//primitive datatype ka type object hi nikalta hain

//primitive datatype is immutable -> because they create a new memory for that update a means that a is different and the updated a is different
let a1=20
a=10
console.log(a)

let str1='Dhawal'
str1[0]='N'
console.log(str1)
str1='saini'
console.log(str1)

//non primitive datatypes are muttable
let arr1=[10,20,30,40,50]
arr1.push(90)
arr1[0]=20
console.log(arr1)

let ob={
    name:'dsa',
    pasand:'pyaar'
}
ob.pasand='bahut pyaar'
console.log(ob.name)
console.log(ob.pasand)

//object reference store karte hain separate copy nhi banti ek hi copy mein change hota hain

