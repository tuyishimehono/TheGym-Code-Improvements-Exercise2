const calculateDiscount = (totalAmount) => {
  if (typeof totalAmount !== "number") throw new Error("Invalid Input");
  return totalAmount > 100 ? totalAmount * 0.1 : totalAmount * 0.05;
};
