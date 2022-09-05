// const scores = [20, 30, 40, 50, 60, 70, 80];

// const result = scores.reduce((acc, cur)=>{
//     if(cur > 40){
//         acc++;
//     } 
//    return acc
// }, 0);

// console.log(result);

const scores = [
    {name: 'kishore', score: 20},
    {name: 'Hemant', score: 30},
    {name: 'kishore', score: 40},
    {name: 'Hemant', score: 50},
    {name: 'kishore', score: 60},
    {name: 'Hemant', score: 70},
    {name: 'kishore', score: 20},
    {name: 'Hemant', score: 30},
    {name: 'kishore', score: 40},
    {name: 'Hemant', score: 50},
    {name: 'kishore', score: 60},
    {name: 'Hemant', score: 70}
];

let kishoreTotal =scores.reduce((acc, cur)=>{
    if(cur.name==='kishore'){
        acc += cur.score;
    }
    return acc;

}, 0);

console.log("total score of kishore is :",kishoreTotal);