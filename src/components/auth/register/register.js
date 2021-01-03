import React, { useState } from "react";
import { authService, createUserProfileDocument } from "../../../firebase";
import CustomButtom from "../../button/button";
import {
  RegisterContainer,
  RegisterForm,
  RegisterFormHeader,
  RegisterFormTitle,
  RegisterFormInfo,
  RegisterFormItem,
  RegisterFormInput
} from "./register.styles";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isFormValid) {
      try {
        const { user } = await authService.createUserWithEmailAndPassword(
          email,
          password
        );

        await createUserProfileDocument(user, { displayName });
        setDisplayName("");
        setEmail("");
        setPassword("");
      } catch (error) {
        console.log("register:34", error);
      }
    }
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
    <RegisterContainer>
      <RegisterForm onSubmit={handleSubmit}>
        <RegisterFormHeader>
          <RegisterFormTitle>Register</RegisterFormTitle>
          <RegisterFormInfo>
            Please fill in the information below:
          </RegisterFormInfo>
        </RegisterFormHeader>
        <RegisterFormItem>
          <RegisterFormInput
            name="displayName"
            type="text"
            placeholder="User Name"
            value={displayName}
            onChange={handleChange}
            required
          />
        </RegisterFormItem>
        <RegisterFormItem>
          <RegisterFormInput
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            required
          />
        </RegisterFormItem>
        <RegisterFormItem>
          <RegisterFormInput
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            required
          />
          {error && <span className="authError">{error}</span>}
        </RegisterFormItem>
        <CustomButtom type="submit">Create My Account</CustomButtom>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;
