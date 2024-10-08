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


//Parameters and Arguments
//comma separated variables specified as part of a function's declaration
/*by defining parameters when we declare our function we are effectively 
setting accessible variables within the function:   */
function add(firstParameter, secondParameter) {
  console.log(firstParameter + secondParameter);
}
// the add function declares two parameters
//function add(1, 2); //=> 3

/*a function will not throw an error if the number of arguments passed during a 
function invocation is different than the number of parameters listed during 
function declaration  */
function add(firstParameter, secondParameter) {
  console.log(firstParameter + secondParameter);
}
add(1, 2, 17, 14); //=> 3
// this will ignore the 17 & 14
// the first two arguments passed in will be assigned to the first two parameters


//pass in less arguments then needed
function add(firstParameter, secondParameter) {
  console.log(firstParameter + secondParameter);
}
add(5); //=> NaN

//Naming the function
function testMe() {
  console.log("Test me pplease!")
}
//Calling/Invoking the function
testMe(); //prints "Tats me please"

//Functions return as 'undefined' by default
function addTwo (num1, num2) {
  num1 + num2;
} //undefined

function addTwo (num1, num2){
  return num1 + num2; //return tells it what to do with the code
}             //Code stops executing after the first return value
console.log(addTwo(1,3)) // prints 3

//self test
function goodbye(name) {
  return "Bye " + name + "." ;//own written test code
}
console.log(goodbye("Daniel")); // => "Bye Daniel."
console.log(goodbye("Mark")); // => "Bye Mark."
console.log(goodbye("Beyonce")); // => "Bye Beyonce."

function sayHello(name) {
  let msg = "Hello, " + name + ". How are you?";
  return msg;
}
console.log(sayHello("world")); //Hello, world. How are you?

function ageIs (age) {
    return "I am " + age + "-years old.";
}
console.log(ageIs("24")); //I am 24-years old.

function dogName (dog) {
    return "My dog's name is " + dog + ".";
}
console.log(dogName("Comet")) //My dog's name is Comet.

function averageOfTwo (num1, num2) {
  let sum = num1 + num2;
  let average = sum / 2;
  return average;
}
console.log(averageOfTwo(2, 2)) //2

//adding more functions 
function whisper (str) {
  let whisperedStr = str.toLowerCase();
  return whisperedStr
}
console.log(whisper("HELLO!!!")) //hello!!!


//CONTROL FLOW
//the order in which instructions are executed within a program
//The control structures within JavaScript allow the program flow to change within a unit of code or a function

//Conditional Statements
  // this is the test expression
  if (3 === 3) {
    // this is the then expression
    // this code will run if the above statement is true
    console.log("this is a three!");
  }

  function mathFun() {
    let x = 2 + 3;

    if (x === 3) {
      console.log("we have a 3");
    } else if (x === 4) {
      // this code will run if the above statement is true
      console.log("we have a 4");
    } else if (x === 5) {
      // this code will run if the above statement is true
      console.log("we have a 5");
    }
  };
  mathFun(); // Prints "we have a 5"


  function mathFun() {
    let x = 19;
    if (x === 3) {
      console.log("we have a 3");
    } else if (x === 4) {
      console.log("we have a 4");
    } else {
      console.log("I will return if everything above me is falsey!");
    }
  };
  mathFun(); // => "I will return if everything above me is falsey!"


//Mutually exclusive conditions
//DRY - don't repeat yourself!

function isFive(num) {
  if (num === 5){
      return True;
  } else {
      return false;
  }
}
console.log(isFive(9)); //prints false


//two ways to exectute 
function isOdd(num) {
  return (num / 2 !== 0); 
} 
console.log(isOdd(3)); //prints 'true'

function isOddConditional(num){
  if (num / 2 !== 0){
      return false;
  } else {
      return fase;
  }
}
console.log(isOddConditional(8)); //prints 'false'


//Looping
//loops will repeatedly execute a section of code while a condition is true

//while loops
let indexx = 0;//index is the traditional word for the variable that keeps track of how many times the loop has been run
// this is the condition that will be checked every time this loop is run
while (indexx < 10) {
  console.log("The number is " + indexx);
  // this is common shorthand for index = index + 1
  indexx++; // if we do not increase the index then our condition is always true
           // meaning this will run forever!
}

/*An iteration is the act of repeating a procedure, 
hence looping is an iterative technique*/
let array = [0, 1, 2]; //will do one loop for each digit in the Array
let indexc = 0;

while (indecx < array.length) {
  console.log(
    "Both the index and the current array position are " + array[indexc]
  );
  indexc++;
}

//for loops
  //usually used with an integer counter
//for (<initial expression>;<condition>;<loopEnd expression>)
  //The initial expression which will be run once at the beginning of the loop.
  /*The condition which is checked every time the loop is run. 
  If this condition is true the loop will run again. If this 
  condition is false the loop will end.*/
  //The loopEnd expression which will be run at the end of the loop before checking the condition again.
