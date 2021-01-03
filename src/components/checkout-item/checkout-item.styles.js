import styled from "styled-components";

export const CheckOutItemContainer = styled.div`
  margin: 30px 0 0 0;
  display: table;
  table-layout: auto;
  border-spacing: 0 30px;
  width: 100%;
  border-bottom: 1px solid #d2d2d2;
`;

export const CheckOutImageContainer = styled.div`
  display: table-cell;
  width: 120px;
  height: 120px;
  min-width: 90px;
  vertical-align: middle;
  text-align: center;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;

export const CheckOutImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const CheckOutItemInfo = styled.div`
  max-width: 300px;
  width: 300px;
  padding-left: 25px;
  display: table-cell;
  text-align: left;
`;

export const CheckOutItemName = styled.div`
  font-size: 15px;
  margin-bottom: 0.45em;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CheckOutItemPrice = styled.div`
  font-size: 12px;
`;

export const CheckOutItemActions = styled.div`
  text-align: center;
  display: table-cell;
`;

export const RemoveBtn = styled.div`
  cursor: pointer;
  font-size: 11px;
  margin: 8px 0;
  text-decoration: none;
`;

export const TotalPrice = styled.div`
  display: table-cell;
  width: 15%;
  text-align: right;
`;
