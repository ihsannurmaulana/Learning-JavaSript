// Number 1
// Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
// function userIdGeneratedByUser() {
//     var numChars = prompt("Enter the number of characters:");
//     var numIds = prompt("Enter the number of IDs to generate:");

//     var ids = [];
//     for (var i = 0; i < numIds; i++) {
//       var id = '';
//       for (var j = 0; j < numChars; j++) {
//         var randomChar = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
//         id += randomChar;
//       }
//       ids.push(id);
//     }
  
//     return ids;
// }

// var generatedIds = userIdGeneratedByUser();
// console.log("Number 1");
// console.log(generatedIds);

// Number 2
// Write a function name rgbColorGenerator and it generates rgb colors.
function rgbColorGenerator() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
console.log("Number 2");
console.log(rgbColorGenerator());

// Number 3
// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array
function arrayOfHexaColors() {
    var colors = [];
    for (var i = 0; i < 10; i++) {
        colors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    }
    return colors;
}
console.log("Number 3");
console.log(arrayOfHexaColors());

// Number 4
// Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function arrayOfRgbColors() {
    var colors = [];
    for (var i = 0; i < 10; i++) {
        colors.push(`rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`);
    }
    return colors;
}
console.log("Number 4");
console.log(arrayOfRgbColors());

// Number 5
// Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function convertHexaToRgb() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
console.log("Number 5");
console.log(convertHexaToRgb());

