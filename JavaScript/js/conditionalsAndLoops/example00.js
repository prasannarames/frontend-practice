/*  
  get input of age from user
  if age is above/equal to 18, return "you are eligible"
  if the age is below 18, return 'this many number of years you are less to be eligible'.'so you are not eligible'.

*/


let userAnswer = prompt("what is your age ?");
let num = 18 - userAnswer;

if (userAnswer >= 18){
   
    alert("your eligible to drive");
}else{
    alert(`you ${num} years less than eligible.so, youre no eligible`)
}