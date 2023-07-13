//Exercise 1
//
// Spy decorator
// importance: 5
// Create a decorator  spy(func)  that should return a wrapper that saves all calls to function in
// its  calls  property.
// Every call is saved as an array of arguments.
// For instance:

// function work(a, b) {
//   console.log(a + b); // work is an arbitrary function or method

//   return a + b;
// }
// console.log(work.calls);
// function spy(func) {
//   function wrapper(...args) {
//     wrapper.calls.push(args);
//     return func.apply(this, arguments);
//   }
//   wrapper.calls = [];
//   return wrapper;
// }
// work = spy(work);
// work(1, 2); // 3
// work(4, 5); // 9

// // for (let args of work.calls) {
// //   console.log("call:" + args.join()); // "call:1,2", "call:4,5"
// // }
// // P.S. That decorator is sometimes useful for unit-testing. Its advanced form is  sinon.spy  in
// // Sinon.JS   library.

//Exercise 2
// Delaying decorator
// importance: 5
// Create a decorator  delay(f, ms)  that delays each call of  f  by  ms  milliseconds.
// For instance:

// function f(x) {
//   console.log(x);
//   return x;
// }
// function delay(func, time) {
//   function wrapper(arg) {
//     setTimeout(() => {
//       return arg;
//     }, time);
//     return func.apply(this, arguments);
//   }
//   return wrapper;
// }
// //   return setTimeout(() => {
// //     return func;
// //   }, time);

// // create wrappers
// let f1000 = delay(f, 1000); //f100 ning argumenti wrapperning argumentiga teng bo'liub qoldi  apply orqali wrapper(arg) ga f1000 ning argumentini birlashtirdik
// let f1500 = delay(f, 1500);

// f1000("test"); // shows "test" after 1000ms
// f1500("test"); // shows "test" after 1500ms
// In other words,  delay(f, ms)  returns a "delayed by  ms " variant of  f .
// In the code above,  f  is a function of a single argument, but your solution should pass all
// arguments and the context  this

//Exercise 3
// Debounce decorator
// importance: 5
// The result of  debounce(f, ms)  decorator should be a wrapper that passes the call to  f  at
// maximum once per  ms  milliseconds.
// In other words, when we call a “debounced” function, it guarantees that all other future in the
// closest  ms  milliseconds will be ignored.
// For instance:
// function alert(x) {
//   return console.log(x);
// }
// function debounce(alert, time) {
//   function wrapper(args) {
//     if (args * 1000 < time) {
//       setTimeout(() => {
//         return console.log(args);
//       }, time);
//     }
//     return alert.apply(this, arguments);
//   }
//   return wrapper;
// }
// let f = debounce(alert, 1000);

// f(1); // runs immediately
// f(2); // ignored

// setTimeout(() => f(3), 100); // ignored ( only 100 ms passed )
// setTimeout(() => f(4), 1100); // runs
// setTimeout(() => f(5), 1500); // ignored (less than 1000 ms from the last run)
// In practice  debounce  is useful for functions that retrieve/update something when we know
// that nothing new can be done in such a short period of time, so it’s better not to waste
// resources.

// function debounce(f, ms) {
//   let isCooldown = false;

//   return function () {
//     if (isCooldown) return;

//     f.apply(this, arguments);

//     isCooldown = true;

//     setTimeout(() => (isCooldown = false), ms);
//   };
// }
// let f = debounce(alert, 1000);
// f(1); // runs immediately
// f(2); // ignored

// setTimeout(() => f(3), 100); // ignored ( only 100 ms passed )
// setTimeout(() => f(4), 1100); // runs
// setTimeout(() => f(5), 1500);

