import React , {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {

  const [editing, setEditing]=useState(false);

  const saveExpenseDataHandler = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random().toString(),
    };
    props.onNewExpense(expenseData);
    setEditing(false);
  };

  const onCancelHandler = () => {
    setEditing(false);
  };
  const onAddHandler = () => {
    setEditing(true);
  };
  
  return (
    <div className="new-expense">
      {!editing && <button onClick={onAddHandler}>Add New Expense</button>}
      {editing && <ExpenseForm onSaveExpense={saveExpenseDataHandler} onCancel={onCancelHandler}/>}      
    </div>
  );
};

export default NewExpense;
