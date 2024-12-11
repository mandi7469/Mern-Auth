// imports
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
// links to homepage, registration and login
    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}
