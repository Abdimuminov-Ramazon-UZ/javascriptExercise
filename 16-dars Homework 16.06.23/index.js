//Exercise 1
// Are counters independent?

// Here we make two counters:  counter  and  counter2  using the same  makeCounter
// function.
// Are they independent? What is the second counter going to show?  0,1  or  2,3  or something
// else?
// function makeCounter() {
//   let count = 0;

//   return function () {
//     return count++;
//   };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// console.log(counter()); // 0
// console.log(counter()); // 1
//shu yerda counter() funksiyasi 2 marta chaqirildi va uning call lari tugadi counter() function makecounter() ga o'zgartirish kiritmadi aksincha o'zi bitta mustaqil funksiya sifatida ishladi agar shu yerda counter2() counter() orqali yasalganda unda counter2() ga nbatijalar ta'sir qilardi

// console.log(counter2()); // 0 sababi funksiya call qilib chaqirilganda  functionning lexical recordida  bor ma'lumoit birinchi o'qiladi
// console.log(counter2()); // 1
//first call da count +1 ga ortdi agar uni 3 marta chaqirganimizda u 2 qaytaradi
//bu yerda counter() va counter2()  o'zagi makecounter() bo'lgan 2 ta independent functionlardir

//Exercise 2

// Counter object
// importance: 5
// Here a counter object is made with the help of the constructor function.
// Will it work? What will it show?

// function Counter() {
//   let count = 0;

//   this.up = function () {
//     return ++count;
//   };
//   this.down = function () {
//     return --count;
//   };
// }

// let counter = new Counter();

// console.log(counter.up()); // 1
//ichki function up() countga 1 qo'shib qaytaradi
// console.log(counter.up()); // 2
//second callda esa countga 1 ga ortadi va 2 qaytaradi
// console.log(counter.down()); // 1
//third callda inner function down() qiymati 2 bo'lgan countdan 1 ni ayrib qaytaradi

//Exercise 3

// Function in if
// Look at the code. What will be the result of the call at the last line?

// let phrase = "Hello";

// if (true) {
//   let user = "John";

//   function sayHi() {
//     console.log(`${phrase}, ${user}`);
//   }
// }
// console.log(user);
// sayHi(); //it will worked ya'ni if constructorinining true sharti bilan ishlashi functionning tashqi scopeda ekanini bildiradi lekin user variablesi ichki bo'lib uni chaqirsak unda not definition beradi. agar ifga true bo'lmagan shart bersak unda saytHi() not function bo'lib qoladi

//Exercise 4
// Sum with closures
// importance: 4
// Write function  sum  that works like this:  sum(a)(b) = a+b .
// Yes, exactly this way, using double parentheses (not a mistype).
// For instance:
// let a = 1;
// let b = 2;
// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// console.log(sum(a)(b));//3
// console.log(sum(5)(-1));//4

//funtion closure  deganda lexical environmentida  lexical recorddagi ma'lumotlardan emas balki outer data dan foydalangani tushuniladi

//Exercise 5

// Filter through function
// importance: 5
// We have a built-in method  arr.filter(f)  for arrays. It filters all elements through the
// function  f . If it returns  true , then that element is returned in the resulting array.
// Make a set of “ready to use” filters:
// inBetween(a, b)  – between  a  and  b  or equal to them (inclusively).
// inArray([...])  – in the given array.
// The usage must be like this:
// arr.filter(inBetween(3,6))  – selects only values between 3 and 6.
// arr.filter(inArray([1,2,3]))  – selects only elements matching with one of the
// members of  [1,2,3] .
// For instance:
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let inBetween = (a, b) => {
//   return function (x) {
//     return x >= a && x <= b;
//   };
// };
// bu yerda x hozir index bo'lib ishlayabdi
// console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
// let inArray = (arr) => {
//   return function (x) {
//     return arr.includes(x);
//   };
// // };

//bu yerda ham x index sifatida ishlayabdi
//e'tibolri jihati lexical recorddagi x berilgan arrayning indexi bo'lib ishlaydi ayni elemntning o'zi emas
// console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

//Exercise 6

// Sort by field
// importance: 5
// We’ve got an array of objects to sort:

// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" },
// ];
//   The usual way to do that would be:
// by name (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);

// // by age (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);
// Can we make it even less verbose, like this?
// users.sort(byField('name'));
// So, instead of writing a function, just put  byField(fieldName) .
// Write the function  byField  that can be used for that.

// let byField = (type) => {
//   return function (a, b) {
//     return a[`${type}`] - b[`${type}`];
//   };
// };
//bu yterda byfield functioniga berilgan type o'zgaruvchisi function call qilinganda 2 chi inner functionning o'zgaruvchilari arrayning sort qilinadigan 2 ta first va second elemntiga aylantirdi type orqali esa shu comparison qilinayitgan elemnt onject propertysi bo'ldi
// console.log(users.sort(byField("name")));
// console.log(users.sort(byField("age")));

//Exercise 7

// Army of functions
// importance: 5
// The following code creates an array of  shooters .
// Every function is meant to output its number. But something is wrong…

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function () {
      // shooter function
      console.log(j); // should show its number
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();
console.log(army);
//bu yerda ishlamayotganini sababi let i tashqi o'zgaruvxhi bo'lgani sababli while i ning qiymatini olib loopni tugatib qo'yyapti va eng oxirgi qiymatni qaytarib beryapti
console.log(army[0]()); // the shooter number 0 shows 10
console.log(army[5]()); // and number 5 also outputs 10...
// ... all shooters show 10 instead of their 0, 1, 2, 3...

//   Why all shooters show the same? Fix the code so that they work as intended.
