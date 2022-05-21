import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filter, setFilter] = useState("2021");

  const filterHandler = (filterData) => {
    setFilter(filterData);
  };
  const filterExpenses = props.expenses.filter((object) => {
    return object.date.getFullYear().toString() === filter;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filter} onFilterChange={filterHandler} />
      <ExpensesChart expenses={filterExpenses} />
      <ExpensesList items={filterExpenses} />
    </Card>
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
