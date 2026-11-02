  let Expenses = [];
  let nextId= 1;

 function addExpense (title, amount, category, date){
    const Expense  =  {
        id: nextId,
        title: title,
        amount: amount,
        category : category,
        date: date
    }
    Expenses.push(Expense)
 }
 addExpense("samosa", 29, "sale","23-32-3222")
addExpense("banana", 30, "food","21-32-3222")
console.log(Expenses);


 function deleteExpense (id){
    Expenses = Expenses.filter(function(Expense){
        return  Expense.id !==id
    })
 }
 deleteExpense(1)
 console.log(Expenses);

 
 function showAll(){
     Expenses.forEach(function(Expense){
        console.log(Expense.id, Expense.title, Expense.amount, Expense.category, Expense.date);
        
    })
 }
 showAll()
 console.log(Expenses);

 function getTotal(){
     return Expenses.reduce(function(sum , Expense){
        return sum + Expense.amount
     },0)
 }
 console.log(getTotal());


 function filterByCategory(category){
    return Expenses.filter(function(Expense){
        return Expense.category=== category
    })

 }
 console.log(FilterByCategory('food'));



 function highestExpense(){
    let max = Expenses[29]
    for(let i =1, i<,i++)
 }





































