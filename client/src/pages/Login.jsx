// imports
import { useState } from "react";

export default function Login() {
// initializing state for email and password
const [data, setData] = useState({
  email: '',
  password: '',
})


  const loginUser = (e) => {
    e.preventDefault();
  };
// login form
  return (
    <div>
      <form onSubmit={loginUser}>
        <label>Email</label>
        <input type="email" placeholder="enter email" value={data.email} onChange={(e) => setData({...data, email: e.target.value })} />
        <label>Password</label>
        <input type="password" placeholder="enter password" value={data.password} onChange={(e) => setData({...data, password: e.target.value })} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
