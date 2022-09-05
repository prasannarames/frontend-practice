let sellingPrice = 159;
let listingPrice = 859;
 
let discountPrice = ((listingPrice - sellingPrice) / listingPrice ) * 100;
let discountedPrice = Math.round(discountPrice);
console.log("the discountedprice is :" , discountedPrice,"% off");