for (let index = 0; index < 10; index += 1) {
  // the code inside this block will run 10 times
}

//iterate through a string
let testString = "testing";
// We can use the testString's length as our condition!
// Since we know the testString's index starts at 0
// and our index starts at 0 we can access each letter:
for (let index = 0; index < testString.length; index += 1) {
  let letter = testString[index];
  console.log(letter);
}


//Translating From One Loop to Another
// these two do the exact same thing!
function forLoopDoubler (array) {
  // it is convention to shorten index to just i in most cases
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * 2;
  }
  return array;
};

function whileLoopDoubler (array) {
  let i = 0;
  while (i < array.length) {
    array[i] = array[i] * 2;
    i++;
  }
  return array;
};

forLoopDoubler([1, 2, 3]); // => [2,4,6]
whileLoopDoubler([1, 2, 3]); //=> [2,4,6]


//Log Between Challenge
/*Define a function logBetween(lowNum, highNum) that will print every number from lowNum to highNum, inclusive. 
Inclusive means that the range includes lowNum and highNum.
Hint: this function only needs to print using console.log it does not need to return.*/
function logBetween(lowNum, highNum) {
  for (let i = lowNum; i <= highNum; i += 1) {
    console.log(i);
  }
}
function logBetweenWhile(lowNum, highNum) {
  let i = lowNum;
  while (i <= highNum) {
    console.log(i);
    i++;
  }
}

/*Define a function fizzBuzz(max) that takes a number and prints every number from 0 to 
max (not inclusive) that is divisible by either 3 or 5, but not both. */
function fizzBuzz(max) {
  for (let i = 0; i < max; i += 1) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i);
    }
  }
}

function fizzBuzzWhile(max) {
  let i = 0;
  while (i < max) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i);
    }
    i++;
  }
}

function fizzBuzzNested(max) {
  for (let i = 0; i < max; i += 1) {
    if (i % 3 === 0) {
      if (i % 5 !== 0) {
        console.log(i);
      }
    } else if (i % 5 === 0) {
      console.log(i);
    }
  }
}



//ARRAYS
//store multiple values all within a single structure - like a list almost
//can hold strings, integers and even other arrays

//Using arrays
//we can use an array to contain all of the letters, and assign it to a single alphabet variable:
let alphabet = [
  "a", "b", "c", "d", "e", "f",
  "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r",
  "s", "t", "u", "v", "w", "x",
  "y", "z"
];

//Calculating the length of an array
console.log([4, 7, 9].length); // => 3
console.log([1, 2].length); // => 2
console.log([].length); // => 0

//Properly indexing an array
let numbersAndLetters = ["b", "z", 17, "cat"];

console.log(numbersAndLetters[0]); // => "b"
console.log(numbersAndLetters[1]); // => "z"
console.log(numbersAndLetters[2]); // => 17
console.log(numbersAndLetters[3]); // => "cat"

// Arrays always start at the index of 0
//indices should always be a number

//Containing data in arrays
let wackyArray = [2, 17, "apple", "cat", ["apple"]];
console.log(wackyArray[0]); // => 2
console.log(wackyArray[1]); // => 17
console.log(wackyArray[3]); // => "cat"
console.log(wackyArray[4]); // => ["apple"]

//indexOf
console.log([1, 3, 5, "apple", "jet"].indexOf(3)); // => 1
console.log([1, 3, 5, "apple", "jet"].indexOf(5)); // => 2
console.log([1, 3, 5, "apple", "jet"].indexOf("jet")); // => 4
// this won't be found in the array
console.log([1, 3, 5, "apple", "jet"].indexOf("potato")); // => -1

//Concatenation with arrays
//just a fancy word for joining things together into a single collection
console.log([1, 2, 3].concat([4, 5, 6])); // => [1, 2, 3, 4, 5, 6]

//Manipulating arrays
let arr = [1, 2, 3];
arr.push(4);
arr.push(5);//adding
console.log(arr);   // => [1, 2, 3, 4, 5]
arr.pop();//removing
console.log(arr);   // => [1, 2, 3, 4]

/*Write a function combineArray(array1, array2) that takes in two arrays of numbers and returns 
the two arrays combined into a single array. */
function combineArray(array1, array2){
  let newArray = array1.concat(array2);
  return newArray;
}
console.log(combineArray([1, 2], [3, 4])); //prints [ 1, 2, 3, 4 ]

/*Write a function doubler(numbers) that takes an array of numbers and returns a new 
array where every element of the original array is multiplied by 2 */
function doubler(numbers) {
  let doubledNums = [];

  let i = 0;
  while (i < numbers.length) {
    let oldNum = numbers[i];
    let newNum = oldNum * 2;
    // this step is important because concat does NOT change the original array
    doubledNums = doubledNums.concat(newNum);

    i += 1;
  }

  return doubledNums;
}

console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]

