import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "./UserComponents/UserContext";

const API = import.meta.env.VITE_API_URL;

const LoginForm = () => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
  });
  const { user, loginUser } = useAuth();
  useEffect(() => {
    if (user.password === userInput.password) {
      console.log(user, "Signed In");
      navigate(`/destinations`);
    }
  }, [user]);

  const handleTextChange = (event) => {
    setUserInput({ ...userInput, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    if (user.password === userInput.password && user.username === userInput.username) {
      event.preventDefault();
      loginUser(userInput);
    } else {
        alert("Invalid Credentials")
    }
  };

  return (
    <div className="LoginForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          value={userInput.username}
          type="text"
          onChange={handleTextChange}
          placeholder="Username"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          value={userInput.password}
          type="text"
          onChange={handleTextChange}
          placeholder="Password"
          required
        />
        <br />
        <input type="submit" />
      </form>
      <br />
      <p>
        <Link to="/register">Register New Account</Link>
      </p>
    </div>
  );
};

export default LoginForm;
