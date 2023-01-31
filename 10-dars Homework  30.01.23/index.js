//Execise 1
//let arr =["webbrain","academy"] ko'rinishida berilgan elemntlarning harf sanog'ini chiqarib bering javob res:{w:1,e:2,...} ko'rinishida bo'lsin

// let arr = ["webbrain", "academy"];
// function countLett(Arr) {
//   let count = {};
//   Arr = Arr.join("");
//   for (value of Arr) {
//     count[value] = count[value] ? count[value] + 1 : 1;
//   }
//   return count;
// }
// console.log(countLett(arr));

//Exercise 2
//Is array copied ?
//What is the code going to show?
// let fruits = ["Apples", "Pear", "Orange"];

// // push a new value into the "copy"
// let shoppingCart = fruits;
// shoppingCart.push("Banana");

// // what's in fruits?
// alert(fruits.length); // ?
// Jvob 4 bo'ladi chunki push orqali yana 1 ta element qo'shilmoqda

//Exercise 3
//Array operations.

// Let’s try 5 array operations.
// 1. Create an array  styles  with items “Jazz” and “Blues”.
// 2. Append “Rock-n-Roll” to the end.
// 3. Replace the value in the middle by “Classics”. Your code for finding the middle value
// should work for any arrays with odd length.
// 4. Strip off the first value of the array and show it.
// 5. Prepend  Rap  and  Reggae  to the array.
// let newArr = ["Jazz", "Blues"]; //1
// newArr.push("Rockn-Roll"); //2
// function middleElemRep(Arr, element) {
//   let leng = (Arr.length - 1) % 2;
//   if (leng === 0) {
//     Arr[Arr.length / 2] = element;
//   } else if (leng === 1) {
//     Arr[(Arr.length - 1) / 2] = element;
//   }
//   return Arr;
// }
// console.log(middleElemRep(newArr, "Classics")); //3
// const arrFirVal = newArr.shift();
// console.log(newArr);
// console.log(arrFirVal); //4
// newArr.unshift("Rap", "Reggae");
// console.log(newArr);

//Exercise 4
//Calling in an array context

// importance: 5
// What is the result? Why?

// let arr = ["a", "b"];

// arr.push(function () {
//   alert(this);
// });

// arr[2](); // ?
//Array elementlari chiqadi ya'ni this o'zi turgan obektga teng bo'lgani uchun shu obyekt elemntlarini chiqarib beradi

//Exercise 5
//Sum input numbers

// Write the function  sumInput()  that:
// Asks the user for values using  prompt  and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses
// “Cancel”.
// Calculates and returns the sum of array items.
// P.S. A zero  0  is a valid number, please don’t stop the input on zero.

// function sumInput() {
//   let element = +prompt("Enter your value...", "");

//   let newArr = [];
//   if (element || element === 0) {
//     newArr.push(element);
//     let sumElem = 0;
//     for (value of newArr) {
//       sumElem += value;
//     }
//   } else {
//     alert("please enter number type values");
//   }

//   return sumElem;
// }

// alert(sumInput());

//Exercise  6
// A maximal subarray

// The input is an array of numbers, e.g.  arr = [1, -2, 3, 4, -9, 6] .
// The task is: find the contiguous subarray of  arr  with the maximal sum of items.
// Write the function  getMaxSubSum(arr)  that will return that sum.

// For instance:

// getMaxSubSum([-1, 2, 3, -9]) = 5 (the sum of highlighted items)
// getMaxSubSum([2, -1, 2, 3, -9]) = 6
// getMaxSubSum([-1, 2, 3, -9, 11]) = 11
// getMaxSubSum([-2, -1, 1, 2]) = 3
// getMaxSubSum([100, -9, 2, -3, 5]) = 100
// getMaxSubSum([1, 2, 3]) = 6 (take all)
// If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:
// getMaxSubSum([-1, -2, -3]) = 0
function getSumArr(Arr) {
  let sum = 0,
    sumArray = [];

  for (value of Arr) {
    sum = 0;
    sum += value;
    sumArray.push(sum);
    if (Arr.length > 0) {
      Arr.shift();
    }
    console.log(Arr);
  }
  return sumArray;
}
console.log(getSumArr([1, -2, 3, 4, -9, 6]));
