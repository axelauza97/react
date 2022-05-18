import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
const Expenses = (props) => {
  const [filter, setFilter]=useState('2021');
  
  const filterHandler=(filterData)=>{
    setFilter(filterData);
  };
  return (
    <div>      
      <Card className="expenses">
      <ExpensesFilter selected={filter} onFilterChange={filterHandler}/>
        {props.expenses.filter( object =>{
          return object.date.getFullYear()==filter
        }).map( object =>{
          return (
            <ExpenseItem
              key={object.id}
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
