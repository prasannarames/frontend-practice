const scores = [10, 20, 120, 12, 51, 34, 153, 43, 99];

// const firstHighScore = scores.find((score) => {
//     return score > 100;
// });

// or the simplified version

const firstHighScore = scores.find(score => score >100);


console.log(firstHighScore);