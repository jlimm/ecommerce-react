import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginContainer = styled.div`
  max-width: 500px;
  padding: 300px 0px;
  margin: 0 auto;
`;

export const LoginForm = styled.form`
  padding: 0 80px;
`;

export const LoginFormHeader = styled.header`
  margin-bottom: 24px;
  text-align: center;
`;

export const LoginFormTitle = styled.h1`
  font-size: 25px;
`;
export const LoginFormInfo = styled.div`
  font-size: 12px;
`;
export const LoginFormItem = styled.div`
  margin-bottom: 15px;
`;
export const LoginFormInput = styled.input`
  padding: 12px 14px;
  border: 1px solid #d2d2d2;
  width: 100%;
  line-height: normal;
  resize: none;
  background: transparent;
`;
export const LoginCenter = styled.div`
  text-align: center;
  margin: 24px 0 0 0;
  font-size: 12px;
`;
export const LoginCenterText = styled.span`
  color: #6a6a6a;
`;

export const LoginCenterRegisterLink = styled(Link)`
  color: inherit;
  background-color: transparent;
  text-decoration: none;
`;
