import "./UserList.css";

const UserList =(props)=> {
    return(
    <ul className="users">
        {props.userList.map( user => (
            <li key={user.key}>{user.username} ({user.age} years old)</li>    
        ) 
        )}
    </ul>
    );
}
export default UserList;