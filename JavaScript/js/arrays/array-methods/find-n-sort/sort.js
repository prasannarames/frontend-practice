// sort is 'destructive method' (it changes the original array)

// sorting strings
const names = ['kishore', 'hk', 'bb', 'surey', 'prasanna', 'ak'];
names.sort(); // converts names into alphabetical order
names.reverse(); // reverse the order
console.log(names);

// sorting numbers
const numbers = [20, 10, 5, 50, 60, 80, 100];

//numbers.sort(); // it does not consider number as a whole number, it only checks the first digit of the number
numbers.sort((a,b)=> b - a); // descending order
numbers.reverse();// reverse

console.log(numbers); 

// sorting complex arrays
const groceries = [
    {name: 'rice', price: 20},
    {name: 'soap', price: 30},
    {name: 'milk', price: 40},
    {name: 'paste', price: 35},
    {name: 'fruits', price: 55},
    {name: 'vegetables', price: 25},
];
// method one
// groceries.sort((a, b)=>{
//     if(a.price > b.price){
//         return -1;
//     } else if(b.price > a.price){
//         return 1;
//     } else{
//         return 0;
//     }
// });

// simplified method
groceries.sort((a,b)=> b.price - a.price);

// console.log("array of prices from low to high", groceries.reverse());
console.log("array of prices from high to low", groceries);