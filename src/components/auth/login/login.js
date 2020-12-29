import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { authService } from "../../../firebase";
import CustomButtom from "../../button/button";
import "./login.scss";

const Login = () => {
    const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isFormValid) {
      await authService
        .signInWithEmailAndPassword(email, password)
        .then((signedInUser) => {
        })
        .catch((err) => {
          setErrors(errors.concat(err));
        });
    }
    history.push("/account");

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

  const isFormValid = ({ email, password }) => email && password;

  const displayErrors = errors => 
      errors.map((error,i)=><p key={i}>{error.message}</p>);
  
  return (
    <div className="page login-section">
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
          {errors.length>0&& <h3>{displayErrors(errors)}aa</h3>}
          <CustomButtom type="submit" >Login</CustomButtom>
          <div className="login-center">
            <span className="center-text">Don't have an account? </span>
            <Link to="/account/register" className="register-link">
              Create one
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
