const maxNumber = (a, b, c) => {
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number")
    throw new Error("Invalid input");
  return Math.max(a, b, c);
};
