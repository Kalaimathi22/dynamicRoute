
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1 style={{ fontSize: "80px", color: "red" }}>
        404
      </h1>

      <h2>Page Not Found!</h2>

      <p>Sorry, the page you are looking for does not exist.</p>

      <Link to="/">Go Back Home</Link>
    </div>
  );
}

export default NotFound;
