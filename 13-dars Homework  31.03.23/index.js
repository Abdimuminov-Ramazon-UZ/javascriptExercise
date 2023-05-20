//Exercise 1
// Destructuring assignment
// importance: 5
// We have an object:
// Write the destructuring assignment that reads:
// name  property into the variable  name .
// years  property into the variable  age .
// isAdmin  property into the variable  isAdmin  (false, if no such property)
// Here’s an example of the values after your assignment:
// let user = { name: "John", years: 30 };

// const moment = require("moment/moment");

// // your code to the left side:
// // ... = user

// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false
// let user = { name: "John", years: 30 };
// let { name, years, isAdmin = "false" } = user;
// console.log(name);
// console.log(years);
// console.log(isAdmin);

// The maximal salary

// There is a  salaries  object:
// Create the function  topSalary(salaries)  that returns the name of the top-paid person.
// If  salaries  is empty, it should return  null .
// If there are multiple top-paid persons, return any of them.
// P.S. Use  Object.entries  and destructuring to iterate over key/value pairs.
// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };
// function showSalary(s) {
//   let maxName = null;
//   max = 0;
//   for (let [name, value] of Object.entries(s)) {
//     if (max < value) {
//       max = value;
//       maxName = name;
//     }
//   }
//   return maxName;
// }
// console.log(showSalary(salaries));

// Exercise 3

// Create a  Date  object for the date: Feb 20, 2012, 3:12am. The time zone is local.
// Show it using  alert .
// let x = new Date(2013);
// console.log(x);
// let y = new Date(2013, 13, 40, 20, 55, 15, 100);
// console.log(y);
// let z = new Date();
// console.log(z.getTimezoneOffset());
// console.log(z);
// console.log(z.setDate(0));
// console.log(+z);
// console.log(z.getTime());

//Exercise 4
// Show a weekday

// Write a function  getWeekDay(date)  to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’,
// ‘TH’, ‘FR’, ‘SA’, ‘SU’.
// For instance:
// let date = new Date(2012, 0, 3);  // 3 Jan 2012
// alert( getWeekDay(date) );        // should output "TU"
// let date = new Date(2012, 0, 3);
// console.log(date.getDay());
// function getWeekDay(date) {
//   let nameWeekDay = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
//   let Day = date.getDay() - 1;
//   return console.log(nameWeekDay[Day]);
// }
// getWeekDay(date);

//Exercise 5
// Which day of month was many days ago?
// importance: 4
// Create a function  getDateAgo(date, days)  to return the day of month  days  ago from
// the  date .
// For instance, if today is 20th, then  getDateAgo(new Date(), 1)  should be 19th and
// getDateAgo(new Date(), 2)  should be 18th.
// Should work reliably for  days=365  or more:
// let date = new Date(2015, 0, 2);

// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
// P.S. The function should not modify the given  date .
// let date = new Date(2015, 0, 2);
// function getDateAgo(date, number) {
//   let dateCopy = new Date(date);
//   dateCopy.setDate(date.getDate() - number);
//   return dateCopy.getDate();
// }
// let date = new Date(2015, 0, 2);
// console.log(getDateAgo(date, 1));
// // console.log(date);
// console.log(getDateAgo(date, 2));
// console.log(getDateAgo(date, 365));

//Exercise 6
// European weekday
// importance: 5
// European countries have days of week starting with Monday (number 1), then Tuesday (number
// 2) and till Sunday (number 7). Write a function  getLocalDay(date)  that returns the
// “European” day of week for  date .
// let date = new Date(2012, 0, 3); // 3 Jan 2012
// // alert( getLocalDay(date) );       // tuesday, should show 2
// function getLocalDay(date) {
//   let nameWeekDay = ["SU", "MO", "TU", "WE", "TH", "FR", "SA", "SU"];
//   let day = date.getDay();
//   day === 0 ? day === 7 : (day = day);
//   return nameWeekDay[day] + "   " + day;
// }
// console.log(getLocalDay(date));

//Exercise 7
// Last day of month?

// Write a function  getLastDayOfMonth(year, month)  that returns the last day of month.
// Sometimes it is 30th, 31st or even 28/29th for Feb.
// Parameters:
// year  – four-digits year, for instance 2012.
// month  – month, from 0 to 11.
// For instance,  getLastDayOfMonth(2012, 1) = 29  (leap year, Feb).
// function getLastDayOfMonth(year, month) {
//   let date = new Date(year, month + 1);
//   return date.getUTCDate();
// }
// console.log(getLastDayOfMonth(2012, 1));

//Exercise 8
// How many seconds has passed today?

// Write a function  getSecondsToday()  that returns the number of seconds from the beginning
// of today.
// For instance, if now  10:00 am , and there was no daylight savings shift, then:
// The function should work in any day. That is, it should not have a hard-coded value of “today”.
// getSecondsToday() == 36000 // (3600 * 10)
// function getSecondsToday() {
//   let date = new Date();
//   return date.getSeconds() + date.getHours() * 3600 + date.getMinutes() * 60;
// }
// console.log(getSecondsToday());

//Exercise  9
// How many seconds till tomorrow?
// importance: 5
// Create a function  getSecondsToTomorrow()  that returns the number of seconds till
// tomorrow.
// For instance, if now is  23:00 , then:
// getSecondsToTomorrow() == 3600
// P.S. The function should work at any day, the “today” is not hardcoded.
function getSecondsToTomorrow() {
  let now = new Date(),
    tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1),
    diff = tomorrow - now;

  return Math.round(diff / 60);
}
console.log(getSecondsToTomorrow());
