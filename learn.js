//Single line note

/*Multi  line notes
for when 
entire block of code
are noted*/

//Generating plain text with no spaces
console.log(23);

//Generating plain text with spaces etc. 
console.log('This is how to print multiple words, phrases or numbers with complex data');


/*Arithmetic Operators
    Add: +
    Subtract: -
    Multiply: *
    Divide: /
    Remainder: %*/
console.log(3 + 5) //prints 8
console.log(5 - 1); // Prints 4
console.log(4 * 2); // Prints 8
console.log(9 / 3); // Prints 3

//If we wanted to print the characters 3 + 4, we would wrap them in quotes and print them as a string.
console.log('3 + 5');


//String Concatenation
//appending one string to another
console.log('hi' + 'ya'); //prints 'hiya'
console.log('I love to ' + 'code.') // Prints 'I love to code.' - notice space added at end of string 1
console.log('front ' + 'space');  // Prints 'front space'
console.log('back' + ' space');  // Prints 'back space'
console.log('no' + 'space');  // Prints 'nospace'
console.log('middle' + ' ' + 'space');  // Prints 'middle space'


//Properties
/*When you introduce a new piece of data into a JavaScript program, 
the browser saves it as an instance of the data type. All data types have access to specific 
properties that are passed down to each instance. */
console.log('Hello' .length); // Prints 5
console.log('Teaching the world how to code' .length); //prints 30


//Methods
//Actions we can preform
/*Data types have access to specific methods that allow us to handle instances of that data type. 
JavaScript provides a number of string methods.
We call, or use, these methods by appending an instance with:
    a period (the dot operator)
    the name of the method
    opening and closing parentheses*/
console.log('hello'.toUpperCase()); // Prints 'HELLO'
console.log('Hey'.startsWith('H')); // Prints true
console.log('    Remove whitespace   ' .trim()); //Prints 'Remove whitespace'

//JS list of strings: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


//Built-in Objects
console.log(Math.random()); // Prints a random number between 0 and 1
//This method returns a random number between 0 (inclusive) and 1 (exclusive).
Math.random() * 50; //To generate a random number between 0 and 50
//The example above will likely evaluate to a decimal.
Math.floor(Math.random() * 50); //Math.floor() takes a decimal number, and rounds down to the nearest whole number.
console.log(Math.floor(Math.random() * 50)); // Prints a random whole number between 0 and 50
console.log(Math.ceil(43.8)); //returns the smallest integer greater than or equal to a decimal number.


//VARIABLES
//may begin with any symbol or letter but not a number

//Variable: var
/*Variable names cannot start with numbers.
Variable names are case sensitive, so myName and myname would be different variables. It is bad practice to 
create two variables that have the same name using different cases.
Variable names cannot be the same as keywords.*/
var myName = 'Dani';
console.log(myName); // Output: Dani
//variable numbers do not require ''


//Variable: let
//signals that the variable can be reassigned a different value
let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito
//using let (and even var) is that we can declare a variable without assigning the variable a value
let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350

let bootcamp = "App Academy";
console.log(bootcamp); // 'App Academy'
let birthYear = 2012;
console.log(birthYear); // 2012

//Manipulating variables
let num = 42;
console.log(num + 8); // => 50
console.log(num); // => 42
num = num + 10;
console.log(num); // => 52

//Variable: const
//cannot be reassigned because it is constant
//must be assigned a value when declared
const myName = 'Gilberto';
console.log(myName); // Output: Gilberto

//Assignment Shorthand
let number = 0;
number += 10; // equivalent to number = number + 10
number -= 2; // equivalent to number = number - 2
number /= 4; // equivalent to number = number / 4
number *= 7; // equivalent to number = number * 7
console.log(number); // 14

let year = 3004;
year++;
console.log(year); // 3005
year--;
console.log(year); // 3004

