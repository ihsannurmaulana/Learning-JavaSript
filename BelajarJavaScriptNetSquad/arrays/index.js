// number 1
console.log("Number 1");
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
const sortAges = ages.sort();
console.log(sortAges);
let minAge = sortAges[0];
let maxAge = sortAges[sortAges.length - 1];
console.log(`Min age is ${minAge} and max age is ${maxAge}`);

// Find the median age(one middle item or two middle items divided by two)
const medianAge =
  (sortAges[sortAges.length / 2] + sortAges[sortAges.length / 2 - 1]) / 2;
console.log(`Median age is ${medianAge}`);

// Find the average age(all items divided by number of items)
const averageAge = ages.reduce((a, b) => a + b, 0) / ages.length;
console.log(`Average age is ${averageAge}`);

// Find the range of the ages(max minus min)
const ageRange = Math.max(...ages) - Math.min(...ages);
console.log(`Age range is ${ageRange}`);

// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ];

// 1.Slice the first ten countries from the countries array
const tenCountries = countries.slice(0, 10);
console.log(tenCountries);

// Number 2
console.log("Number 2");
// Find the middle country(ies) in the countries array
let middleCountry = "";
if (countries.length % 2 === 0) {
  middleCountry = countries[countries.length / 2 - 1];
} else {
  middleCountry = countries[Math.floor(countries.length / 2)];
}
console.log(`Middle country is ${middleCountry}`);

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
const totalCountries = countries.length;
const middleIndex = Math.floor(totalCountries / 2);

let firstHalf, secondHalf;

if (totalCountries % 2 === 0) {
    firstHalf = countries.slice(0, middleIndex);
    secondHalf = countries.slice(middleIndex);
} else {
    firstHalf = countries.slice(0, middleIndex + 1);
    secondHalf = countries.slice(middleIndex + 1);
}

console.log("Number 3");
console.log("First Half:", firstHalf);
console.log("Second Half:", secondHalf);


