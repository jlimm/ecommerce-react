import styled, { css } from "styled-components";

const getPageOverayStyles = (props) => {
  return props.hidden ? "" : PageOverayVisible;
};

const PageOverayVisible = css`
  opacity: 0.5;
  visibility: visible;
`;

export const PageOverayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 2;
  opacity: 0;
  visibility: hidden;
  background: #363636;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  ${getPageOverayStyles}
`;
