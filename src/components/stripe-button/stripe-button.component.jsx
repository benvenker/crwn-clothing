import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_SgyZmeUA7ehSOX4KNrtzr53300GUoUh8tP";

  const onToken = token => {
    console.log(token);
    alert("Payment successful");
  };
  return (
    <StripeCheckout
      name="Crown Clothing Co."
      description={`Your total value is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      label="Pay Now"
      billingAddress
      shippingAddress
      iamge="https://svgshare.com/i/CUz.svg"
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
