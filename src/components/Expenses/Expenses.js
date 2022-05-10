import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
const Expenses = (props) => {
  return (
    <Card className="expenses">
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
  );
};

export default Expenses;
