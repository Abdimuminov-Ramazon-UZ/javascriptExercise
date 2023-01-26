// //Exercise1
// //Istalgan sonni numberga o'tkazib nechta 1 va 0 qatnashganini aniqlang
// let num = 7;
// function countBinFra(number) {
//   let StringNum = number.toString(2),
//     sum1 = 0,
//     sum0 = 0;

//   for (let i = 0; i < StringNum.length; i++) {
//     if (StringNum[i] === "0") {
//       sum0 += 1;
//     } else {
//       sum1 += 1;
//     }
//   }
//   return `${sum1} ta 1 qatnashgan,${sum0} ta 0 qatnashgan`;
// }
// countBinFra(num);
// countBinFra(8);
// console.log(countBinFra(7564));

// //Exercise 2
// //Berilgan sonlar ichidan eng katta va eng kichik sonlar ayirmasini toping, javob musbat chiqmasin

// let NumbArr = [2, 7, 5, 9, 6, 3, 45];
// function checkDiv(div) {
//   divDef = (Math.max(...div) - Math.min(...div)) * -1;
//   return divDef;
// }
// console.log(checkDiv(NumbArr));

// //Exercise 3
// //randomIntiger(min,max )   min dan max gacha oraliqda ixtiyoriy raqam chiqarib berilsin
// function ranIntr(min, max) {
//   let valRan = Math.trunc(Math.random() * max);
//   if (min <= valRan <= max) {
//     return valRan;
//   }
// }
// console.log(ranIntr(1, 50));

//Exercise 4
//Sum numbers from the visitor

// Create a script that prompts the visitor to enter two numbers and then shows their sum.
// let countS = 0;
// let getVisVal = +prompt("Enter your Values...", "");

// if (getVisVal) {
//   countS = countS + getVisVal;

//   console.log(countS);
// } else {
//   console.log(getVisVal);
// }

//Exercise 5
//Why 6.35.toFixed(1) == 6.3?

// According to the documentation  Math.round  and  toFixed  both round to the nearest
// number:  0..4  lead down while  5..9  lead up.
// For instance:
// alert((1.35).toFixed(1)); // 1.4

// In the similar example below, why is  6.35  rounded to  6.3 , not  6.4 ?
// alert( 6.35.toFixed(1) ); // 6.3
// How to round  6.35  the right way?
//6.35 aslida 6.35ga teng emas u 6.499999999 ga teng ya'ni uning oxirgi sonlari 499999 dir toFixed esa 4 ni yaxlitlaydi va 6.3 qoladi
// let num = 6.35;
// console.log(num.toFixed(25));
// //Right way
// console.log(num.toPrecision(2));

//Exercise 6
// Repeat until the input is a number

// Create a function  readNumber  which prompts for a number until the visitor enters a valid
// numeric value.
// The resulting value must be returned as a number.
// The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that
// case, the function should return  null .

// function readNumber(number) {
//   number = prompt("Enter number type value", "");
//   if (typeof number === "number") {
//     console.log(null);
//   } else {
//     // readNumber();
//     console.log(number);
//   }
// }
// readNumber();
// // if (typeof number === "number") {
// //   console.log(number);
// // } else {
// //   readNumber();
// //   console.log(null);
// // }

//Exercise 7
//An occasional infinite loop
// importance: 4
// This loop is infinite. It never ends. Why?
// let i = 0;
// while (i != 10) {
//   i += 0.2;
//   console.log(i);
// }
// console.log((0.2).toFixed(25));//because 0.2 isnot equal decimal 0.2 .It equal to
// // 0.2000000000000000111022302 but never provide 10

//Exercise 8
//A random number from min to max
// importance: 2
// The built-in function  Math.random()  creates a random value from  0  to  1  (not including  1 ).
// Write the function  random(min, max)  to generate a random floating-point number from
// min  to  max  (not including  max ).
// Examples of its work:
// alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.3435234525
// function random(min, max) {
//   if (Math.random() * max < max) {
//     return Math.random() * max;
//   }
// }
// alert(random(1, 5)); // 1.2345623452
// alert(random(1, 5)); // 3.7894332423
// alert(random(1, 5)); // 4.3435234525

//Exercise 9
// A random integer from min to max
// importance: 2
// Create a function  randomInteger(min, max)  that generates a random integer number
// from  min  to  max  including both  min  and  max  as possible values.
// Any number from the interval  min..max  must appear with the same probability.
// Examples of its work:
// function randomInteger(min, max) {
//   let number = min + Math.trunc(Math.random() * max);
//   if (min <= number <= max) {
//     return number;
//   }
// }

// alert(randomInteger(1, 5)); // 1
// alert(randomInteger(1, 5)); // 3
// alert(randomInteger(1, 5)); // 5

//Exercise 8

//Mathning ceil vs floor vs  trunc   ,parseIntlar bilan farqini tushuntirib bering
//Math.trunc odatda truncating ya'ni float sonning butunini tashlab yuboradi va faqat integer qiymatni oladi
console.log(Math.trunc(5.1246)); //5
//Math.ceil son float bo'lsa avval uni truncating qiladi va 1 ni qo'shib chop qiladi minusli ishoradayam shunday ishlaydi
console.log(Math.ceil(48.11111)); //49
//Math.floor son float bo'lganda uni truncating qiladi va qiymatini shu sondan kichik 1 integerga tenglab  yozadi trunc dan farqi minusli ishorada 1 ta oldinga ya'ni kichik songa qaytadi
console.log(Math.floor(-56.223));
//parseInt stringlar bilan ishlaydigan Number objectining metodlaridan biri streingdagi 1 integerni 2 paarmetriga kirtilgan numeral systemga o'zgartirib bera oladi bunda u 2 dan 64 sanoq sistemasigacha ishlay oladi
