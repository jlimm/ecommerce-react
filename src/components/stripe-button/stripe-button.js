import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
  process.env.REACT_APP_STRIPE_KEY;

  const onToken = (token) => {
    console.log(token);
    alert("payment successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Stripe Pay"
      billingAddress
      shippingAddress
      description={`Total $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
