import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { cartSidebarHidden } from "../../redux/cart/cart-actions";


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
      <button onClick={cartSidebarHidden} className="nav-btn close-btn">
        <i className="fas fa-times"></i>
      </button>

      <ul className="list">
        <li>items1</li>
        <li>items2</li>
        <li>items3</li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  cartSidebarHidden: () => dispatch(cartSidebarHidden()),
});

export default connect(null, mapDispatchToProps)(CartSidebar);
