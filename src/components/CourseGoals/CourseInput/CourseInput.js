import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";


const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [valid, setValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim() !== "") {
      setValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim() === "") {
      setValid(false);
      console.log("fa");
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']}  ${!valid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
