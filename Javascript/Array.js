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

let arr3=[10,20,30,40,50]
arr2=arr3

arr2[1]=999
console.log(arr2)
console.log(arr3)