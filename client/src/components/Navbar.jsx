// imports
import { Link } from "react-router-dom";
import "./Navbar.css";



export default function Navbar() {
  return (
    // links to homepage, registration and login
    <nav className="navbar">
      
      <Link className="menu-items" to="/">Home</Link>
      <Link className="menu-items" to="/register">Register</Link>
      <Link className="menu-items" to="/login">Login</Link>
      
      
    </nav>
  );
}



