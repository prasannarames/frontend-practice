/*   
   1) Write a program to user input a number
   2) Print the numbers from one to the number user entered
   3) However for the multiples of 3, the program has to print the word "fizz" instead of that number
   4) And for the multiples of 5 print buzz
   5) For both 3 and 5, print fizzbuzz

*/

let answer = 25;

for(let i=1; i<=answer; i++){
    if(i%3===0 && i%5===0){
        console.log("fizzbuzz");
    }else if (i%3===0) {
        console.log("fizz");
    } else if (i%5===0){
        console.log("buzz");
    } else{
        console.log(i);
    }
}
