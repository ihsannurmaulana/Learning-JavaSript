/*function countUniqueLetters(sentence) {
  // Convert the sentence to lowercase
  //   sentence = sentence.toLowerCase();
  // Create an empty object to store the unique letters
  let uniqueLetters = {};
  // Iterate through each letter in the sentence
  for (let i = 0; i < sentence.length; i++) {
    // If the letter has not been seen before, add it to the unique letters object
    if (!uniqueLetters[sentence[i]]) {
      uniqueLetters[sentence[i]] = true;
    }
  }
  // Return the number of unique letters
  return Object.keys(uniqueLetters).length;
}

console.log("Jumlah huruf yang ada adalah", countUniqueLetters("STRESS")); // output : 4
console.log("Jumlah huruf yang ada adalah", countUniqueLetters("SELASA"), "(SELA)"); // output : 4
console.log("Jumlah huruf yang ada adalah", countUniqueLetters("INTERNET"), "(INTER)"); // output : 5*/

const myFunc = (str) => {
  return new Set(str).size;
};
console.log("Jumlah huruf yang ada adalah ", myFunc("STRESS"));
