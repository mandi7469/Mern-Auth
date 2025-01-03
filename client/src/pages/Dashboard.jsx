// imports
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import "./Pages.css";

// access user data from the UserContext using useContext hook
export default function Dashboard() {
  const { user } = useContext(UserContext);
  return (
    <div className="container text-center pt-3">
      <h1 className="dash">Dashboard</h1>
      {!!user && (<h2 className="userDash">Hi {user.name}!</h2>)}
    </div>
    
  );
}
