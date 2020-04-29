/*
Soln:
[ [ 15, 13, 2, 5 ],
  [ 14, 3, 4, 1 ],
  [ 12, 6, 8, 9 ],
  [ 16, 7, 10, 11 ] ]
*/

const rotate = (matrix) => {
  const len = matrix.length;
  const reps = Math.ceil(matrix.length/2);

  for (let i = 0; i < reps; i++) {
    for (let j = i; j < len-1-i; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[len-1-j][i];
      matrix[len-1-j][i] = matrix[len-1-i][len-1-j];
      matrix[len-1-i][len-1-j] = matrix[j][len-1-i];
      matrix[j][len-1-i] = temp;
    }
  }

  return matrix;
};

const input = [
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
];

console.log(rotate(input));