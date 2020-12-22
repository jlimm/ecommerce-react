import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { cartSidebarHidden } from "../../redux/cart/cart-actions";
import Announcement from "../announcement/announcement";
import CustomButtom from "../button/button";

import "./cart-sidebar.scss";

const CartSidebar = ({ cartSidebarHidden }) => {
  const ref = useRef();
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });

  const handleOutsideClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      cartSidebarHidden();
    }
  };
  return (
    <div className="nav visible nav-white" ref={ref}>
      <div className="cart-header">
        <span className="heading cart-title">Cart</span>
        <button onClick={cartSidebarHidden} className="nav-btn close-btn">
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div className="cart-main">
        <div className="cart-content">
          <Announcement />
        </div>

        <div className="cart-footer">
          <CustomButtom type="submit">Checkout</CustomButtom>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  cartSidebarHidden: () => dispatch(cartSidebarHidden()),
});

export default connect(null, mapDispatchToProps)(CartSidebar);
