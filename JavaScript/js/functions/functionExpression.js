let greet = function(){console.log("hello prazz")};
secondary(greet);

function secondary(func){
func();
}