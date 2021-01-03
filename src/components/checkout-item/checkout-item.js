import React from "react";
import { connect } from "react-redux";
import { clearItemFromCart } from "../../redux/cart/cart-actions";
import QuantitySelector from "../quantity-selector/quantity-selector";
import {
  CheckOutItemActions,
  CheckOutItemPrice,
  CheckOutItemName,
  CheckOutItemInfo,
  CheckOutImage,
  CheckOutImageContainer,
  CheckOutItemContainer,
  RemoveBtn,
  TotalPrice,
} from "./checkout-item.styles";

const CheckOutItem = ({ cartItem, clearItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <CheckOutItemContainer>
      <CheckOutImageContainer>
        <CheckOutImage alt="item" src={imageUrl} />
      </CheckOutImageContainer>
      <CheckOutItemInfo>
        <CheckOutItemName className=" Heading">{name}</CheckOutItemName>
        <CheckOutItemPrice className=" Heading">${price} USD</CheckOutItemPrice>
      </CheckOutItemInfo>
      <CheckOutItemActions>
        <QuantitySelector item={cartItem} />
        <RemoveBtn
          onClick={() => clearItem(cartItem)}
        >
          REMOVE
        </RemoveBtn>
      </CheckOutItemActions>
      <TotalPrice className="Heading">${price * quantity} USD</TotalPrice>
    </CheckOutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
