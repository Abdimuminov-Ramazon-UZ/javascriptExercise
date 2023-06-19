//Exercise 1
// Set and decrease for counter
// importance: 5
// Modify the code of  makeCounter()  so that the counter can also decrease and set the
// number:
// counter()  should return the next number (as before).
// counter.set(value)  should set the  count  to  value .
// counter.decrease()  should decrease the  count  by 1.
// See the sandbox code for the complete usage example.
// P.S. You can use either a closure or the function property to keep the current count. Or write
// both variants.

// function makeCounter() {
//   let count = 0;
//   function counter() {
//     return count++;
//   }

//   counter.set = (value) => (count = value);

//   counter.decrease = function () {
//     return count--;
//   };
//   return counter;
// }
// let counter = new makeCounter();
// console.log(counter());
// console.log(counter.set(5));
// console.log(counter.decrease());

// console.log(counter.set(value));
//Exercise 2
// Sum with an arbitrary amount of brackets
// importance: 2
// Summary
// ✔ Tasks
// Write function  sum  that would work like this:
// sum(1)(2) == 3; // 1 + 2
// x == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15

// P.S. Hint: you may need to setup custom object to primitive conversion for your function.

function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function () {
    return currentSum;
  };

  return f;
}
// let s = sum(a);
// console.log(s(1)(2));
// console.log(sum(1)(2));
// alert(sum(1)(2)); // 3
// alert(sum(5)(-1)(2)); // 6
// alert(sum(6)(-1)(-2)(-3)); // 0
// alert(sum(0)(1)(2)(3)(4)(5)); // 15

//function faqat alertda ishlaydi
// console.log(); da ishlamaydi functon bo'lib qolaveradi

//1-savol
//functionga metod o'rnatish
// function x() {
//   let params = 0;
//   function defend() {
//     return ++params;
//   }
//   defend.print = function (value) {
//     return params + value;
//   };
//   return defend;
// }
// console.log(x());
// let defend1 = x();
// console.log(defend1());
// console.log(defend1.print(5));

//qilgan xatolarim:
//1  functionga return yozmadim undefined chiqardi
//2 inner functionnning o'zi yozilsa ham boshqa nom yozilsa ham ishlaydi

function add() {
  let count = "assaf";
  function rev() {
    return count + "125";
  } //closure function
  rev.print = function (value) {
    return (count = value);
  };
  return rev; //functionni nomi yozilsa kifoya () bersak call bo'lib qoladi
}
let x = add();
console.log(x()); //funhction yasaldi metod qo'shildi ioshlatilib ko'rildi
