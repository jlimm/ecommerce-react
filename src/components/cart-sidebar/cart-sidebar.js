import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { cartSidebarHidden } from "../../redux/cart/cart-actions";
import {
  selectCartHidden,
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart-selectors";
import Announcement from "../announcement/announcement";
import CustomButtom from "../button/button";
import CartItem from "../cart-item/cart-item";

import "./cart-sidebar.scss";

const CartSidebar = ({ cartSidebarHidden, cartItems, hidden, history,total }) => {
  const ref = useRef();
  
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    if (!hidden) {
      document.querySelector("body").style.overflow = "hidden";

    } else {
      document.querySelector("body").style.overflow = "";

    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });

  const handleOutsideClick = (event) => {
    if (!hidden && ref.current && !ref.current.contains(event.target)) {
      cartSidebarHidden();
    }
  };


  return (
    <div className={`nav ${hidden ? "" : "visible "}nav-white`} ref={ref}>
      <div className="cart-header">
        <span className="heading cart-title">Cart</span>
        <button onClick={cartSidebarHidden} className="nav-btn close-btn">
          <i className="fas fa-times"></i>
        </button>
      </div>

      <div className="cart-main">
        {cartItems.length ? (
          <div className="cart-content">
            <Announcement />
            <div className="cart-itemlist">
              {cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} item={cartItem} />
              ))}
            </div>
          </div>
        ) : (
          <div className="cart-empty Heading">Your Cart is empty</div>
        )}
      </div>
      {cartItems.length ? (
        <div className="cart-footer">
          <CustomButtom onClick={()=>{
            history.push("/checkout");
            cartSidebarHidden();
          }}>
            Checkout {total}
          </CustomButtom>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  hidden: selectCartHidden,
  total: selectCartTotal
});

const mapDispatchToProps = (dispatch) => ({
  cartSidebarHidden: () => dispatch(cartSidebarHidden()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartSidebar)
);
