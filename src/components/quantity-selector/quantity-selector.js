import React from "react";
import { connect } from "react-redux";
import { addItem, removeItem } from "../../redux/cart/cart-actions";
import {
  QuantitySelectorContainer,
  QuantityBtn,
  QuantityIndicator,
  QuantityCurrent,
} from "./quantity-selector.styled";

const QuantitySelector = ({ item, addItem, removeItem }) => {
  const { quantity } = item;
  return (
    <QuantitySelectorContainer>
      <QuantityBtn onClick={() => removeItem(item)}>
        <QuantityIndicator role="presentation" viewBox="0 0 16 2">
          <path
            d="M1,1 L15,1"
            stroke="currentColor"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="square"
          ></path>
        </QuantityIndicator>
      </QuantityBtn>
      <QuantityCurrent>{quantity}</QuantityCurrent>
      <QuantityBtn onClick={() => addItem(item)}>
        <QuantityIndicator role="presentation" viewBox="0 0 16 16">
          <g
            stroke="currentColor"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="square"
          >
            <path d="M8,1 L8,15"></path>
            <path d="M1,8 L15,8"></path>
          </g>
        </QuantityIndicator>
      </QuantityBtn>
    </QuantitySelectorContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(QuantitySelector);
