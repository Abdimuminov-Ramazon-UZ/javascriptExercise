//4-dars Homeworks
//Exercise 1
//Rewrite the "switch" into an "if"

// Write the code using  if..else  which would correspond to the following  switch :
// let browser = prompt("Enter your browser !!!", "");
// switch (browser) {
//     case "Edge":
//         alert("You've got the Edge!");
//         break;

//     case "Chrome":
//     case "Firefox":
//     case "Safari":
//     case "Opera":
//         alert("Okay we support these browsers too");
//         break;

//     default:
//         alert("We hope that this page looks ok!");
// }

//solution

// if (browser === "Edge") alert("You've got the Edge!");
// else if (
//     browser === "Chrome" ||
//     browser === "Firefox" ||
//     browser === "Safari" ||
//     browser === "Opera"
// ) {
//     alert("Okay we support these browsers too");
// } else alert("We hope that this page looks ok!");

//Exercise 2
// Rewrite "if" into "switch"

// Rewrite the code below using a single  switch  statement:
// let a = +prompt("a?", "");

// if (a == 0) {
//     alert(0);
// }
// if (a == 1) {
//     alert(1);
// }

// if (a == 2 || a == 3) {
//     alert("2,3");
// }

// switch (a) {
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert("2,3");
// }

//Exercise 3
//Which values get shown by the "for" loop?

// For each loop write down which values it is going to show. Then compare with the answer.
// Both loops  alert  same values or not?

// 1.
// The postfix form:
//     for (let i = 0; i < 5; i++) alert(i);
// 2.
// The prefix form:

//     for (let i = 0; i < 5; ++i) alert(i);
// for (let i = 0; i < 5; i++) {
//     alert(i);
// }
// for (let i = 0; i < 5; ++i) {
//     alert(i);
// }
//yes because pstfix and prefix are executed an ordered

//Exercises 4
//Output even numbers in the loop

// Use the  for  loop to output even numbers from  2  to  10 .
// for (let i = 2; i <= 10; i += 2) {
//     console.log(i);
//} //2 4 6 8 10

//Exercise 5
// Replace "for" with "while"

// Rewrite the code changing the  for  loop to  while  without altering its behavior (the output
// should stay same).

// for (let i = 0; i < 3; i++) {
//     console.log(`number ${i}!`);
// }
// let i = 0;
// while (i < 3) {
//     console.log(`number ${i}!`);
//     i++;
// }

//Exercise 6
//Repeat until the input is correct
// importance: 5;

// Write a loop which prompts for a number greater than  100 . If the visitor enters another number
// – ask them to input again.
// The loop must ask for a number until either the visitor enters a number greater than  100  or
// cancels the input/enters an empty line.
// Here we can assume that the visitor only inputs numbers. There’s no need to implement a
// special handling for a non-numeric input in this task.

// 1
// let number;
// do {
//     number = +prompt("Enter your number!!!", 0);
// } while (number <= 100 && number);

//2
// let number;
// do {
//     number = +prompt("Enter greater than 100 number!!!", "");
// } while (number < 100 || "");

//Exercise 7
//Output prime numbers

// An integer number greater than  1  is called a prime   if it cannot be divided without a
// remainder by anything except  1  and itself.
// In other words,  n > 1  is a prime if it can’t be evenly divided by anything except  1  and  n .
// For example,  5  is a prime, because it cannot be divided without a remainder by  2 ,  3  and  4 .
// Write the code which outputs prime numbers in the interval from  2  to  n .
// For  n = 10  the result will be  2,3,5,7 .
// P.S. The code should work for any  n , not be hard-tuned for any fixed value.

// let n = 20;
// outer: for (i = 2; i <= n; i++) {
//     inner: for (let j = 2; j < i; j++) {
//         if (i % j === 0) continue outer;
//     }
//     console.log(i);
// }

//Exercise 8
//Times table
// let a = +prompt("Which are you number of time table ?", ""),
//     b = +prompt(
//         "How many numbers should be multiplied in the multiplication table? ",
//         ""
//     );

// // let i = 2;
// for (let i = 2; i <= b; i++) {
//     let c = a * i;
//     alert(`${a}*${i}=${c}`);
// }

//Independent Exercises
//Greatest common divisor
let n = 12;
outer: for (; n >= 2; n--) {
    inner: for (let j = 1; j < n; j++) {
        if (n % j === 0);
        break outer;
    }
    console.log(n);
}