let name = prompt('enter a name'); //fun fact! this is a variable!!!!!!!!!!!!!!!//
let month = prompt('enter a month');
let day = Number(prompt('enter a number between 1-28'));
let year = Number(prompt('enter a year'));
let meal = prompt('enter breakfast, lunch, or dinner');
let food = prompt('enter a questionable food');
let price = Number(prompt('enter a number between 8-32'));
let days = Number(prompt('enter a number'));
let tax = price * 0.06625;
let newPrice = Number(price + tax);
newPrice = newPrice.toFixed(2); //fun fact! this makes the newPrice varible rounded to the hundreths place!//
let emotion = prompt('enter an emotion');
let years = Number(prompt('enter a number'));
let oldBalance = newPrice-1;
let interest = oldBalance * 0.1849 * years;
let newBalance = interest + oldBalance;
newBalance = newBalance.toFixed(2);
let amountFood = Math.floor(newBalance / newPrice); //fun fact! Math.floor rounds the output number down!//
let leftover = newBalance % newPrice; //fun fact! this calculates how many times newPrice goes into newBalance then outputs the remainder!//
leftover = leftover.toFixed(2);








let story = `It's ${month +' '+ day +', '+' '+ year}, and ${name} is in a gas station. They are buying ${meal} for the next ${days} days. What do they buy? Why, ${food} of course!
The price of the ${food} was ${price} dollars. At the register, the total comes out to be ${newPrice} dollars when accounting for the ever-terrible U.S.
sales tax. ${name} was so ${emotion} at the sight of this absurd number that they blacked out. They wake up in a sewer and they check their phone. 
They realize they have been asleep for ${years} years. This is great news because of bank interest in which their bank account, which had ${oldBalance} dollars before, 
now has ${newBalance} dollars in it, which means they can afford ${amountFood} of ${food} and still have ${leftover} dollars left!`;
//no//































/* JAVASCRIPT MAD LIBS — FULL-BLOCK STARTER
   Write your OWN prompt questions and story. This file deliberately does not contain a completed answer.
   Keep your JavaScript here, not inside index.html.
*/

// PART 1 — INPUTS AND VARIABLES
// TODO: Ask for AT LEAST 6 words/text responses and 2 numbers with prompt().
// TODO: Save all responses in meaningfully named variables using let or const.
// Hint: let animal = prompt("Enter an animal:");
// Hint: let age = Number(prompt("Enter an age:"));

// PART 2 — DATA TYPES
// TODO: Declare a real Boolean: const isRidiculous = true; (true is NOT "true").
// TODO: Log typeof for a string, a number and a Boolean with labels.
// Hint: console.log("Animal type:", typeof animal);

// PART 3 — VARIABLE CHANGES AND CONCATENATION
// TODO: Reassign one let variable after its first value (use the updated value).
// TODO: Combine a quoted string and a variable with +; show the result.
// Hint: let message = "Meet " + animal;

// PART 4 — MATH OPERATORS
// TODO: Use ALL six operators with numeric values: +  -  *  /  %  **
// TODO: Store each result in a clearly named variable.
// TODO: Use at least TWO math results in your final story.
// NOTE: prompt() returns text; use Number(...) before doing math. Avoid division by zero.

// PART 5 — STORY (TEMPLATE LITERAL)
// TODO: Build one original story with BACKTICKS and ${variableName}.
// TODO: Include ALL eight prompt responses, plus at least two math results.
// Hint (not a whole story): let story = `Once, ${animal} arrived...`;

// PART 6 — DISPLAY ON THE WEBPAGE
// TODO: Uncomment and complete the line below once your story variable exists.
document.getElementById("madlib-output").innerHTML = story;

// FINAL: Add at least three meaningful comments describing your code.
// TEST: Try TWO sets of answers and check the browser console for errors.
