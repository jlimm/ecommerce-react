import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { authService, dbService } from "../../../firebase";
import "./register.scss";

const Register = () => {
  const history = useHistory();

  const [displayName, SetDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        history.push("/account");
      }
    });
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isFormValid) {
      await authService
        .createUserWithEmailAndPassword(email, password)
        .then((createdUser) => {
          createdUser.user
            .updateProfile({
              displayName: displayName,
            })
            .then(() => {
              saveUser(createdUser).then(() => {
                console.log("saved");
              });
            })
            .catch((err) => {
              setError(err.message);
            });
        })
        .catch((err) => {
          setError(err.message);
        });
    }
    history.push("/account");
  };
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

  const saveUser = (createdUser) => {
    return dbService.collection("users").doc(`${createdUser.user.uid}`).set({
      displayName: createdUser.user.displayName,
    });
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
      SetDisplayName(value);
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
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    </div>
  );
};

export default Register;
