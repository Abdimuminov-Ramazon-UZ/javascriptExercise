//Exercise 1
//Translate border-left-width to borderLeftWidth
// importance: 5
// Write the function  camelize(str)  that changes dash-separated words like “my-short-string”
// into camel-cased “myShortString”.
// That is: removes all dashes, each word after dash becomes uppercased.
// Examples:
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == "listStyleImage";
// camelize("-webkit-transition") == "WebkitTransition";

// P.S. Hint: use  split  to split the string into an array, transform it and  join  back.
// "use strict";
// function camelize(str) {
//   let newstr2 = str.split("");
//   newstr2.forEach((element, ind, arr) => {
//     if (element === "-") {
//       let ind2 = ind + 1,
//         val = arr[ind2];
//       arr.splice(ind, 1);
//       arr[ind] = val.toUpperCase();
//     }
//   });
//   return newstr2.join("");
// }
// console.log(camelize("background-color")); //== "backgroundColor";
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

// function cam(str) {
//   return str
//     .split("-")
//     .map((word, index) =>
//       index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join("");
// }
// console.log(cam("background-color"));

//Exercise 2
// Filter range

// Write a function  filterRange(arr, a, b)  that gets an array  arr , looks for elements
// between  a  and  b  in it and returns an array of them.
// The function should not modify the array. It should return the new array.
// For instance:
// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (matching values)

// alert( arr ); // 5,3,8,1 (not modified)
// let arr = [5, 3, 8, 1];
// function filtered(arr, start, end) {
//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];

//     if (val < start || val > end) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
// }
// filtered(arr, 1, 4);
// console.log(arr);

//Exercise 3
// Sort in the reverse order

// To solution
// Copy and sort array
// We have an array of strings  arr . We’d like to have a sorted copy of it, but keep  arr
// unmodified.
// let arr = [5, 2, 1, -10, 8];
// // ... your code to sort it in the reverse order
// alert( arr ); // 8, 5, 2, 1, -10

// let arr = [5, 2, 1, -10, 8];
// function sortArr(arr1) {
//   return arr1.sort((val, b) => b - val);
// }
// sortArr(arr);
// console.log(arr);

//Exercise 4
// Copy and sort array

// We have an array of strings  arr . We’d like to have a sorted copy of it, but keep  arr
// unmodified.

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)
// let arr = ["HTML", "JavaScript", "CSS"];
// let copySorted = (array) => {
//   return array.slice().sort();
// };
// let sorted = copySorted(arr);
// console.log(sorted);
// console.log(arr);

//Exercise 5
//Create an extendable calculator

// Create a constructor function  Calculator  that creates “extendable” calculator objects.

// 1.
// First, implement the method  calculate(str)  that takes a string like  "1 + 2"  in the
// format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should
// understand plus  +  and minus  - .
// Usage example:

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10

// There may be error handling if you’d like to add it.
// function Calculator() {
//   this.calculate = (val) => {
//     return eval(val);
//   };
// }
// let calc = new Calculator();
// console.log(calc.calculate("3+7"));

//Exercise 6
//Map to names

// You have an array of  user  objects, each one has  user.name . Write the code that converts it
// into an array of names.
// For instance:
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = /* ... your code */

// alert( names ); // John, Pete, Mary
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let users = [john, pete, mary];

// let names = users.map((item) => item.name);
// console.log(names);

//Exercise 7
//Map to objects

// You have an array of  user  objects, each one has  name ,  surname  and  id .
// Write the code to create another array from it, of objects with  id  and  fullName , where
// fullName  is generated from  name  and  surname .
// For instance:
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = /* ... your code ... */

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith
// So, actually you need to map one array of objects to another. Try using  =>  here. There’s a
// small catch
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [john, pete, mary];
// let usersMapped = users.map((val) => ({
//   fullName: `${val.name} ${val.surname}`,
//   id: val.id,
// }));
// console.log(usersMapped);

//Exercise 8
// Sort users by age

// Write the function  sortByAge(users)  that gets an array of objects with the  age  property
// and sorts them by  age .
// For instance:
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// sortByAge(arr);

// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [pete, john, mary];

// function sortByAge(arr) {
//   return arr.sort((val, val2) => val.age - val2.age);
// }
// console.log(sortByAge(arr));

