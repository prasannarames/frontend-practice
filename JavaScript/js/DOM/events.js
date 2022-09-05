const ul = document.querySelector('ul');
const btn = document.querySelector('button');
const listItem = document.querySelectorAll('li');

btn.addEventListener('click', () => {
    // console.log("you clicked me !")
    // ul.innerHTML += "<li>new item</li>";
    // or

    const li = document.createElement('li');
    li.textContent = "new item on the list";
    // ul.append(li);
    ul.prepend(li);
});



// listItem.forEach((item)=>{
//     // item.addEventListener('click', (item)=>{
//         // console.log(e.target);
//         // or
//     item.addEventListener('click', (item)=>{
//         //    console.log(item.target);

//     item.target.style.textDecoration='line-through';

//     // remove any item
//     // e.target.remove();

//     });
//   });

  ul.addEventListener('click', (e)=>{
      if(e.target.tagName=== 'LI'){
        e.target.remove();
      }

  })

  const copy = document.querySelector('.copy-this');

  copy.addEventListener('copy', e =>{
    console.log("this is a copyrighted content")

  });

   const box = document.querySelector('.box');

   box.addEventListener('mousemove', e => {
    //  console.log(e)
    // console.log(e.offsetX, e.offsetY);
    box.textContent = (`position x ==> ${e.offsetX} \nposition of y ==> ${e.offsetY}`);
   });