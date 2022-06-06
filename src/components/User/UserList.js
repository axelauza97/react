import Card from "../../UI/Card";
import "./UserList.css";

const UserList = (props) => {
  return (
    <Card className={props.className}>
      <ul className="users">
        {props.userList.map((user) => (
          <li key={user.key}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UserList;
