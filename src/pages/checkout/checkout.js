import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckOutItem from "../../components/checkout-item/checkout-item";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart-selectors";

import {
  CheckOutPageHeader,
  CheckOutHeader,
  CheckOutPageContainer,
  CheckOutPageContent,
  HeaderBlock,
  TotalPrice,
} from "./checkout.styles";

const CheckOutPage = ({ cartItems, total }) => {
  return (
    <CheckOutPageContainer>
      <CheckOutPageHeader className="Heading">CART</CheckOutPageHeader>
      <CheckOutPageContent>
        <CheckOutHeader>
          <HeaderBlock className="Heading">Product</HeaderBlock>
          <HeaderBlock className="Heading"></HeaderBlock>
          <HeaderBlock className="Heading">Quantity</HeaderBlock>
          <HeaderBlock className="Heading">Total</HeaderBlock>
        </CheckOutHeader>
        {cartItems.map((cartItem) => (
          <CheckOutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <TotalPrice>
          <span>TOTAL: ${total}</span>
        </TotalPrice>
        <StripeCheckoutButton price={total} />
      </CheckOutPageContent>
    </CheckOutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOutPage);
