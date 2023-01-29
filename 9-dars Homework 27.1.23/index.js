//Exercise 1
//checkstr(str1,str2) - function yozilsin berilgan parametrlar qisman yoki bir biriga  mos , umuman to'g'ri emasligi ifodalovchi natija qaytarilsin
// function checkstr(str1, str2) {
//   let Com = str1.localeCompare(str2);
//   if (Com === 0) {
//     return "exactly same";
//   } else if (Com > 0) {
//     return " qisman o'xshash";
//   } else {
//     return "not same";
//   }
// // }
// // console.log(checkstr("webbrain", "webbrain"));
// //Exercise 2
// //getCount(str) function yozilsin functiondagi str dagi harflar sanog'ini chiqarib bersin ex: str="webbrain"  output {w:1,e:1....}
//function to print occurrence of character
// function getCount(str) {

// console.log(getCount("webbbbbr"));
// //Exercise 3
// //truncate(str,n) - function yozilsin berilgan stringdan n ta harf ajratib bersin
// //ex: str="webbrain academy " n=5 res:"webbr"
// function truncate(str, n) {
//   return str.substring(0, n);
// }
// console.log(truncate("webbrain academy ", 5));
// //Exercise 4
// //getCurrency(str)  berilgan pul birligini faqat raqamlarini ajratib yozib bersin es: str="$1200" - 1200
// function getCurrency(str) {
//   return Number(str.substring(1));
// }
// console.log(getCurrency("$1200"));
// //Exercise 5
// //berilgan string ichidagi string va character,numberlarni sanog'ini chiqarsin ex:webrrain#%&%$%5512  res : {letter:6,char:3,numb:4}
function getFrac(str) {
  let obj = {};
  let sum = 1,
    sum1 = 1,
    sum2 = 1;
  for (let i of str) {
    if ("A" <= i <= "z") {
      obj.letter = sum++;
    } else if ("0" <= i <= "9") {
      obj.number = sum1++;
    } else {
      obj.char = sum2++;
    }
  }
  return obj;
}
console.log(getFrac("webrrain#%&%$%5512"));
//Exercise 6
//capitilize(str) - berilgan stringdagi barcha so'zlarni faqat bosh harfini katta harfga almashtirib chiqish kerak
// function capitalize(str) {
//   let str1 = { ...str };
//   for (let i in str1) {
//     if (str1[i] === " ") {
//       let k = +i + 1;
//       let str2 = str1[k].toUpperCase(),
//         str3 = str1[0].toUpperCase();

//       str1[k] = str2;
//       str1[0] = str3;
//     }
//   }
//   let arr1 = Object.values(str1).values(),
//     str4 = "";
//   for (const value1 of arr1) {
//     str4 += value1;
//   }

//   return str4;
// }
// function cap2(str) {
//   for (let i of str) {
//     let k = str.indexOf(`${i}`) + 1;
//     if (i === " ") {
//       let str2 = str[k].toUpperCase(),
//         str3 = str[0].toUpperCase();
//       str[k] = str2;
//       str[0] = str3;
//     }
//   }
// }
// console.log(cap2("webbrain       academy facultetu"));
// console.log(capitalize("webbrain       academy facultetu"));

//Exercise 7
//Check for spam

// Write a function  checkSpam(str)  that returns  true  if  str  contains ‘viagra’ or ‘XXX’,
// otherwise  false .
// The function must be case-insensitive:
// function checkSpam(str) {
//   let lowerC = str.toLowerCase();
//   return lowerC.includes("viagra") || lowerC.includes("xxx");
// }
// console.log(checkSpam("buy ViAgRA now")); // == true
// console.log(checkSpam("free xxxxx")); // == true
// console.log(checkSpam("innocent rabbit")); // == false

//Exercise 7
//Truncate the text
// importance: 5;
// Create a function  truncate(str, maxlength)  that checks the length of the  str  and, if it
// exceeds  maxlength  – replaces the end of  str  with the ellipsis character  "…" , to make its
// length equal to  maxlength .
// The result of the function should be the truncated (if needed) string.
// For instance:
// Open a sandbox with tests. 
// function truncate(str, n) {
//   return str.length > n ? str.slice(0, n).padEnd(n + 3, "...") : str;
// }

// console.log(truncate("What I'd like to tell on this topic is:", 20)); //= "What I'd like to te…" )

// console.log(truncate("Hi everyone!", 20)); //= "Hi everyone!"

let strn = "join array";
let arr3 = [...strn];
console.log(arr3);
