const reverseString = (str) => {
  if (typeof str !== "string") throw new Error("Invalid input");
  return str.split("").reverse().join("");
};
