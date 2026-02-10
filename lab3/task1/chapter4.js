let message;

message = 'Hello'; // store the string 'Hello' in the variable named message
alert(message); // shows the variable content

let user = 'John', age = 25, aMessage = 'Hello';

//older js
var message1 = 'Hello';
message1 = 'World!'; // value changed


let hello = 'Hello world!';
// copy 'Hello world' from hello into message
message = hello;

/*There are two limitations on variable names in JavaScript:
The name must contain only letters, digits, or the symbols $ and _.
The first character must not be a digit. */
let userName;
let test123;

let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3


//Examples of incorrect variable names:

let 1a; // cannot start with a digit

let my-name; // hyphens '-' aren't allowed in the name

//Non-Latin letters are allowed, but not recommended

let имя = '...';
let 我 = '...';

let let = 5; // can't name a variable "let", error!
let return = 5; // also can't name it "return", error!


// note: no "use strict" in this example
num = 5; // the variable "num" is created if it didn't exist

"use strict";
num = 5; // error: num is not defined

//Constants
const myBirthday = '18.04.1982';
myBirthday = '01.01.2001'; // error, can't reassign the constant!


//There is a widespread practice to use constants as aliases for difficult-to-remember values that are known before execution.
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00


//Task
let admin, name;
name = "John";
admin = name;
alert( admin ); //"John"

let planetName = "Earth";
let userName = "Nurzhan";

const BIRTHDAY = '18.04.1982'; // make birthday uppercase?
const AGE = someCode(BIRTHDAY); // make age uppercase?