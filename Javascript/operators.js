// console.log(2 + 3);
// console.log(2 - 5);
// console.log(2 / 1);
// console.log(2 * 5);
// console.log(5 % 2);

// console.log(5 ** 2);
// console.log(5 ** 3);
// console.log(5 ** 4);

// //Assignment Operator

// let x1 = 10;
// let y1 = 20;
// // x=x+y
// // x=x*y
// // x=y/x
// x1 += y1;
// console.log(x1);

// //comparison operator

let x2 = 10;
let y2 = 20;
console.log(x2 > y2);
console.log(x2 < y2);
console.log(x2 <= 10);
console.log(y2 >= 20);

//type conversion
let z = "10";
let a = Number(z);
console.log(typeof a);
console.log(a);

// difference b/w '=='  and '==='
let x3 = 20;
let y3 = "20";
console.log(x3 == y3); //string ko number mein convert kar deta hain jabki ek variable string hoti hain phir bhi
console.log(x3 === y3); // yeh pehle hi datatype check karta hain aur phir uske baad comparison karta hain

console.log("-----------------------------");
// let a2='121'
// b=Number(a2)
// console.log(b)
// console.log(typeof(b))

//NaN : Not a Number
let a2 = "121a";
b = Number(a2);
console.log(b);

//Number to string
let x = 10;
b = String(a);
console.log(b);
console.log(typeof b);

let sach = true;
console.log(Number(sach));
console.log(Number(null));
console.log(Number(undefined));
console.log(typeof null);

//1:Null is loosely equal to undefined only
console.log(null == undefined);
console.log(null === undefined);
console.log(null == 0);
console.log(null == "");
console.log(null == false)
console.log(null==true)

//>,<,>=,<= (null -> number)
console.log(null>=0)
console.log(1>null)

console.log(10>'10a')
//koi bhi type ko compare karna hain toh dono number mein convert hoge