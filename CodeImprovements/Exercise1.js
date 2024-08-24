const calculateAverage = (numbers) => {
  if (!Array.isArray(numbers)) throw new Error("Invalid input");
  const sumOfNumbers = numbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  return sumOfNumbers / numbers.length;
};