//Exercise 9
// Shuffle an array
// importance: 3
// Write the function  shuffle(array)  that shuffles (randomly reorders) elements of the array.
// Multiple runs of  shuffle  may lead to different orders of elements.
//  For instance:
// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...
// All element orders should have an equal probability. For instance,  [1,2,3]  can be reordered
// as  [1,2,3]  or  [1,3,2]  or  [3,1,2]  etc, with equal probability of each case.

// let arr = [1, 2, 3];
// function shuffle(arr) {
//   return arr.sort(() => Math.random - 0.5);
// }
// console.log(shuffle(arr));

//Exercise 10
//Get average age

// Write the function  getAverageAge(users)  that gets an array of objects with property  age
// and returns the average age.
// The formula for the average is  (age1 + age2 + ... + ageN) / N .
// For instance:
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [john, pete, mary];
// function getAverageAge(arr) {
//   return arr.reduce((sum, val) => (sum += val.age), 0);
// }
// console.log(getAverageAge(arr));

//Exercise 10
// Filter unique array members

// Let  arr  be an array.
// Create a function  unique(arr)  that should return an array with unique items of  arr .
// For instance:

// function unique(arr) {
//     /* your code */
//   }

//   let strings = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];

//   alert( unique(strings) ); // Hare, Krishna, :-O
// function unique(arr) {
//   let newS = new Set(arr);
//   return newS;
//   //   return arr.filter((val, ind, array) => array.indexOf(val) === ind);
// }

// let strings = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];

//Exercise 11
//Array ichidagi sonlar yig'indisi toping
// let arr = [8, 9, 7, 5, 54, 61, 20];
// let sum = arr.reduce((sum, val) => (sum += val), 0);
// console.log(sum);

//Exercise 12
//["webbrain","academy"] ichidagi char sanog'ini topish
// let strArr = ["webbrain", "academy"];
// function sumStr(arr) {
//   return arr.join("").length;
// }
// console.log(sumStr(strArr));
// //har bir elementdagi char sanog'ini topish
// function sumStrEach(arr) {
//   let foo = [];
//   for (index in arr) {
//     foo[index] = arr[index].length;
//   }
//   return foo;
// }
// console.log(sumStrEach(strArr));

//Exercise 13
//arrayni bir biriga taqqoslang
// let arr1 = [7, 8, 4, 5],
//   arr2 = [7, 8, 4, 5];
// console.log(arr1.includes(arr2));

