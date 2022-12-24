//homework
//Exercise 1
// //Using  if..else , write the code which gets a number via  prompt  and then shows in
// alert :
// 1 , if the value is greater than zero,
// -1 , if less than zero,
// 0 , if equals zero.
// In this task we assume that the input is always a number.
// let numberW = document.querySelector("#number");
// // let number = +prompt("Enter your number !", "");

// if (number > 0) numberW.innerHTML = "Qiymatingiz 1 kabi musbat";
// else if (number < 0) numberW.innerHTML = "Qiymatingiz -1 kabi manfiy";
// else numberW.innerHTML = "Qiymatingiz nolga teng";

//Exercise-2
//Rewrite 'if' into '?'

// Rewrite this  if  using the ternary operator  '?' :
//if (a + b < 4) {
//     result = 'Below';
// } else {
//   result = 'Over';
// }
// let Answer = document.querySelector("#answer");
// let a = +prompt("Value a: ", ""),
//     b = +prompt("Value b: ", "");
// if (a + b < 4) {
//     Answer.innerHTML = "Below";
// } else {
//     Answer.innerHTML = "Over";
// }

//Exercie-3

// Rewrite  if..else  using multiple ternary operators  '?' .
// For readability, it’s recommended to split the code into multiple lines.

//let message;

// if (login == 'Employee') {
//     message = 'Hello';
//   } else if (login == 'Director') {
//     message = 'Greetings';
//   } else if (login == '') {
//     message = 'No login';
//   } else { }
// let Message = document.querySelector("#message");
// let login = prompt("Enter your messages!!!", "");

// if (login == "Employee") {
//     message = "Hello";
// } else if (login == "Director") {
//     message = "Greetings";
// } else if (login == "") {
//     message = "No login";
// } else {  message = '';
// }

// login === "Employee" ?
//     (message.innerHTML = "Hello") :
//     login === "Director" ?
//     (message.innerHTML = "Greetings") :
//     login === "" ?
//     (message.innerHTML = "No Login") :
//     (message.innerHTML = "");

// Nullish operator || ?? !
//Exercise 1
//
// What's the result of OR?

// What is the code below going to output?

//alert(null||2||undefined)
// alert(null || 2 || undefined); //Answer is 2 because  this only true value
//Exercise - 2
//What's the result of OR'ed alerts?

// What will the code below output?
//alert( alert(1) || 2 || alert(3) );
// alert(alert(1) || 2 || alert(3)); //Answer is 2 because this is first true value, Alerts are undefined   values
//Exercie 3
//What is the result of AND?

// What is this code going to show?
// alert(1 && null && 2); //Answer is null , because this is only false values
//Exercise 4
//What is the result of AND'ed alerts?

// What will this code show?

// alert(alert(1) && alert(2)); //Answer is undefined
//Exercise 5
//The result of OR AND OR

// What will the result be?
// alert(null || (2 && 3) || 4); //Answer is 3,because this first true value,because ofPrecedense do 2&&3  first

// console.log(typeof alert(1)); //undefined
// console.log(2 && 3); //3 big each other

//Exercise 6
//Check the range between

// Write an “if” condition to check that  age  is between  14  and  90  inclusively.
// let age = +prompt("Enter your age!!!", "");

// let ageInput = document.querySelector("#age");
// if (age >= 14 && age <= 90) ageInput.innerHTML = "You is middle age";

//Exercise 7
//Check the range outside

// Write an  if  condition to check that  age  is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT  ! , the second one – without it.

//first
// if (!(age >= 14 && age <= 90)) ageInput.innerHTML = "You isn't middle age";
//second
// if (age < 14 || age > 90) ageInput.innerHTML = "You isn't middle age";

//Exercise 8
// A question about "if"

// Which of these  alert s are going to execute?
// What will the results of the expressions be inside  if(...) ?

// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );
// if (-1 || 0) alert("first"); //alerted first because -1 is true value
// if (-1 && 0) alert("second"); // nothing because o is false value expression stopped at 0
// if (null || (-1 && 1)) alert("third"); //alerted third because -1&&1 true and equal to 1 and common expression is true

//Exercise 9
// Write the code which asks for a login with  prompt .
// If the visitor enters  "Admin" , then  prompt  for a password, if the input is an empty line or
// Esc  – show “Canceled.”, if it’s another string – then show “I don’t know you”.
// The password is checked as follows:
// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled.”

let admin = document.querySelector("#admin"),
    password = document.querySelector("#password");
let adminI = prompt("Who's there ?", "");

if (adminI === "Admin") {
    let passwordI = prompt("Password ?", "");
    if (passwordI === "TheMaster") password.innerHTML = "Welcome";
    else if (!(passwordI == null)) password.innerHTML = "Wrong password!";
} else if (!(adminI == null)) {
    admin.innerHTML = "i don't know you";
}