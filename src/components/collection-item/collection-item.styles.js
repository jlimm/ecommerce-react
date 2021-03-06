import styled from "styled-components";
import CustomButtom from "../button/button";

export const AddCartButton = styled(CustomButtom)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
  overflow: hidden;
  white-space: nowrap;
`;

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  &:hover ${AddCartButton} {
    opacity: 0.85;
    display: flex !important;
  }
`;

export const CollectionItemImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  &:hover {
    opacity: 0.8;
  }
`;

export const CollectionItemFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const CollectionItemName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const CollectionItemPrice = styled.span`
  width: 10%;
`;
