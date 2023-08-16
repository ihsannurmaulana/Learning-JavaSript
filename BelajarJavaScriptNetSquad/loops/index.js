const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
];
// Copy countries array(Avoid mutation)
console.log("Number 1");
const countriesCopy = [...countries];
console.log(`countriesCopy: ${countriesCopy}`);

// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
const sortedCountries = [...countries].sort();
console.log("Number 2");
console.log(`sortedCountries: ${sortedCountries}`);

// Sort the webTechs array and mernStack array
const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
]; 
const mernStack = ["MongoDB", "Express", "React", "Node"];

console.log("Number 3");
const sortedWebTechs = [...webTechs].sort();
console.log(`sortedWebTechs: ${sortedWebTechs}`);
const sortedMernStack = [...mernStack].sort();
console.log(`sortedMernStack: ${sortedMernStack}`);

// Number 4
// Extract all the countries contain the word 'land' from the countries array and print it as array
console.log("Number 4");
const landCountries = countries.filter((country) => country.includes("land"));
console.log(`landCountries: ${landCountries}`);

// Number 5
// Find the country containing the hightest number of characters in the countries array
console.log("Number 5");
const longestCountry = countries.reduce((a, b) => a.length > b.length ? a : b);
console.log(`longestCountry: ${longestCountry}`);

// Number 6
// Extract all the countries containing only four characters from the countries array and print it as array
console.log("Number 6");
const shortCountries = countries.filter((country) => country.length === 4);
console.log(`shortCountries: ${shortCountries}`);

// Number 7
// Extract all the countries containing two or more words from the countries array and print it as array
console.log("Number 7");
const longCountries = countries.filter((country) => country.split(" ").length > 1);
console.log(`longCountries: ${longCountries}`);

// Number 8
// Reverse the countries array and capitalize each country and stored it as an array
console.log("Number 8");
const reversedCountries = [...countries].reverse();
const capitalizedCountries = reversedCountries.map((country) => country.toUpperCase());
console.log(`capitalizedCountries: ${capitalizedCountries}`);



