const calculateFactorial = (n) => {
  if (typeof n !== "number") throw new Error("Invalid input");
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};
