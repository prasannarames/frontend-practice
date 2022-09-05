// filter out the numbers from an array which are greater than 20 ?

// const numbers = [10, 20, 30, 40, 50, 15, 25, 35, 5];

// const filteredNumbers = numbers.filter((num)=>{
//     return num > 20;

// });
// console.log(filteredNumbers);

const users =[
    {name: 'prasanna', prime: false},
    {name: 'kishore', prime: true},
    {name: 'hemanth', prime: true},
    {name: 'surey', prime: false}
];

// const primeUsers = users.filter((user)=>{
//     return user.prime; // or
const primeUsers = users.filter(user => user.prime);

console.log(primeUsers);

