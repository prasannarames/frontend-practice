let readlineSync = require('readline-sync');
function yourName(name){
    console.log("Hello " + name + " !");
}
let name = readlineSync.question("enter your name ::");
 yourName(name);