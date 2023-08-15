// Soal 1
let input = parseInt(prompt("Enter your age: "));
const yearsToWait = 18 - input;
if (input >= 18) {
    console.log("You are old enough to drive.");
} else {
    console.log(`You are left with ${yearsToWait} years to drive.`);
}

// Soal 2
let input1 = parseInt(prompt("Enter your age:"));
// Calculate the age difference
let ageDifference = input1 - 25;

// // Compare ages and provide output
if (25 > input1) {
    console.log("You are " + ageDifference + " years younger than me.");
} else if (25 < input1) {
    console.log("You are " + ageDifference + " years older than me.");
} else {
    console.log("We are of the same age.");
}

// Soal 3
let a = 10;
let b = 3;
let comparisonResult = a > b ? "a is greater than b" : "a is less than b";

console.log(comparisonResult);

// Soal 4
let input3 = parseInt(prompt("Enter a number: "));
if (input3 % 2 === 0) {
    console.log(`${input3} is an even number.`);
}else {
    console.log(`${input3} is an odd number.`);
}

// Soal 5
let input4 = parseInt(prompt("Enter a grade: "));

if (input4 >= 90 && input4 <= 100) {
    console.log("A");
} else if (input4 >= 70 && input4 <= 89) {
    console.log("B");
} else if (input4 >= 60 && input4 <= 69) {
    console.log("C");
} else if (input4 >= 50 && input4 <= 59) {
    console.log("D");
} else if (input4 >= 0 && input4 <= 49) {
    console.log("E");
} else {
    console.log("Invalid input");
}




