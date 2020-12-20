import React, { useState } from "react";
import "./login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = (event) => {
      event.preventDefault();
  }

  const handleChange = (event) => {
      const { target: {name, value}} = event;
      if(name==="email"){
          setEmail(value);
      } else if (name ==="password") {
          setPassword(value);
      }
  };

  return (
   
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <input name="email" type="email" value={email} onChange={handleChange} required />
        <label>Email</label>
        <input name="password" type="password" value={password} onChange={handleChange} required />
        <label>Password</label>

        <input type="submit" value="Submit Form" />
      </form>
    </div>

  )
};

export default Login;