//Execise 14
let users = [
  { id: 1, year: 1998, engine: 1, name: "Tico " },
  { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
  { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
  { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
  { id: 5, year: 2012, engine: 2, name: "Malibu" },
  { id: 6, year: 2000, engine: 1.2, name: " Damas" },
  { id: 7, year: 2018, engine: 2.4, name: "Tracker" },
];
// //1- 2000 yildan oldingi mashinalar ro'yxatini chiqaring
// let sheetDown2000 = users.filter((val) => val.year < 2000);
// console.log(sheetDown2000);
// //2- 2010 yildan keyingi mashinalar ro'yxatini chiqaring
// let sheetup2010 = users.filter((val) => val.year > 2010);
// console.log(sheetup2010);
// //3- engine kuchiga qarab datalarni sort qiling
// let sheetForceEngine = users.sort((a, b) => a.engine - b.engine);
// console.log(sheetForceEngine);
// //4- chiqarilgan yilig qarab ma'lumotlarni sort qiling
// let sheetWorYea = users.sort((a, b) => a.year - b.year);
// console.log(sheetWorYea);
// //5- ismlarni Alphabet tarzida sort qiling
// let sheetOrdAlphabet = users.sort((a, b) => a.name - b.name);
// console.log(sheetOrdAlphabet);
// //6- 2000 yildan oldingi mashinalarga status: eski ma'lumotni qo'shing
// let newUserData = users
//   .filter((val) => val.year < 2000)
//   .map((val) => ({ ...val, status: "eski" }));
// console.log(newUserData);
//7- 200-2010 yilda chhiqqan mashinalarga status: o'rta ma'lumotini qo'shing
// let newUserData2 = users
//   .filter((val) => val.year > 2000)
//   .filter((val) => val.year <= 2010)
//   .map((val) => ({ ...val, status: "o'rta" }));
// console.log(newUserData2);

//8-2010-2022 a chhiqqan mashinalarga status: yangi ma'lumotini qo'shing

// let newUserData3 = users
//   .filter((val) => val.year > 2010)
//   .map((val) => ({ ...val, status: "yangi" }));
// console.log(newUserData3);

// No7
// array berilgan array ning ichida objectlar berilgan. object ichida age berilgan. age ni 18dan katta bolgan objectlarni qaytaring
let user = {
  id: 1,
  name: "Odil",
  age: 78,
  children: [
    {
      id: 1,
      name: "Umar",
      age: 54,
      children: [
        { id: 1, name: "Asmo", age: 34 },
        { id: 2, name: "Osim", age: 30 },
        { id: 3, name: "Xattob", age: 25 },
      ],
    },
    { id: 2, name: "Umar", age: 54 },
    { id: 3, name: "Umar", age: 54 },
  ],
};
// // let newM = Object.entries(user);
// // console.log(newM.length);
// function openObj(obj) {
//   while (obj) {
//     console.log(typeof obj.children);
//   obj.children=obj
//   if(obj){

//   }

//     console.log(obj);
//   }
// }
// openObj(user);

// No8
// array ichida object berilgan. job berilgan objectlarni qaytaring
// let arr = [
//   { id: 1, name: "Usmon", job: "developer" },
//   { id: 2, name: "Usmon", job: "developer" },
//   { id: 3, name: "Usmon" },
//   { id: 4, name: "Usmon", job: "developer" },
//   { id: 5, name: "Usmon" },
// ];
// console.log(arr.filter((val) => val.job));

// No9
// objectdan clone oling birinchi objni o'zgartirsa ikkinchisi malumotlari ozgarmasligi kk
// let obj = {
//   id: 1,
//   name: "Usmon",
//   job: "developer",
// };
// let obj1 = {};
// Object.assign(obj1, obj);
// obj.id = 2;
// console.log(obj);
// console.log(obj1);
// No13
// talaba oz malumotlarini toldirmoqda. sizga object va massiv berilgan. massiv ichida uzbekiston viloyatlari berilgan. agar talaba massiv ichidagi viloyatlardan boshqa tanlasa bizning filallarimiz faqat shu viloyatlarda degan natija chiqsin.
// let arr = ["Andijon", "Namangan", "Qarshi", "toshkent"];
// function fillData(region) {
//   let dataObj = {};
//   arr.map((val) => (val === region ? (dataObj.region = val) : val));

//   return Object.keys(dataObj).length === 1
//     ? dataObj
//     : console.log("bizning filallarimiz faqat shu viloyatlarda");
// }
// console.log(fillData("Andijon"));
// console.log(fillData("Qashqadaryo"));
// No14
// talabalar malumotlari massiv berilgan. massiv objectlardan tashkil topgan. objectda login parol keltirilgan.
// funksiyaga login va parol jonatiladi.
// agar login parol togri bolsa 'hush kelibsiz' aks holda 'login yoki parol xato degan qiymat chiqazing'
// let arr=[
//     {id:3,name:'Usmon',parol:'1231'},
//     {id:1,name:'Umar',parol:'1241'},
//     {id:5,name:'Jasur',parol:'3452'}
//     {id:2,name:'Asmo',parol:'2312'},
//     {id:4,name:'Salohiddin',parol:'3421'},
// ]
// logIn('Umar','2113') => xato
// logIn('Salohiddin','3421') => hush kelibsiz
// let arr = [
//   { id: 3, name: "Usmon", parol: "1231" },
//   { id: 1, name: "Umar", parol: "1241" },
//   { id: 5, name: "Jasur", parol: "3452" },
//   { id: 2, name: "Asmo", parol: "2312" },
//   { id: 4, name: "Salohiddin", parol: "3421" },
// ];
// function logIn(name, passw) {
//   arr.filter((val) => val.name === name && val.parol === passw).length === 1
//     ? console.log("xush kelibsiz")
//     : console.log("xato");
// }
// logIn("Umar", "2113"); //=> xato
// logIn("Salohiddin", "3421"); // => hush kelibsiz
