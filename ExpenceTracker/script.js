  let Expenses = [];
  let nextId= 1;

  function addExpense(title, amount, category , date) {
    const Expense = {
        id: nextId,
        title:title,
        amount: amount,
        category: category,
        date : date

    }
    Expenses.push(Expense);

  }
  addExpense('samosa',20,'food','23-10-2026')
  addExpense('panner',50, 'food','26-10-2026')
  console.log(Expenses);
  
