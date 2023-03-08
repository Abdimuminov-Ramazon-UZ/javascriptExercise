//Exercise 1
//berilgan stringda nechta katta harf va nechta kichik harf borligini aniqlang
//Read array data
// let str = "Webbrain Academy";
// let getFilterCase = (str) => {
//   let n = 0,
//     m = 0;
//   let res = [...str].filter((value) =>
//     value === value.toLowerCase() && value !== " " ? (n += 1) : (m += 1)
//   );
//   res = { "Katta Harflar soni": m, "kichik harflar soni": n };
//   return console.log(res);
// };
// getFilterCase(str);

//Exercise 2
//berilgan stringda @ belgini a harfiga almashtiring
//Update array data
// let str = "Webbrain Ac@demy";
// let updateLetter = (str) => {
//   let res = [...str].map((value) => (value === "@" ? (value = "a") : value));
//   return console.log(res.join(""));
// };
// updateLetter(str);
// // console.log([...str].join(""));

//Exercise 3
//Duplicate harflarni o'chiring
//Delete array data
// let str = "wwwerbbrain academmmmyyy";
// let deleteDupLet = (str) => {
//   let res = [...str].filter(
//     (value, index, arr) => arr.indexOf(value) === index
//   );
//   return res.join("");
// };
// console.log(deleteDupLet(str));

// //Exercise 4
// //berilgan stringdagi raqamlarni  toping
// let str = "we6brain 4acade5my";
// let sortByNUmber = (str) => {
//   let res = [...str].filter((a, b) => typeof a !== typeof b);
//   return res;
// };
// console.log(sortByNUmber(str));
// // let a = "6";
// // let b = Math.floor(a);
// // console.log(typeof b === "number");

//Exercise 5
//berilgan stringning qiymatini 2 marta takrorlab qaytaring
// let str = "webbrain";
// let repeatStrLetter = (str) => {
//   let res = [...str].map((value) => value + value);
//   return console.log(res.join(""));
// };
// repeatStrLetter(str);

//Exercise 6
//Berilgan so'zning palindrom yoki palindrom emasligini tekshiring
// let str = "non";
// let checkPalind = (str) => {
//   let res1 = [...str].reverse().join("");
//   return str === res1;
// };
// console.log(checkPalind(str));

// Exercise 7
// berilgan stringlardagi harflar sonini solishtiring
// let str1 = "web",
//   str2 = "wev",
//   checkLength = (a, b) => {
//     let obj = {};
//     for (val of a) {
//       obj[val] = obj[val] ? obj[val] + 1 : 1;
//     }
//     let obj1 = {};
//     for (val of b) {
//       obj1[val] = obj1[val] ? obj1[val] + 1 : 1;
//     }
//     for (val in obj) {
//       for (val1 in obj1) {
//         if (val === val1) {
//           delete obj[val];
//           delete obj1[val1];
//         }
//       }
//     }
//     Object.assign(obj, obj1);
//     return obj;
//   };
// console.log(checkLength(str1, str2));

//Exercise 8
//stringda berilgan belgilar sanog'ini toping
// let str = "webbrain academy";
// let counLetter = (str) => {
//   let obj = {};
//   for (val of str) {
//     obj[val] = obj[val] ? obj[val] + 1 : 1;
//   }
//   return obj;
// };
// console.log(counLetter(str));

//Exercise 9
//stringni ziplang
//res=web2ra2i3n
// let str = "webbraaiiin aaaaacademy";
// let zipString = (str) => {
//   let obj = {};
//   for (val of str) {
//     obj[val] = obj[val] ? obj[val] + 1 : 1;
//   }
//   let arr = Object.entries(obj)
//     .flat(Infinity)
//     .filter((val) => val !== 1)
//     .join("");
//   return arr;
// };
// console.log(zipString(str));

//Exercise 10
//Objects keylarini toping
// let obj = { title: "webbrain", age: 2 };
// let keyObj = Object.keys(obj);
// console.log(keyObj);

//Exercise 11
//Object ichidagi keylar yig'indisini toping
// let obj = {
//   name: "aser",
//   age: 32,
//   child: { name: "lenovo", age: 12, child: { age: 14 } },
// };
// let age1 = 0;
// while (obj.child) {
//   age1 = age1 + obj.age;
//   obj = obj.child;
// }
// console.log(age1);

//Exercise 12
//valuesi boolen typedagilar chiqarilsin
// let obj = {
//   id: 1,
//   name: "webbrain",
//   offline: true,
//   online: true,
//   individual: false,
// };
// for (val in obj) {
//   if (typeof obj[val] !== "boolean") {
//     delete obj[val];
//   }
// }
// console.log(obj);

//Exercise 13
//remove duplicates
// let num = [1, 2, 3, 4, 4, 5, 4, 5, 6];
// let delDup = (num) => {
//   let res = num.filter((value, index, arr) => arr.indexOf(value) === index);
//   return res;
// };
// console.log(delDup(num));

//Exercise 14
//Arraylarni bir birig taqqoslang
// let num1 = [1, 2, 3, 4],
//   num2 = [1, 2, 3];
// if (num1.join("").localeCompare(num2.join("")) === 0) {
//   console.log("similar");
// } else {
//   console.log("no same");
// }
//Exercise 14
//Arraydagi 2 honali sonlarni chiqaring
// let num = [1, 23, 24, 25, 2];
// let num1 = num.filter((value) => value >= 10);
// console.log(num1);

////Exercise 14
//Arraydagi eng katta elemntdan eng kchigini ayiring
// let num = [2, 4, 5, 3, 2, 1];

// let countDiv = (num) => {
//   for (v of num) {
//     num.sort((a, b) => b - a);
//     num[0] - num[1] ? (num[1] = num[0] - num[1]) : 1;
//     num.splice(0, 1);
//     console.log(num);
//   }
//   num[0] = num[1] ? (num = num[0] || 1) : countDiv(num);
//   return num;
// };
// console.log(countDiv(num));

// let num3 = [1, 3, 2, 8, 5, 2, 3, 5];
// console.log(countDiv(num3));

// //Exercise 15
// //Sizga N integer  raqam beriladi. N istalgan integer raqam bo'lishi mumkun.
// // Misol uchun 9, mana shu raqamni binary korinishi 1001.

// // ⚡️ savol!
// // Berilgan N integierning, binary korinishidagi, 1lar oralig'idagi 0 larning eng uzun ketma ketligini toping.
// let num = 9;
// let bin = num.toString(2).toString();
// console.log(typeof bin);
// let a = 0;
// function countZero(bin) {
//   for (v of bin) {
//     if ((v = 0)) {
//       a = a + 1;
//     }
//     console.log(v);
//   }
//   return a;
// }
// console.log(countZero(bin));
