import React from "react";
import StripeCheckout from "react-stripe-checkout";
import SpecializedLogoPNG from "../../assets/images/icons/SpecializedNavLogo.png";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_ZvrAvM18ClC3CbjUwZBy32dy002cFa7fDY";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful!");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Specialized"
      billingAddress
      shippingAddress
      image={SpecializedLogoPNG}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
