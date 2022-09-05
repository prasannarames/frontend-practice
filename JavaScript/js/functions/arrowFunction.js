// const greet = function(){
//     return "hello, world";
// };

// const greet = () => "hello,world";
// const ans = greet();
// console.log(ans);


// let arr;
// let  modify = array => {
//     for (let i = 2; i < array.length; i++) { 
//          arr = array[i]
//       if(arr % i === 0) return false; 
//      }
//     return arr > 1; 
// }
  
//   console.log(modify([1, 2, 3, 4, 5]));  
 

function isPrime(n) {

    if(n == 0 || n == 1) {
    
        return n + 1;
    
    }
    
    for(let i = 2 ; i*i <= n ; i++) {
    
        if(n%i == 0) {
    
            return n + 1;
    
        }
    
    }
    
    return n * 2;
}
console.log(isPrime([1, 2, 3, 4, 5, 6]))

    