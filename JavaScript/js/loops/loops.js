/** ex:01
 *  Iterate 0 to 10 using for loop, do the same using while and do while loop
 * 
 * sol:
 * ---------------------------------- 
 * for loop:
 *   let n = 10;
  for(let i=0; i<=n; i++ ){
      console.log(i);
  }
-------------------------------------
  while loop:
    let i=0;
  while(i<=10){
      console.log(i);
      i++;
  }
---------------------------------------
 *  do-while loop:
 *  let i=0;
do{
    console.log(i);
    i++;

} while(i<=10);
 * -----------------------------------------
 * 
 * ex:02
 * Iterate 10 to 0 using for loop, do the same using while and do while loop
 * sol:
 *----------------------------------------
 *for loop:
 * for(let i = 10; i >= 0; i--){
 console.log(i);
}
--------------------------------------------
 * let i = 10;
while(i >= 0){
    console.log(i);
   i--;
}
 * ------------------------------------------
 * let i = 10;
do{
console.log(i);
i--;
} while(i >= 0)

 * ------------------------------------------
 *  ex:03
 * Iterate 0 to n using for loop
 * sol:
 * ------------------------------------------
 * for(let i=0;i>=0;i++){
    console.log(i);
}
 * ------------------------------------------
 * ex:04
 * Write a loop that makes the following pattern using console.log():

 *  #
    ##
    ###
    ####
    #####
    ######
    #######
 * sol:
    -----------------------------------------
 * 
 * 
let n = 7;
let string = "";

for(let i = 1; i <= n; i++){
  for(let j = 0; j < i; j++){
    string +="#";
  }
  string +="\n";
}
console.log(string);

--------------------------------------------------
 * ex:05 
    #
   ##
  ###
 ####
#####
sol:
 * ------------------------------------------------
 * 
 *  let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  // printing hash
  for (let k = 0; k < i; k++) {
    string += "#";
  }
  string += "\n";
}
console.log(string);
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */


   



