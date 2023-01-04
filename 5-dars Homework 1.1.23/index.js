//Exercise 1
//Is "else" required?

// The following function returns  true  if the parameter  age  is greater than  18 .
// Otherwise it asks for a confirmation and returns its result:
// let age = 19;

// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         // ...
//         return confirm("Did parents allow you?");
//     }
// }
// checkAge("sdfdsfds");

// checkAge(18);//free response
// console.log(typeof checkAge(18));//boolean

// Will the function work differently if  else  is removed?
// Is there any difference in the behavior of these two variants?
// function checkAge1(age) {
//     if (age > 18) {
//         return true;
//     }
//     // ...
//     return confirm("Did parents allow you?");
// }
// checkAge1("dfdf");

// console.log(typeof checkAge1(19)); //boolean
// checkAge1(18);//free response
//Deyarli farqi yo'q ifodalar bu yerda asosiy vazifa ifda 2 ifodada age>18 bo'lishi bilan kod to'xtayapti agar ham if ham 2 ifoda bajarilganda farqli bo'lar edi ammo ifning condition === true bo'lishi bilan funksiya yurishi to'xtayapti shuning uchun funksiyalar farq qilyapti

//Exercise 2
// Rewrite the function using '?' or '||'

// The following function returns  true  if the parameter  age  is greater than  18 .
// Otherwise it asks for a confirmation and returns its result.

// Rewrite it, to perform the same, but without  if , in a single line.
// Make two variants of  checkAge :
// 1. Using a question mark operator  ?
// 2. Using OR  ||

// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm("Do you have your parents permission to access this page?");
//     }
// }

// 1. Using a question mark operator  ?
// function checkAge(age) {
//     return age > 18 ?
//         true :
//         confirm("Do you have your parents permission to access this page?");
// }
// checkAge(19); //true
// checkAge(8); //free response
//2. Using OR  ||
// function checkAge(age) {
//     return (
//         age > 18 ||
//         confirm("Do you have your parents permission to access this page?")
//     );
// }
//checkAge(19); //true
// checkAge(8); //free response
//|| operatori qaysi tomon true bo'lsa shuni jo'natadi agar ko'plab true lar bo'lsa unda o'zi tekshirib kelgan  oxirgi trueni qaytaradi

//Exercise 3
// Function min(a, b)

// Write a function  min(a,b)  which returns the least of two numbers  a  and  b .
// For instance:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1
// function checkMin(a, b) {
//     return a > b ? alert(b) : alert(a);
// }
// checkMin(2, 5); // 2
// checkMin(3, -1); // -1
// checkMin(1, 1);// 1

//Exercise 4
// Function pow(x,n)

// Write a function  pow(x,n)  that returns  x  in power  n . Or, in other words, multiplies  x  by
// itself  n  times and returns the result.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Create a web-page that prompts for  x  and  n , and then shows the result of  pow(x,n) .
// Run the demo
// P.S. In this task the function should support only natural values of  n : integers up from  1 .
// let getNum = +prompt("Enter the number to be raised to the power", ""),
//     getPow = +prompt("Enter the number of power", "");

// function calcPow() {
//     if (getNum >= 1) {
//         let calcPow = getNum ** getPow;
//         return alert(calcPow);
//     } else {
//         return alert("Please,enter a number greater than 0");
//     }
// }
// calcPow();