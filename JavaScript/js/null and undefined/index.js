/////// null and undefined ////////////

/// null and undefined are falsy values 
/// Both are the part of JavaScripts seven primitive types

console.log(!!null); // or Boolean(null)
// false
console.log(!!undefined); // or Boolean(undefined)
//false


/////// null ///////////////////

/// null is just a special value that represents 'empty' or 'nothing' or 'value unknown'
/// null consider as a system level
/// if we want to explicit emptyness in some of our variable or code we can use null
/// example
let a = null; 

/////// undefined ////////////////

/// the meaning of undefined is 'the value not assigned' 
/// if a variable is declared but not assigned then it is undefined
/// undefined consider as a program level
/// undefined also used explicitly but it is not recommended. (undefined works implicitly)
/// example
let b;
console.log(b)// undefined 


