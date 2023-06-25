//Exercise 1

// alert(sum(5)(6));

// function sum(a) {
//   let currentSum = a;

//   function f(b) {
//     currentSum += b;
//     return f;
//   }

//   f.toString = function () {
//     return currentSum;
//   };

//   return f;
// }
// let c = 0;
// c = sum(5)(6);
// console.log(c);
// // alert(sum(1)(2)); // 3
// // alert(sum(5)(-1)(2)); // 6
// // alert(sum(6)(-1)(-2)(-3)); // 0
// // alert(sum(0)(1)(2)(3)(4)(5)); // 15

//Exercise 2

// Output every second
// importance: 5
// Write a function  printNumbers(from, to)  that outputs a number every second, starting
// from  from  and ending with  to .
// Make two variants of the solution.
// 1. Using  setInterval .
// 2. Using recursive  setTimeout

// 1 usul
//recursive settimeout
// function printNumbers(from, to) {
//   let current = from;
//   setTimeout(function go() {
//     console.log(current);
//     if (current < to) {
//       setTimeout(go, 1000);
//     }
//     current++;
//   }, 1000);
// }
// printNumbers(5, 10);

//2 usul
// function printNumbers(from, to) {
//   let current = from;
//   let id = setInterval(function go() {
//     console.log(current);
//     if (current === to) {
//       clearInterval(id);
//     }
//     current++;
//   }, 1000);
// }
// printNumbers(5, 10);

//Exercise 3
// Rewrite setTimeout with setInterval
// importance: 4
// Here’s the function that uses nested  setTimeout  to split a job into pieces.
// Rewrite it to  setInterval :
// let i = 0;

// let start = Date.now();

// function count() {
//   if (i == 1000000000) {
//     console.log("Done in " + (Date.now() - start) + "ms");
//   } else {
//     setTimeout(count);
//   }

//   // a piece of heavy job
//   for (let j = 0; j < 1000000; j++) {
//     i++;
//   }
// }

// count();
// let timer = setInterval(count);
// function count() {
//   for (let j = 0; j < 1000000; j++) {
//     i++;
//   }
//   if ((i = 100000000)) {
//     console.log("Done in " + (Date.now() - start) + "ms");
//     clearInterval(timer);
//   }
// }
// // let timer = setInterval(count);
// count();

//Exercise 4
// What will setTimeout show?
// importance: 5
// In the code below there’s a  setTimeout  call scheduled, then a heavy calculation is run, that
// takes more than 100ms to finish.
// When will the scheduled function run?
// 1. After the loop.
// 2. Before the loop.
// 3. In the beginning of the loop.
// What is  alert  going to show?
let i = 0;
for (let j = 0; j < 100000000; j++) {
  i++;
}
setTimeout(() => console.log(i), 100); // ?

// assume that the time to execute this function is >100ms

console.log(i);
//1 Koopdan keyin 10000000 ko'rsatadi u loopdan oldin bo'lsa ham keyin bo'lsa ham
