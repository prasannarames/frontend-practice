// window is global object

// window is infered or invisible

// example 1
window.console.log('hello world'); // hello world (browser console)
console.log('hello world'); // hello world (browser console and outside)
// example 2
console.log(document.querySelector('h1')); // same output
console.log(window.document.querySelector('h1')); // same output
// example 3
// alert('hey there !'); // similar op
// window.alert('hey there !');  // similar op
//example 4
setTimeout(()=>{
    alert('hello world');

},3000);