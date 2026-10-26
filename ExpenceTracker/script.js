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

  

// function deleteExpense (id){
//     Expenses  = Expenses.filter(function(Expense){
//         return Expense.id !==id

//     })
// }
// deleteExpense(1)
// console.log(Expenses);



// function showAll(){
//     Expenses.forEach(function(Expense){
//         console.log(Expense.id , Expense.title, Expense.amount, Expense.category, Expense.date);
        
//     })
// }
// showAll();

function getTotal(){
    return Expenses.reduce(function(sum,Expense){
        return sum + Expense.amount;
    },0)
        
}
console.log(getTotal());





