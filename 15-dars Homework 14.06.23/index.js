//Exercise 1
// Sum all numbers till the given one
// importance: 5
// Write a function  sumTo(n)  that calculates the sum of numbers  1 + 2 + ... + n .
// For instance:
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Make 3 solution variants:
// 1. Using a for loop.
// 2. Using a recursion, cause  sumTo(n) = n + sumTo(n-1)  for  n > 1 .
// 3. Using the arithmetic progression   formula.
// An example of the result
// function sumTo(n) { /*... your code ... */ }

// alert( sumTo(100) ); // 5050
// P.S. Which solution variant is the fastest? The slowest? Why?
// P.P.S. Can we use recursion to count  sumTo(100000) ?

// //First way For Loop
// let sum = 10000,
//   result = 0;
// result2 = 0;
// for (let i = 0; i <= sum; ++i) {
//   result += i;
// }
// console.log(result);

// //Second Way Recursion function
// let resultRecFunc = (sum) => {
//   if (sum === 1) {
//     return (result2 += sum);
//   } else {
//     result2 += sum;
//     return resultRecFunc(sum - 1);
//   }
// };
// console.log(resultRecFunc(sum));

// //Third Way arithmetic progression formula

// let arithProgFor = (n) => {
//   return ((1 + n) * n) / 2;
// };
// console.log(arithProgFor(sum));

//Exercise 2
// Calculate factorial
// importance: 4
// The factorial   of a natural number is a number multiplied by  "number minus one" , then
// by  "number minus two" , and so on till  1 . The factorial of  n  is denoted as  n!
// We can write a definition of factorial like this:
// n! = n * (n - 1) * (n - 2) * ...*1
// Values of factorials for different  n :
// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// The task is to write a function  factorial(n)  that calculates  n!  using recursive calls.
// P.S. Hint:  n!  can be written as  n * (n-1)!  For instance:  3! = 3*2! = 3*2*1! = 6
// alert( factorial(5) ); // 120
// let n = 6,
//   firstVal = 1;
// let factorial = (n) => {
//   if (n === 1) {
//     return firstVal;
//   } else {
//     firstVal *= n;
//     return (firstVal = factorial(n - 1));
//   }
// };
// console.log(factorial(n));

//Exercise 3
// Fibonacci numbers
// importance: 5
// The sequence of Fibonacci numbers   has the formula  Fn = Fn-1 + Fn-2 . In other words,
// the next number is a sum of the two preceding ones.
// First two numbers are  1 , then  2(1+1) , then  3(1+2) ,  5(2+3)  and so on:  1, 1, 2, 3,
// 5, 8, 13, 21... .
// Fibonacci numbers are related to the Golden ratio   and many natural phenomena around us.
// Write a function  fib(n)  that returns the  n-th  Fibonacci number.
// An example of work:
// function fib(n) { /* your code */ }

// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757
// P.S. The function should be fast. The call to  fib(77)  should take no more than a fraction of a
// second.

// let n = 77,
//   listFibNumb = [],
//   count = 1,
//   getFibNumbers = (n) => {
//     for (let i = 1; i <= n; i++) {
//       listFibNumb[0] = 1;
//       listFibNumb[i] = count;
//       count = listFibNumb[i - 1] + count;
//     }

//     return listFibNumb[n - 1];
//   };

// console.log(getFibNumbers(n));

//Exercise 4
// Output a single-linked list
// importance: 5
// Let’s say we have a single-linked list (as described in the chapter Recursion and stack):
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
// Write a function  printList(list)  that outputs list items one-by-one Make two variants of the solution: using a loop and using recursion.
// What’s better: with recursion or without it?

// function printList(list) {
//   while (list) {
//     console.log(list.value);
//     list = list.next;
//   }
// }
// printList(list);

//Recursive method
// function printList(list) {
//   console.log(list.value);
//   if (list.next) {
//     printList(list.next);
//   }
// }
// printList(list);

//Exercise 5

//Output a single-linked list in the reverse order
// importance: 5
// Output a single-linked list from the previous task Output a single-linked list in the reverse order.
// Make two solutions: using a loop and using a recursion.
// function printList(list) {
//   while (list) {

//     list = list.next;
//     console.log(list.value);
//   }
// }
// printList(list);

// Recursive method
// function printList(list) {
//   if (list.next) {
//     printList(list.next);
//   }
//   console.log(list.value);
// }
// printList(list);
