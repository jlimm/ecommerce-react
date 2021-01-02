import styled from "styled-components";

export const QuantitySelectorContainer = styled.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid #d2d2d2;
  white-space: nowrap;
`;

export const QuantityBtn = styled.div`
  padding: 3px 10px 5px 10px;
  cursor: pointer;
  display: inline-block;
`;

export const QuantityCurrent = styled.div`
  font-size: 12px;
  display: inline-block;
  width: 20px;
  padding: 0;

  text-align: center;
  letter-spacing: normal;
  background: transparent;
  border: none;
`;

export const QuantityIndicator = styled.svg`
  width: 10px;
  height: 10px;
  stroke-width: 1.5px;
  vertical-align: -1px;
`;
