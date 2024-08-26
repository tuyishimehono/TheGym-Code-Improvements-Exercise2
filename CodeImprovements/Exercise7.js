const multiplyNumbers = (x, y) => {
  if (typeof x !== "number" || typeof y !== "number")
    throw new Error("Invalid input");
  return x * y;
};
