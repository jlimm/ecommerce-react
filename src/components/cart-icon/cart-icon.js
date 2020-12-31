import React from "react";
import { connect } from "react-redux";
import { cartSidebarHidden } from "../../redux/cart/cart-actions";
import { selectCartItemsCount } from "../../redux/cart/cart-selectors";
import './cart-icon.scss';

const CartIcon = ({ cartSidebarHidden, itemCount }) => (
  <div
    style={{ cursor: "pointer" }}
    className="option"
    onClick={cartSidebarHidden}
  >
      Cart {itemCount > 0 && `(${itemCount})`}
  </div>
);

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  cartSidebarHidden: () => dispatch(cartSidebarHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
