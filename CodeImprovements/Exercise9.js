const calculateMatrixSum = (matrix) => {
  return matrix
    .map((row) => row.reduce((acc, value) => acc + value, 0))
    .reduce((acc, rowSum) => acc + rowSum, 0);
};