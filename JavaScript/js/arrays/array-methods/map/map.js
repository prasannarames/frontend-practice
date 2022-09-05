// const prices = [20, 10, 30, 40, 50, 5, 25, 15];

// const priceChanges = prices.map(price=>{
//     return price / 2;
// });

// console.log(priceChanges, prices);



// question: change the array of products with half price discount for the products only with the pricing of above 30?
const products =[
        {name: 'rice', price: 20},
        {name: 'soap', price: 30},
        {name: 'milk', price: 40},
        {name: 'paste', price: 35},
        {name: 'fruits', price: 55},
        {name: 'vegetables', price: 25},
];

const priceUpdate = products.map(product=>{
    if (product.price >= 30){
        return {name: product.name, price: product.price / 2};
    } else {
        return product;
    };
});

console.log(priceUpdate);

