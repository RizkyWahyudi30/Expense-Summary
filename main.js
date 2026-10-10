function calculateTotal(expenses) {
  let total = expenses.reduce((acc, currItem) => {
    return acc + currItem.amount;
  }, 0);

  return total;
}

function calculateCategoryTotal(expenses, category) {
  let filterCategory = expenses.filter(
    (expense) => expense.category === category,
  );

  let totalAmount = filterCategory.reduce((acc, currItem) => {
    return acc + currItem.amount;
  }, 0);

  return totalAmount;
}

function findLargestExpense(expenses) {
  let arrAmount = expenses.map((expense) => expense.amount);

  let maxAmount = Math.max(...arrAmount);

  return expenses.find((expense) => expense.amount === maxAmount);
}

function createExpenseSummary(expenses) {
  let totalItemAmount = calculateTotal(expenses);

  // food total
  let filterFood = calculateCategoryTotal(expenses, "food");
  // transport total
  let filterTransport = calculateCategoryTotal(expenses, "transport");

  let largestExpen = findLargestExpense(expenses);

  return {
    total: totalItemAmount,
    foodTotal: filterFood,
    transportTotal: filterTransport,
    largestExpense: largestExpen,
  };
}

const expenses = [
  { id: 1, category: "food", amount: 24 },
  { id: 2, category: "transport", amount: 15 },
  { id: 3, category: "food", amount: 18 },
  { id: 4, category: "books", amount: 40 },
];

console.log(createExpenseSummary(expenses));
console.log(calculateCategoryTotal(expenses, "food"));
console.log(calculateCategoryTotal(expenses, "health"));
console.log(findLargestExpense(expenses));
