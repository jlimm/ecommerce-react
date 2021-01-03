import React from "react";
import { connect } from "react-redux";
import { cartSidebarHidden } from "../../redux/cart/cart-actions";
import { selectCartItemsCount } from "../../redux/cart/cart-selectors";
import { CartIconContainer } from "./cart-icon.styles";

const CartIcon = ({ cartSidebarHidden, itemCount }) => (
  <CartIconContainer
    onClick={cartSidebarHidden}
  >
      Cart {itemCount > 0 && `(${itemCount})`}
  </CartIconContainer>
);

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  cartSidebarHidden: () => dispatch(cartSidebarHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
