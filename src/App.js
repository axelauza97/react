import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] =useState(dummyExpenses);
  const [bool, setBool]=useState(false);

  const newExpenseHandler = (expense) => {
    setExpenses(prevExpenses=>{
      return [expense,...prevExpenses];
    }
    )
    console.log(expense);
  };
  const onAddHandler = () => {
    setBool(prev=>{
      return !prev;
    })
  };
  const onCancelHandler = (boolCancel) => {
    setBool(boolCancel);
  };
  let content=<div className="new-expense"><button onClick={onAddHandler}>Add New Expense</button></div>;
  if(bool){
    content=<NewExpense onNewExpense={newExpenseHandler} onCancel={onCancelHandler}/>;
  }

  return (
    <div>
      {content}
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