//Mathematical Assignment Operators
let w = 4;
w = w + 1;
console.log(w); // Output: 5
//or
let r = 4;
r += 1;
console.log(r); // Output: 5
//or
let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15
//or
let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100
//or
let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4


//The Increment ++ and Decrement -- Operator
let a = 10;
a++;
console.log(a); // Output: 11

let b = 20;
b--;
console.log(b); // Output: 19

//NUMBERS
console.log(2 + 3); // => 5
console.log(42 - 42); // => 0
console.log(-4 * 1.5); // => -6
console.log(25 / 8); // => 3.125
console.log(5 * 3 + 2); // => 17
console.log(2 + 3 * 5); // => 17
console.log((2 + 3) * 5); // => 25

//The remainder operator MODULO
//remainder that results from a division
console.log(10 % 3); // => 1
console.log(14 % 5); // => 4
console.log(20 % 17); // => 3
console.log(18 % 6); // => 0
console.log(7 % 9); // => 7
console.log(7 % 10)// => 7

// modulo has precedence over addition
console.log(4 + 12 % 5); // => 6
console.log((4 + 12) % 5); // => 1

//NaN
//Not a Number
let numb;
console.log(numb + 3); // NaN

//STRINGS
//represent textual data
//always wrapped in '' or ""

// valid strings
'Shakespeare wrote, "To be or not to be"';
"That's a great string";

// invalid string
//'That's a bad string'

//Calculating length
console.log("ramen".length); // => 5
console.log("go home!".length); // => 8
console.log("".length); // => 0

//Indexing a string
//warped in [] 
//starts from 0
console.log("bootcamp"[0]); // => 'b'
console.log("bootcamp"[1]); // => 'o'
console.log("bootcamp"[2]); // => 'o'
console.log("bootcamp"[3]); // => 't'
console.log("bootcamp"[7]); // => 'p'
console.log("bootcamp"[10]); // => undefined
console.log("bootcamp"[-3]); // => undefined

//Using indexOf
console.log("bagel".indexOf("b")); // => 0
console.log("bagel".indexOf("a")); // => 1
console.log("bagel".indexOf("l")); // => 4
console.log("bagel".indexOf("z")); // => -1
/*If we search for a character that appears more than once in a string, 
indexOf will return the index of the first occurance of that character.   */

//String Concatenation with Variables
//The + operator can be used to combine two string values even if those values are being stored in variables
let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.');  // Output: 'I own a pet armadillo.'

let favoriteAnimal = ' Dog';
console.log('My favorite animal:' + favoriteAnimal); //Output: 'My favorite animal: Dog'

console.log("hello" + "world"); // => 'helloworld'
console.log("goodbye" + " " + "moon"); // => 'goodbye moon'

//String Interpolation
// insert, or interpolate, variables into strings using template literals
const myBet = 'armadillo';
console.log(`I own a pet ${myBet}.`); // Output: I own a pet armadillo.

var myName = 'Dani';
var myCity = 'Kempton Park';
console.log(`My name is ${myName}.My favorite city is ${myCity}.`); //Output: 'My name is Dani.My favorite city is Kempton Park.'


//VARIABLE
//typeof operator
//operator checks the value to its right and returns, or passes back, a string of the data type
const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string

const unknown2 = 10;
console.log(typeof unknown2); // Output: number

const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean


//Conditional Statements
/*  if, else if, and else statements
    comparison operators
    logical operators
    truthy vs falsy values
    ternary operators
    switch statement  */

//If Statement
if (true) {
    console.log('This message will print!'); 
  } // Prints: This message will print!

//If...Else Statements
if (false) {
    console.log('The code in this block will not run.');
  } else {
    console.log('But the code in this block will!');
  } // Prints: But the code in this block will!


  //Comparison Operators
  /*    -Less than: <
        -Greater than: >
        -Less than or equal to: <=
        -Greater than or equal to: >=
        -Is equal to: ===
        -Is not equal to: !==  */
10 < 12 // Evaluates to true
'apples' === 'oranges' // false

