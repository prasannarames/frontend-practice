// example for Async JS
// console.log(1);
// console.log(2);

// setTimeout (()=>{
//     console.log("hello world");

// }, 2000);

// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);




// HTTP request and response
const getTodoFunc = (resource, callback)=>{
    const request = new XMLHttpRequest();

request.addEventListener('readystatechange', ()=> {
    if(request.readyState === 4 && request.status === 200){
        const data = JSON.parse(request.responseText);
        callback(undefined, data);
    } else if(request.readyState === 4){
       callback('could not fetch data', undefined);
    }
});

request.open('GET', resource);
request.send();
};

// getTodoFunc('/asyncsJs/todoList/first.json', (err,data)=>{
//     console.log(data);

// });

// promises
