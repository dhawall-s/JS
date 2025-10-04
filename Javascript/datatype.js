//Datatypes
//Primitive Datatype
//number,string,boolean,undefined,null,bigint,symbol

let a=10
let b=20
console.log(a,b)
console.log(typeof(a))

let c='strike is coming'
let d='dhawal'
console.log(c,d,typeof(c))

let login=true
let f=false
console.log(login,f)

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


