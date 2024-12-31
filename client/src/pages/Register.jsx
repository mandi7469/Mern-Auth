// imports
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Register() {
  // initializing state for name, email and password
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setData({...data, [name]: value}); 
  }

  // register user
  const registerUser = async (event) => {
    event.preventDefault();
    const { name, email, password } = data;
    try {
      // POST request for register page
      const { data } = await axios.post("/register", {
        name,
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Registration successful. Welcome! Please log in");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // register form
  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input
          type="text"
          placeholder="enter name"
          name='name'
          value={data.name}
          onChange={handleInputChange}
        />
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
