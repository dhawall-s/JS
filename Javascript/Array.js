let marks = [100, 50, 70, 80, 90];
console.log(marks);
console.log(marks.length);
let arr = ["rohit", "dhawal", 1, 2, 3, 4, 5];
console.log(arr[0]);
console.log(arr);
console.log(typeof arr);
arr[2] = 90;
console.log(arr);
arr.push(80);
console.log(arr);
arr.pop();
console.log(arr);

arr.unshift(10);
console.log(arr);

arr.unshift(50);
console.log(arr);

arr.shift();
console.log(arr);

// arr.pop(-1);
// console.log(arr);

let arr2 = [10, 30, 50, 90, 11];
// for (let i = 0; i < arr2.length; i++) {
//   console.log(arr2[i]);
// }

// for (let num of arr2) {
//   console.log(num);
// }

let arr3 = [10, 20, 30, 40, 50];
arr2 = arr3;
arr2[1] = 999;
console.log(arr2);
console.log(arr3);

//objects : copy by referenct hote hain
//primitive datatypes : copy by value hote hain nayi copy banti hain memory mein

//const ka address change nhi ho sakta
// const a=[10,20,30]
// a=[20]
// console.log(a)

let a3 = [10, 30, 50, 90, 11];
console.log(a3.slice(1, 3)); //last wala not included no change in original array
console.log(a3);
console.log(a3.splice(1, 3, "Dhawal", 19)); // 1st element se 3 elements ko trim out karwa do original array mein change hoga
console.log(a3);

const name = ["dhawal", "saini"];
const skills = ["PSS"];
//name.push(skills);
//console.log(name);
//console.log(skills)
const arr4 = name.concat(skills);
console.log(arr4);

const arr5 = [...name, ...arr2, ...skills];
console.log(arr5);

const naam = ["Dhakad Devank", "Rockstar Dhawal", "Agent Ashu", "Raid Machine", "Naveen"];
console.log(naam.join(","));
