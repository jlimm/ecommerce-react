import React, { useState } from "react";
import { authService, createUserProfileDocument, dbService } from "../../../firebase";
import CustomButtom from "../../button/button";
import "./register.scss";

const Register = () => {

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  

const handleSubmit = async event => {
    event.preventDefault();
    if(isFormValid)
    {
        try{
            const {user} = await authService.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});
            setDisplayName('');
            setEmail('');
            setPassword('');
        } catch(error){
            console.log("register:34", error);
        }
    }
}

  const isFormValid = () => {
    if (isFormEmpty) {
      setError("Fill in all fields");
      return false;
    } else {
      return true;
    }
  };

  const isFormEmpty = ({ email, password, displayName }) => {
    return !email.length || !password.length || !displayName.length;
  };

 

  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  return (
    <div className="page login-section">
      <div className="container login">
        <form onSubmit={handleSubmit} className="form form-login">
          <header className="form-header">
            <h1 className="heading title-login">Register</h1>
            <p className="info-login">Please fill in the information below:</p>
          </header>
          <div className="form-item">
            <input
              className="form-input"
              name="displayName"
              type="text"
              placeholder="User Name"
              value={displayName}
              onChange={handleChange}
              required
            />
            <label className="form-label">DisplayName</label>
          </div>
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
            {error && <span className="authError">{error}</span>}
          </div>
          <CustomButtom type="submit">Create My Account</CustomButtom>
        </form>
      </div>
    </div>
  );
};

export default Register;
