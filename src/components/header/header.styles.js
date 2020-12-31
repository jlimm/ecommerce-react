import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 -1px #1c1b1b40 inset;
  width: 100%;
  min-height: 90px;
  position: fixed;
  transition: all 0.3s ease-in-out;
  z-index: 1;
  font-size: 12px;
  text-transform: uppercase;
  background-color: transparent;
  letter-spacing: 0.2em;

  &:hover {
    background-color: rgba(255, 255, 255, 1) !important;
  }
`;

export const LogoContainer = styled(Link)`
  width: 90px;
  padding: 10px 15px;
  z-index: auto;
`;

const HeaderFlexItemStyles = css`
  flex: 1 0 0;
  min-width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const HeaderFlexItem = styled.div`
  flex: 1 0 0;
  min-width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  text-align: left;
  justify-content: flex-start;

  &:last-child {
    padding-left: 0px;
    padding-right: 20px;
    text-align: right;
    justify-content: flex-end;
  }
`;

export const HorizontalListItem = styled(Link)`
  padding: 10px 25px;
  text-decoration: none;
  color: #1c1b1b;
`;
