import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { authService } from "../../../firebase";
import CustomButtom from "../../button/button";
import { LoginCenter, LoginCenterRegisterLink, LoginCenterText, LoginContainer, LoginForm, LoginFormHeader, LoginFormInfo, LoginFormInput, LoginFormItem, LoginFormTitle } from "./login.styles";

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
        .then((signedInUser) => {})
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

  const displayErrors = (errors) =>
    errors.map((error, i) => <p key={i}>{error.message}</p>);

  return (
    <LoginContainer>
        <LoginForm onSubmit={handleSubmit} >
          <LoginFormHeader>
            <LoginFormTitle>Login</LoginFormTitle>
            <LoginFormInfo>Please enter your e-mail and password:</LoginFormInfo>
          </LoginFormHeader>
          <LoginFormItem>
            <LoginFormInput
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
              required
            />
          </LoginFormItem>
          <LoginFormItem>
            <LoginFormInput
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
              required
            />
          </LoginFormItem>
          {errors.length > 0 && <h3 className="authError">{displayErrors(errors)}aa</h3>}
          <CustomButtom type="submit">Login</CustomButtom>
          <LoginCenter>
            <LoginCenterText>Don't have an account? </LoginCenterText>
            <LoginCenterRegisterLink to="/account/register" >
              Create one
            </LoginCenterRegisterLink>
          </LoginCenter>
        </LoginForm>
     
    </LoginContainer>
  );
};

export default Login;
