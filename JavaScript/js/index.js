function additionOfMatrix(matrix1, matrix2) {
  let n = 2;
  let m = 2;

  let result = [[],[]];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      result[i][j] = matrix1[i][j] + matrix2[i][j];
    }
  }
  return result;
}
let matrix1 = [
  [2, 3],
  [4, 5]
];
let matrix2 = [
  [1, 1],
  [1, 1]
];

console.log(additionOfMatrix(matrix1, matrix2));