//Exercise  4
// Throttle decorator
// importance: 5
// Create a “throttling” decorator  throttle(f, ms)  – that returns a wrapper, passing the call to
// f  at maximum once per  ms  milliseconds. Those calls that fall into the “cooldown” period, are
// ignored.
// The difference with  debounce  – if an ignored call is the last during the cooldown, then it
// executes at the end of the delay.
// Let’s check the real-life application to better understand that requirement and to see where it
// comes from.
// For instance, we want to track mouse movements.
// In browser we can setup a function to run at every mouse movement and get the pointer
// location as it moves. During an active mouse usage, this function usually runs very frequently,
// can be something like 100 times per second (every 10 ms).
// The tracking function should update some information on the web-page.
// Updating function  update()  is too heavy to do it on every micro-movement. There is also no
// sense in making it more often than once per 100ms.
// So we’ll wrap it into the decorator: use  throttle(update, 100)  as the function to run on
// each mouse move instead of the original  update() . The decorator will be called often, but
// update()  will be called at maximum once per 100ms.
// Visually, it will look like this:
// 1. For the first mouse movement the decorated variant passes the call to  update . That’s
// important, the user sees our reaction to their move immediately.
// 2. Then as the mouse moves on, until  100ms  nothing happens. The decorated variant
// ignores calls.
// 3. At the end of  100ms  – one more  update  happens with the last coordinates.
// 4. Then, finally, the mouse stops somewhere. The decorated variant waits until  100ms
// expire and then runs  update  with last coordinates. So, perhaps the most important, the
// final mouse coordinates are processed.
// setTimeout( () => f(4), 1100); // runs
// P.S. Arguments and the context  this  passed to  f1000  should be passed to the original  f .
// setTimeout( () => f(5), 1500); // ignored (less than 1000 ms from the last run)
// A code example:

// function f(a) {
//   console.log(a);
// }

// // // f1000 passes calls to f at maximum once per 1000 ms
// let f1000 = throttle(f, 1000);

// f1000(1); // shows 1
// f1000(2); // (throttling, 1000ms not out yet)
// f1000(3); // (throttling, 1000ms not out yet)

// // // when 1000 ms time out...
// // // ...outputs 3, intermediate value 2 was ignored

// function throttle(func, ms) {
//   let isThrottled = false,
//     savedArgs,
//     savedThis;

//   function wrapper() {
//     if (isThrottled) {
//       // (2)
//       savedArgs = arguments;
//       savedThis = this;
//       return;
//     }

//     func.apply(this, arguments); // (1)

//     isThrottled = true;

//     setTimeout(function () {
//       isThrottled = false; // (3)
//       if (savedArgs) {
//         wrapper.apply(savedThis, savedArgs);
//         savedArgs = savedThis = null;
//       }
//     }, ms);
//   }

//   return wrapper;
// }
// console.log(f1000(1));
// console.log(f1000(2));

//Exercise  5
// Bound function as a method
// importance: 5
// What will be the output?
// function f() {
//   alert(this); // ?
// }
// // f();
// let user = {
//   g: f.bind(null),
// };

// user.g(); //consoleda circular chiqadi
// console.log(user.g());

//Exercise 6
// Second bind
// importance: 5
// Can we change  this  by additional binding?
// What will be the output?
// function f() {
//   alert(this.name);
// }

// f = f.bind({ name: "John" }).bind({ name: "Ann" });

// f();
// birinchi bind ishlaydi 2 chisi ishlamaydi

//Exercise 7

// Function property after bind
// importance: 5
// There’s a value in the property of a function. Will it change after  bind ? Why, elaborate?

function sayHi() {
  console.log(this.name);
}
console.log(sayHi());
sayHi.test = 5;
console.log(sayHi.test);
let bound = sayHi.bind({
  name: "John",
});
console.log(bound.test);
console.log(sayHi());

// console.log(bound.test); // what will be the output? why?

// sayHi();
//funksiya property si o'tmay qoladi chunki bound yangi function va
//function non primitive value va object bo'lgani uchun obektnbing boshqa propertylari kabi yangi functionga o'tmaydi

//Exercise 8

// Fix a function that loses "this"
// importance: 5
// The call to  askPassword()  in the code below should check the password and then call
// user.loginOk/loginFail  depending on the answer.
// But it leads to an error. Why?
// Fix the highlighted line for everything to start working right (other lines are not to be changed).

// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: "John",

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind());

//lexical environment user scopeninichida bo'lib u user objectining
//metodlarini saqlaydi ammo ular user scopedan chiqa olmaydi
//user dan chiqa olgan metodlar user objectidagi name propertysini bind qilinm,aganio uchun foydalana olmaydi
//name  - undefined bo'lib qoladi
