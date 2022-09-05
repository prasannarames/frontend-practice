/* function greet(){
   // let message="hello there"; 
    // alert(message);
    console.log("hello there");
}
greet();
// alert(message); */

let userName = "prasanna"; // global variable

function showMessage(){
    // userName = "prazz";
    let userName = "prazz"; // local variable
    let message = "hello, "+ userName;
    console.log(message);

}
showMessage();

console.log(userName);