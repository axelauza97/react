import React, { useState } from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">No expenses in the list.</h2>
    );
  } else {
    return (
      <ul className="expenses-list">
        {props.items.map((object) => {
          return (
            <ExpenseItem
              key={object.id}
              date={object.date}
              title={object.title}
              amount={object.amount}
            />
          );
        })}
      </ul>
    );
  }
};
export default ExpensesList;
