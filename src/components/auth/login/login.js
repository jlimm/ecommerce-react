import React, { useState } from "react";
import "./login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div className="container login">
      <form onSubmit={handleSubmit} className="form form-login">
        <header className="form-header">
          <h1 className="heading title-login">Login</h1>
          <p className="info-login">Please enter your e-mail and password:</p>
        </header>
        <div className="form-item">
          <input
            className="form-input"
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            required
          />
          <label className="form-label">Email</label>
        </div>
        <div className="form-item">
          <input
            className="form-input"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            required
          />
          <label className="form-label">Password</label>
        </div>
        <input type="submit" value="Submit Form" />
        <div className="login-center">
            <span className="center-text">Don't have an account? </span>
            <a href="/account/register" className="register-link">Create one</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
