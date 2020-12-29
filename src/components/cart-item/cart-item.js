import React from "react";
import { connect } from "react-redux";
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from "../../redux/cart/cart-actions";
import "./cart-item.scss";

const CartItem = ({ item, clearItem, addItem, removeItem }) => {
  const { imageUrl, price, name, quantity, title } = item;
  return (
    <div className="cart-item">
      <div
        className="cart-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="item-details">
        <div className="name Heading">{name}</div>
        <div className="name Heading">{title}</div>
        <div className="price heading">$ {price}</div>
        <div className="actions Heading">
          <div className="quantity-selector">
            <div
              className="quantity-btn minus"
              onClick={() => removeItem(item)}
            >
              <svg
                className="icon-minus"
                role="presentation"
                viewBox="0 0 16 2"
              >
                <path
                  d="M1,1 L15,1"
                  stroke="currentColor"
                  fill="none"
                  fillRule="evenodd"
                  strokeLinecap="square"
                ></path>
              </svg>
            </div>
            <div className="current-quantity">{quantity}</div>
            <div className="quantity-btn plus" onClick={() => addItem(item)}>
              <svg
                className="icon-plus"
                role="presentation"
                viewBox="0 0 16 16"
              >
                <g
                  stroke="currentColor"
                  fill="none"
                  fillRule="evenodd"
                  strokeLinecap="square"
                >
                  <path d="M8,1 L8,15"></path>
                  <path d="M1,8 L15,8"></path>
                </g>
              </svg>
            </div>
          </div>
          <div
            className="remove-button Heading"
            onClick={() => clearItem(item)}
          >
            Remove
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
