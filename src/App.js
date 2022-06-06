import logo from "./logo.svg";
import "./App.css";
import UserInput from "./components/UserInput";
import UserList from "./components/UserList";
import { useState } from "react";
import Modal from "./UI/Modal/Modal";

const App = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);

  const userAddHandler = (user) => {
    if (user.age <= 0 || user.age == "") {
      setShow(true);
      return;
    }
    setUsers((prev) => {
      return [user, ...prev];
    });
  };
  const handleClose = (event) => {
    setShow(false);
  };
  return (
    <main>
      <div className="user-input">
        <UserInput onNewUser={userAddHandler} />
      </div>
      <div className="user-list">
        <UserList userList={users} />
      </div>
      <Modal show={show} onHide={handleClose} />
    </main>
  );
};

export default App;
