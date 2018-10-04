//Yep. It's JavaScript

console.log('Hello JavaScript, what is up.')

//hello.py
//Getting input


//String interpolation
// and camelCase
// var promptText =('What is your name?');
// var userName = prompt(promptText);


// //uses string concatenation
// var greeting = 'Hello ' + userName + '!';
// console.log(greeting);


// using let and const
// Rule of thumb: use const until you get an error
// const promptText = ('What is your name?');
// let userName = prompt(promptText);
// userName = userName + ' is cool';


// // string interpolation
// // 1. Replace quotes with brackets 
// // 2. Remove the + signs
// // 3. Wrap your variables in ${} 
// const greeting = `Hello , ${userName}!`;
// console.log(greeting)

// madlib.py js version

// Hard-coding instead of prompting
// because in real life, when you want
// user input, you'll create an HTML form.

const name = `Isaac Fonseca`;
const subject = `feline husbandry`;

//backticks let you do linebreaks!
const finaltext = `${name}'s favorite subject in school is ${subject}.

How lame.
`;

// Optionally, you can use \n for linebreaks

console.log(finaltext)





// Start with a hard-coded value
// Until you know your program works.
// Then switch to prompting the user.

// const theDay = prompt ("Day (0-6)?")

const theDay =  0;
let dayname = '';

//You must use parentheses for your condition!!
if (theDay == 0) { //And curly braces!
dayName = 'Sunday';

}

//The body of an if statement
//is surrounded by curly braces.
//And does not require a semi-colon after the curly braces
console.log(dayName);