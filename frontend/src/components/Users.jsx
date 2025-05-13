import { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div>
      <h2>Users List</h2>
      {users.map((user) => (
        <p key={user._id}>{user.name} - {user.email}</p>
      ))}
    </div>
  );
};

export default Users;