const skills = ['HTML', 'CSS', 'JavaScript', 'git', 'devtools', 'linux'];

const mixedDataTypes = ['hello', 'world', 45, 8.5, true,
{firstName : 'prasanna', lastName : 'ramesh'}, {skills: ['html', 'css', 'js']}
];

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

/* ex: 01

creating an empty array
method one: array constructor */

// const name = Array()
// console.log(name); // []

// const name = new Array()
// console.log(name); // []

/*
method two: square brackets
*/

// const name = []
// console.log(name); // []

/* ex: 02
declare an array with more than 5 number of elements
*/

// const skills = ['HTML', 'CSS', 'JavaScript', 'git', 'devtools', 'linux'];

// console.log(skills);

/* ex: 03
find the length of your array
*/

// console.log(skills.length); // 6

/* ex: 04
get the first, the middle and the last item of the array 
*/

// let firstItem = skills[0];
// let middleItem = skills[2];
// let lastItem = skills[5];
// console.log(firstItem,middleItem,lastItem);

/* ex: 05  
Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
*/

// console.log(mixedDataTypes.length);
// console.log(mixedDataTypes[6]);

/* ex: 06
Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
*/

// created at top

/* ex: 07  
Print the array using console.log()
*/

// console.log(itCompanies);

/* ex: 08  
Print the number of companies in the array
*/

// console.log(itCompanies.length); // 7

/* ex: 09
Print the first company, middle and last company
 */
/*
let firstCompany = itCompanies[0];
let middleCompany = itCompanies[3];
let lastCompany = itCompanies[6];

console.log(` first company : ${firstCompany}\n middle company : ${middleCompany}\n last company : ${lastCompany}`);
*/

/* ex: 10
Print out each company
 */

// console.log(itCompanies.join('\n'));

/*ex: 11
Change each company name to uppercase one by one and print them out
*/
/*
itCompanies[0] = 'FACEBOOK';
itCompanies[1] = 'GOOGLE';
itCompanies[2] = 'MICROSOFT';
itCompanies[3] = 'APPLE';
itCompanies[4] = 'IBM';
itCompanies[5] = 'ORACLE';
itCompanies[6] = 'AMAZON';

console.log(itCompanies.join('\n'));
*/

/* ex: 12
Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
 */

/* 
const addOn = ['are big IT companies'];
let sentence = itCompanies.concat(addOn).join(' ');
console.log(sentence);
*/
/*
itCompanies.push('are big it itCompanies.');
console.log(itCompanies.toString());
*/

/* ex: 13
Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
*/

/* 
if(itCompanies.includes('uber')){
    console.log('yes, uber exists');

}else{
    console.log('company not found');
}
*/

/* ex: 14
Filter out companies which have more than one 'o' without the filter method
*/

let sArray = itCompanies.toString();

if(sArray == 'o'){
    console.log(sArray);
}


