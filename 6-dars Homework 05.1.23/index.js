//Exercise 1
// Hello, object

// Write the code, one line for each action:
// 1. Create an empty object  user .
// 2. Add the property  name  with the value  John .
// 3. Add the property  surname  with the value  Smith .
// 4. Change the value of the  name  to  Pete .
// 5. Remove the property  name  from the object.

// const user = {}; //1
// user.name = "John"; //2
// user.surname = "Smith"; //3
// user.name = "Pete"; //4
// delete user.name;
// console.log(user); //output : { surname: 'Smith' }

//Exercise 2
//Check for emptiness

// Write the function  isEmpty(obj)  which returns  true  if the object has no properties,
// false  otherwise.
// Should work like that:
// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert(isEmpty(schedule)); // false
// function isEmpty(obj) {
//     for (let i in obj) {
//         return false;
//     }
//     return true;
// }

// let schedule = {};
// alert(isEmpty(schedule)); // true
// schedule["8:30"] = "get up";
// alert(isEmpty(schedule)); // false

//Exercise 3
// Constant objects?

// Is it possible to change an object declared with  const ? What do you think?
// const user = {
//     name: "John",
// };

// // does it work?
// user.name = "Pete"; //yes It is work,because Object name don't change

//Exercise 4
//Sum object properties

// We have an object storing salaries of our team:
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };

// Write the code to sum all salaries and store in the variable  sum . Should be  390  in the
// example above.
// If salaries is empty, then the result must be 0.
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };
// let sum = Number();

// for (let i in salaries) {
//     sum += salaries[i];
// }
// //sumning oxirgi qiymati 390 ga teng loopda 100 260 390 javoblarini qaytaradi
// alert(sum);

//Exercise 5
//Multiply numeric properties by 2

// Create a function  multiplyNumeric(obj)  that multiplies all numeric properties of  obj  by
// 2 .
// For instance:
//// before the call
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

//   multiplyNumeric(menu);

//   // after the call
//   menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
//   };
// Please note that  multiplyNumeric  does not need to return anything. It should modify the
// object in-place.
// P.S. Use  typeof  to check for a number here.

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu",
// };

// function MultipleBy(obj) {
//     for (let i in obj) {
//         if (typeof obj[i] == "number") {
//             obj[i] = obj[i] * 2;
//         }
//     }
//     return obj;
// }
// console.log(MultipleBy(menu));

//Exercise 6
// No1
// object keylarini toping
// let obj={
//     id:1,
//     name:"WebBrain"
// }
// chiqish
// id,name
// let obj = {
//     id: 1,
//     name: "WebBrain",
// };
// for (let i in obj) {
//     console.log(i);
// }
// no2
// object valuelarining raqamga tenglarini toping
// let obj={
//     id:1,
//     name:"WebBrain"
// }
// chiqish
// id
// for (let i in obj) {
//     if (typeof obj[i] == "number") {
//         console.log(i);
//     }
// }
// No3
// object valuelarining boolean tipidagi malumotlrini qaytaring keylari bn biriga
// let obj={
//     id:1,
//     name:"WebBrain",
//     offline:true,
//     online:true,
//     individual:false
// }
// chiqish
// {   offline:true,
//     online:true,
//     individual:false
// }
// let obj = {
//     id: 1,
//     name: "WebBrain",
//     offline: true,
//     online: true,
//     individual: false,
// };

// function checkBool() {
//     for (let i in obj) {
//         if (typeof obj[i] != "boolean") {
//             delete obj[i];
//         }
//     }
//     return obj;
// }
// console.log(checkBool(obj)); //!= operatori yordamida masala yechildi
// No4
// object va string berilgan .agar object keylari ichida stringga teng bolgan key bolsa shu key va valueni chiqazing
// let obj={
//     id:1,
//     name:"WebBrain",
//     offline:true,
//     online:true,
//     individual:false
// }
// function Search(obj,str){}
// Search(obj,'WebBrain')
// chiqish
//     name:"WebBrain"
// let obj = {
//     id: 1,
//     name: "WebBrain",
//     offline: true,
//     online: true,
//     individual: false,
// };

// function Search(obj, str) {
//     for (let i in obj) {
//         if (obj[i] === str) {
//             /
//             console.log(`${i} : "${obj[i]}"`);
//         }
//     }
// }
// Search(obj, "WebBrain");

// No5
// object va string berilgan.  string bor bolgan object valuelarining chiqaring
// let obj={
//   id:1,
//   name:"atirgul",
//   color:"qizil",
//   count:10,
//   price:"10$"
// }
// searchValue(obj,'i') => atirgul,qizil
// let obj = {
//     id: 1,
//     name: "atirgul",
//     color: "qizil",
//     count: 10,
//     price: "10$",
// };
// // console.log(typeof obj.price);

// function searchValue(obj, i) {
//     for (let i in obj) {
//         if (typeof obj[i] != "string") {
//             delete obj[i];
//         }
//     }
//     if ((i = "i")) {
//         for (let k in obj) {
//             console.log(obj[k]);
//         }
//     } else {
//         console.log(obj[i]);
//     }
// }
// searchValue(obj, "i");