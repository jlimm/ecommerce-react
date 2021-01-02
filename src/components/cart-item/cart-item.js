import React from "react";
import { connect } from "react-redux";
import {
  clearItemFromCart,
} from "../../redux/cart/cart-actions";
import QuantitySelector from "../quantity-selector/quantity-selector";
import {
  CartItemDetails,
  CartItemImage,
  CartItemName,
  CartSidebarItem,
  QuantityActions,
  RemoveBtn,
} from "./cart-item.styles";

const CartItem = ({ item, clearItem}) => {
  const { imageUrl, price, name, title } = item;
  return (
    <CartSidebarItem>
      <CartItemImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <CartItemDetails>
        <CartItemName className="Heading">{name}</CartItemName>
        <CartItemName className="Heading">{title}</CartItemName>
        <CartItemName className="Heading">$ {price}</CartItemName>
        <QuantityActions className="Heading">
          <QuantitySelector item={item}></QuantitySelector>
          <RemoveBtn
            onClick={() => clearItem(item)}
          >
            Remove
          </RemoveBtn>
        </QuantityActions>
      </CartItemDetails>
    </CartSidebarItem>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
