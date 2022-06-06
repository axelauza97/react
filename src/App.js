import logo from "./logo.svg";
import "./App.css";
import UserInput from "./components/User/UserInput";
import UserList from "./components/User/UserList";
import { useState } from "react";
import Modal from "./UI/Modal";

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
      <UserInput className="user-input" onNewUser={userAddHandler} />
      <UserList className="user-list" userList={users} />
      <Modal show={show} onHide={handleClose} />
    </main>
  );
};

export default App;
