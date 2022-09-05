const form = document.querySelector('.sigup-form');
// const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');
const unPattern = /^[a-zA-Z]{6,10}$/;


form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(username.value);
    // console.log(form.username.value);


// const username = 'prasann52a';
// const condi = /^[a-zA-Z]{8,}$/;    //regular expression (RegEx)

// let answer = condi.test(username);

// // console.log(answer);

// if(answer){
//     console.log('Thats a valid one :)');
// }else {
// console.log('oops, thats not a valid one ):');
// }

const username = form.username.value; // validation


if(unPattern.test(username)){
    feedback.textContent="cheers!! thats a valid one :)"
} else {
    feedback.textContent="oops!! thats not a valid one (: USERNAME SHOULD CONTAIN CHARACTERS OF 6 TO 10"
};
});

// live validation

form.username.addEventListener('keyup', e => {
  //  console.log(e.target.value, form.username.value); // both does the same operation
  if(unPattern.test(e.target.value)){
      form.username.setAttribute('class', 'success');
  } else {
      form.username.setAttribute('class', 'error');
  }
});