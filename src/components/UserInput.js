import { useState } from "react";
import "./UserInput.css";
const UserInput = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  

  const addUserHandler = (event) => {
    event.preventDefault();
    props.onNewUser({
      key: Math.random().toString(),
      age: age,
      username: username,
    });
    setAge("");
    setUsername("");
  };
  const changeUsernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const changeAgeHandler = (event) => {
    setAge(event.target.value);
  };
  
  return (
    <form className="form" onSubmit={addUserHandler}>
      <label>Username</label>
      <input type="text" value={username} onChange={changeUsernameHandler} />
      <label>Age (years)</label>
      <input type="number" value={age} onChange={changeAgeHandler} />
      <button type="submit">Add User</button>      
    </form>
  );
};
export default UserInput;