let hungerLevel = 7;
if (hungerLevel > 7) {
  console.log('Time to eat!');
} 
else {
  console.log('We can eat later!');
}; //Prints 'We can eat later!'

//Logical Operators
/*  -the and operator (&&)
    -the or operator (||)
    -the not operator, otherwise known as the bang operator (!) */
if (stopLight === 'green' && pedestrians === 0) {
    console.log('Go!');
    } else {
    console.log('Stop');
    } 

if (day === 'Saturday' || day === 'Sunday') {
    console.log('Enjoy the weekend!');
    } else {
    console.log('Do some work.');
    }

let excited = true;
console.log(!excited); // Prints false
    
let sleepy = false;
console.log(!sleepy); // Prints true
    
let mood = 'sleepy';
let tirednessLevel = 6;
if (mood === 'sleepy' && tirednessLevel > 8){
  console.log('time to sleep');
} else {
  console.log('not bed time yet')
}; //Prints 'not bed time yet'

//Truthy and Falsy
let myVariable = 'I Exist!';

if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
} /* The code block in the if statement will run because myVariable has a truthy value; 
even though the value of myVariable is not explicitly the value true, when used in a boolean 
or conditional context, it evaluates to true because it has been assigned a non-falsy value
    -0
    -Empty strings like "" or ''
    -null which represent when there is no value at all
    -undefined which represent when a declared variable lacks a value
    -NaN, or Not a Number  */
let numberOfApples = 0;
if (numberOfApples){
    console.log('Let us eat apples!');
} else {
    console.log('No apples left!');
}  // Prints 'No apples left!'

let wordCount = 7;
if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}
let favoritePhrase = '';
if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
} //Prints 'Great! You've started your work!
           //This string is definitely empty.

//BOOLEAN DATA
//Only 2 types: True and False

//Logical Operators
  //! (not)
console.log(!true); // => false
console.log(!false); // => true
console.log(!!false); // => false
  //&& (and)
console.log(false && false); // => false
console.log(false && true); // => false
console.log(true && false); // => false
console.log(true && true); // => true
  //|| (or)
console.log(false || false); // => false
console.log(false || true); // => true
console.log(true || false); // => true
console.log(true || true); // => true

//Logical order of operations
//JavaScript will evaluate ! then && then ||.
console.log(true || true && false);    // => true
console.log(false && !(false || true)); // => false


//De Morgan's Law
/*!(A || B) is equivalent to !A && !B
!(A && B) is equivalent to !A || !B */

//FUNCTIONS
//procedure of code that will run when called

//Writing functions
  /*The name of the function.
  A list of parameters to the function, enclosed in parentheses (( )).
  The code to be run when this function is run, enclosed in curly braces ({ }). */

//Function declaration
function average(number1, number2) {
  return (number1 + number2) / 2;
}

//Invoking or calling a function
//passing arguments to the function.
// Function definition
function average(number1, number2) {
  return (number1 + number2) / 2;
}
// This function call passes the arguments 10 and 16.
average(10, 16)  // Returns 13

//Calling functions
function callMe() {
  console.log("Second!");
  console.log("Third!");
}

console.log("First!");
callMe();
console.log("Fourth!");
// Running this file will print these statements in this order:
// "First!"
// "Second!"
// "Third!"
// "Fourth!"

//Returning a value
//Every function in JavaScript returns undefined unless otherwise specified.
function average(number1, number2) {
  return (number1 + number2) / 2;
}

const result = average(10, 16);   // The function call returns 13,
                                  // so the result variable is set to 13.

// We can check what a function returns by printing its result:
console.log(result);            // Prints 13

// Alternatively, we can print the function invocation:
console.log(average(10, 16));   // Prints 13

//any code after a return will not be executed!
function average(number1, number2) {
  let sum = number1 + number2;
  return sum;
  // Anything under the `return sum` statement will NOT be executed.
  console.log("this will not run");
  return false;
}
average(2, 7); // Returns 9


