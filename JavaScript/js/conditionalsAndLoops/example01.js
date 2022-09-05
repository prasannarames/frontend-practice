
// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// Enter your age: 30
// You are 5 years older than me.

let myAge = 23;
let yourAge = prompt("Enter your age : ");
let ageDiffy = myAge - yourAge;
let ageDiffo = yourAge - myAge;

if(myAge < yourAge){
    console.log(`you are ${ageDiffo} years older  than me`);
}if (myAge > yourAge) {
    console.log(`you are ${ageDiffy} years younger than me`);
} else {
    console.log("we are at the same age");
}