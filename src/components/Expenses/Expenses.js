import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
const Expenses = (props) => {
  const [filter, setFilter]=useState('2021');
  
  const filterHandler=(filterData)=>{
    setFilter(filterData)
    console.log(filterData);
  };
  return (
    <div>      
      <Card className="expenses">
      <ExpensesFilter selected={filter} onFilterChange={filterHandler}/>
        {props.expenses.map(function (object, i) {
          return (
            <ExpenseItem
              key={i}
              date={object.date}
              title={object.title}
              amount={object.amount}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
