import React from "react";
import {connect} from 'react-redux';
import { cartSidebarHidden } from "../../redux/cart/cart-actions";

const CartIcon = ({cartSidebarHidden}) => (
  <div style={{cursor:"pointer"}} className="option" onClick={cartSidebarHidden} >
    Cart
  </div>
);

const mapDispatchToProps = dispatch => ({
    cartSidebarHidden: () => dispatch(cartSidebarHidden())
})
export default connect(null, mapDispatchToProps) (CartIcon);