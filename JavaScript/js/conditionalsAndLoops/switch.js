let grade = "A";

switch (grade){
    
    case "A":
        console.log("You did great!!");
        break;
    
    case "B":
        console.log("You did good!!");
        break;

    case "C":
        console.log("You did okay!!");
        break;

    case "D":
        console.log("You are not good");
        break;
         
    case "F":
        console.log("You are FAILED!!!");  
        break;
        
    default:
        console.log(grade + "is not a valid grade");    

}