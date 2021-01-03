import styled from "styled-components";

export const CheckOutPageContainer = styled.div`
  padding: 80px 50px;
  margin: 0 auto;
`;

export const CheckOutPageHeader = styled.div`
  position: relative;
  padding: 50px 0;
  text-align: center;
  font-size: 24px;
`;

export const CheckOutPageContent = styled.div`
  max-width: 1000px;
  margin-bottom: 80px;
  margin: 35px auto;
`;

export const CheckOutHeader = styled.div`
  display: table;
  table-layout: auto;
  width: 100%;
  border-spacing: 0 30px;
`;

export const HeaderBlock = styled.div`
  display: table-cell;
  padding-bottom: 10px;
  border-bottom: 1px solid #d2d2d2;
  font-size: 13px;
  color: #6a6a6a;
  &:first-child {
    width: 120px;
    max-width: 120px;
  }
  &:nth-child(2) {
    width: 300px;
    max-width: 300px;
  }

  &:nth-last-child(2) {
    text-align: center;
  }
  &:last-child {
    width: 15%;
    text-align: right;
  }
`;

export const TotalPrice = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
