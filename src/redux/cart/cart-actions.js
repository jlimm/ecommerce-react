import CartActionTypes from "./cart-types";

export const cartSidebarHidden = () => ({
  type: CartActionTypes.CART_SIDEBAR_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});
