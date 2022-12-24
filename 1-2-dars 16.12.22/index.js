///=======
let name = "Ilya";
// alert(`alert ${1}`);  //alertda 1
// alert(`alert ${name}`);  // alertda Ilya
// alert(`alert ${Ilya223}`); // Ilya223 not defined(Reference error)
//======
let a = 2;
let x = 1 + (a *= 2); //x=1+2*a=5
console.log(x); //5
let str1 = "" + 1 + 0; //10  String
console.log(str1); //10
console.log(typeof str1); //string
let str2 = "" - 1 + 0; //-1 number
console.log(str2); //-1
console.log(typeof str2); // number
let bool1 = false,
    bool2 = true;
console.log(10 * bool2 + bool1); // 1 number 10 number
console.log(6 / "3"); // 2 number
console.log("2" * "3"); // 6 number
console.log(4 + 5 + "px"); // 9px string
console.log("$" + 4 + 5); // $45 string
console.log("4" - 2); //2 string
let size = "4px",
    height = 2,
    answer = size - height;
console.log(answer); //NaN
console.log(typeof answer); //numnber
console.log("-9" + 5); //-95 String
console.log("-9" - 5); // -14 Number
console.log(null + 1); //1 number
console.log(undefined + 1); //NaN number
console.log("0" == true); //false
let cond = (year = 2015);
console.log(cond); //2015
console.log(year); //2015
console.log(cond == year); //true

//======
console.log(5 > 4); //true
console.log("apple" > "pineapple"); //false
console.log("2" > "12"); //true because ASCII 2 Decimal ==50 1 Decimal==49 50>49 whatis decimal ? decimal is 16 bit coding. JavaScript worked Decimal system.so it is data  to comparison decimal
console.log(undefined == null); //true
console.log(undefined === null); //false
console.log("\n0\n" == null); //false whatis "\n0\n" . it is equal to
//
//0
//    so it is number 0.o is number  null object so  it is false
console.log(+"\n0\n" == null); // false
console.log("\n0\n"); // raw 0 raw
console.log(!"hey"); // false
console.log(typeof !"hey"); // boolean

//=========
let nameForTasks = document.querySelector("#name");
let namePrompt = prompt("What Is Your Name ?", "");
nameForTasks.innerHTML =
    "OK." +
    " Your name is " +
    namePrompt.charAt().toUpperCase() +
    namePrompt.slice(1); // namePrompt=alex          Answer:OK.Your Name is Alex
//=====
if ("0") {
    alert("Hello");
} // Web Page  appears alert , because "0" isn't empty string.it is true value
//======
let askName = prompt("What is the “official” name of JavaScript ? ", "");
if (askName == "ECMAScript") {
    alert("Right!!!");
} else {
    alert("You don't know ?   \n It is ECMAScript.");
} // Web Page appears if askname =ECMAScript  ECMAScript ,else  You don't know ?   \n It is ECMAScript.

//=====