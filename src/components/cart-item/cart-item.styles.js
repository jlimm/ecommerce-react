import styled from "styled-components";

export const CartSidebarItem = styled.div`
  margin: 30px 0 0 0;
  display: table;
  table-layout: fixed;
  width: 100%;
`;

export const CartItemImage = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 120px;
  height: 120px;
  text-align: center;
  background-size: cover;
`;

export const CartItemDetails = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding-left: 25px;
`;

export const CartItemName = styled.div`
  margin-bottom: 0.45em;
  width: 100%;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
`;

export const QuantityActions = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const RemoveBtn = styled.div`
  cursor: pointer;
  font-size: 9px;
`;
