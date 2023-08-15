let numbers = [1, 1, 2, 3, 5, 8, 13, 21];
let searchNumber = 13;
let isFound = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === searchNumber) {
    isFound = true;
    break;
  }
}

if (isFound) {
  console.log("Angka 13 ditemukan.");
} else {
  console.log("Angka 13 tidak ditemukan.");
}
