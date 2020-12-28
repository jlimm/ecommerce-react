import React from "react";
import { connect } from "react-redux";
import { clearItemFromCart } from "../../redux/cart/cart-actions";
import "./checkout-item.scss";

const CheckOutItem = ({ cartItem, clearItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={()=>clearItem(cartItem)}>&#10005;</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
