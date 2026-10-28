
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function UserDetails() {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        console.error("Failed to fetch user:", err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2>Loading user details...</h2>;
  }

  if (error || !user || !user.id) {
    return <h2>Failed to load user data</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Details</h1>

      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>

      <h3>Address</h3>
      <p>{user.address.street}, {user.address.suite}</p>
      <p>{user.address.city}, {user.address.zipcode}</p>

      <h3>Company</h3>
      <p>{user.company.name}</p>

      <Link to="/users">Back to Users</Link>
    </div>
  );
}

export default UserDetails;
