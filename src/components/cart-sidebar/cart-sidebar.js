import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { cartSidebarHidden } from "../../redux/cart/cart-actions";
import Announcement from "../announcement/announcement";
import CustomButtom from "../button/button";
import CartItem from "../cart-item/cart-item";

import "./cart-sidebar.scss";

const CartSidebar = ({ cartSidebarHidden, cartItems, hidden }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const ref = useRef();

  useEffect(() => {
    let sum=0;
    cartItems.forEach((cartItem) => {
 
      
      sum += cartItem.quantity * cartItem.price;
 

      setTotalPrice(sum);
    })
    document.addEventListener("click", handleOutsideClick);
    if(!hidden){
      document.querySelector("body").style.overflow = "hidden";
    } else{
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
    <div className={`nav ${hidden? "": "visible "}nav-white` } ref={ref}>
      <div className="cart-header" >
        <span className="heading cart-title">Cart {cartItems.length}</span>
        <button onClick={cartSidebarHidden} className="nav-btn close-btn">
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div className="cart-main">
        <div className="cart-content">
          <Announcement />
          <div className="cart-itemlist">
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))}
          </div>
        </div>
      </div>

      <div className="cart-footer">
        {<CustomButtom type="submit">Checkout {totalPrice}</CustomButtom>}
      </div>
    </div>
  );
};

const mapStateToProps = ({ cart: { hidden, cartItems } }) => ({
  hidden, cartItems
});

const mapDispatchToProps = (dispatch) => ({
  cartSidebarHidden: () => dispatch(cartSidebarHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartSidebar);
