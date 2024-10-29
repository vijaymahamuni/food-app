import React from "react";

const StripePayment = () => {
  const handlePayment = () => {
    // Replace with your Stripe Payment Link
    window.location.href = "https://buy.stripe.com/test_4gwcOL8um0rI8eI6oo";
  };

  return (
    <div>
      {/* <h1>Product Checkout</h1>
      <p>Price: $10.00</p> */}
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};
export default StripePayment;
