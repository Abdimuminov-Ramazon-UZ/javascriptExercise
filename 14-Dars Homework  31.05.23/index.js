//Exercise 1
// Filter unique array members
// importance: 5
// Let  arr  be an array.
// Create a function  unique(arr)  that should return an array with unique items of  arr .
// For instance:
// P.S. Here strings are used, but can be values of any type.
// P.P.S. Use  Set  to store unique values.
// let values = [
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
// let x = new Set();
// x.add(values);
// console.log(x);
// function unique(arr) {
//   return Array.from(new Set(arr));
// }

// console.log(unique(values));

//Exercise 2
// Filter anagrams
// importance: 4
// Anagrams   are words that have the same number of same letters, but in different order.
// For instance:
// Write a function  aclean(arr)  that returns an array cleaned from anagrams.

// alert( unique(values) ); // Hare, Krishna, :-O
// nap - pan
// ear - are - era
// cheaters - hectares - teachers
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(arr.sort((a, b) => b - a));

// alert(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"

function aclean(arr) {
  let map = new Map();
  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("");

    map.set(sorted, word);
  }
  return Array.from(map.values());
}
console.log(aclean(arr));

//Exercise 3
//Iterable keys
// importance: 5
// We want to get an array of  map.keys()  and go on working with it (apart from the map itself).
// But there’s a problem:
// let map = new Map();

// map.set("name", "John");

// let keys = map.keys();

// // Error: keys.push is not a function
// keys.push("more");
// Why? How can we fix the code to make  keys.push  work?
// let map = new Map();

// map.set("name", "John");

// // let keys = [...map.keys()]//first way  from object to array because Set don't iterable
// let keys = Array.from(map.keys());//second way from Set to Array
// console.log(keys);
// console.log(keys.push("more"));
// console.log(keys);

//Exercise  4
// Store "unread" flags
// importance: 5
// There’s an array of messages:
// let messages = [
//   { text: "Hello", from: "John" },
//   { text: "How goes?", from: "John" },
//   { text: "See you soon", from: "Alice" },
// ];
// Your code can access it, but the messages are managed by someone else’s code. New
// messages are added, old ones are removed regularly by that code, and you don’t know the
// exact moments when it happens.
// Now, which data structure you could use to store information whether the message “have been
// read”? The structure must be well-suited to give the answer “was it read?” for the given
// message object.P.S. When a message is removed from  messages , it should disappear from your structure as
// well.
// P.P.S. We shouldn’t modify message objects directly. If they are managed by someone else’s
// code, then adding extra properties to them may have bad consequences.

// let readMessages = new WeakSet();
// for (let val of messages) {
//   readMessages.add(val);
// }
// let question = "was it read?",
//   value = messages[0];

// question =
//   "was it read?" && readMessages.has(value)
//     ? console.log("read") && readMessages.shift(value)
//     : console.log("Not read");
// // readMessages.add(messages[0]);
// // readMessages.add(messages[1]);
// // readMessages.add(messages[2]);
// console.log(readMessages.size);
// // answer: was the message[0] read?
// console.log("Read message 0: " + readMessages.has(messages[0])); // true

// messages.shift();

// let isRead = Symbol("isRead");
// messages[0][isRead] = true;

//Exercise 5
// Store read dates
// importance: 5
// There’s an array of messages as in the previous task. The situation is similar.
let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

// The question now is: which data structure you’d suggest to store the information: “when the
// message was read?”.
// In the previous task we only needed to store the “yes/no” fact. Now we need to store the date
// and it, once again, should disappear if the message is gone

let readMessages = new WeakMap();
for (let val of messages) {
  readMessages.set(val, new Date());
}
