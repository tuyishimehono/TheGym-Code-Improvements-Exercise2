const findEvenNumbers = (numbers) => {
  if (!Array.isArray(numbers)) throw new Error("Invalid Input");
  return numbers.filter((num) => num % 2 === 0);
};
