
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>Failed to load data</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>User List</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <button
              onClick={() => navigate(`/user/${user.id}`)}
              style={{
                border: "none",
                background: "none",
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
                padding: "5px",
              }}
            >
              {user.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
