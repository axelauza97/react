import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
const Expenses = (props) => {
  const [filter, setFilter] = useState("2021");

  const filterHandler = (filterData) => {
    setFilter(filterData);
  };
  const filterExpenses = props.expenses.filter((object) => {
    return object.date.getFullYear().toString() === filter;
  });
  let expensesContent="";
  if (filterExpenses.length==0){
    expensesContent=<p>No expenses in the list.</p>;
  }
  else{
    expensesContent=filterExpenses.map((object) => {
      return (
        <ExpenseItem
          key={object.id}
          date={object.date}
          title={object.title}
          amount={object.amount}
        />
      );
    })
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filter} onFilterChange={filterHandler} />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
/* {filterExpenses.length === 0 && <p>No expenses in the list.</p> }
or
let noExpenses=<p>No expenses in the list.</p>;
or
{filterExpenses.length === 0 ? (
  <p>No expenses in the list.</p>
) : (
  filterExpenses.map((object) => {
    return (
      <ExpenseItem
        key={object.id}
        date={object.date}
        title={object.title}
        amount={object.amount}
      />
    );
  })
)}
*/ 