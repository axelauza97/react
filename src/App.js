import logo from "./logo.svg";
import "./App.css";
import UserInput from "./components/User/UserInput";
import UserList from "./components/User/UserList";
import { useState } from "react";
import Modal from "./UI/Modal";

const App = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");


  const userAddHandler = (user) => {
    setUsers((prev) => {
      return [user, ...prev];
    });
  };
  const handleClose = (event) => {
    setShow(false);
  };
  const showModal = (titleShow, contentShow)=>{
    setTitle(titleShow);
    setContent(contentShow);
    setShow(true);
  };
  return (
    <main>
      <UserInput className="user-input" onNewUser={userAddHandler} onShowModal={showModal} />
      <UserList className="user-list" userList={users} />
      <Modal show={show} onHide={handleClose} title={title} content={content}/>
    </main>
  );
};

export default App;
