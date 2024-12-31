// imports
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // initializing state for email and password
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setData({...data, [name]: value}); 
  }

  // login user
  const loginUser = async (event) => {
    event.preventDefault();
    const { email, password } = data;
    try {
      // POST request for login page
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        navigate("/dashboard");
      }
    } catch (error) {}
  };
  // login form
  return (
    <div>
      <form onSubmit={loginUser}>
        <label>Email</label>
        <input
          type="email"
          placeholder="enter email"
          name='email'
          value={data.email}
          onChange={handleInputChange}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="enter password"
          name='password'
          value={data.password}
          onChange={handleInputChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
