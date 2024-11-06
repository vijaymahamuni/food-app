import axios from "axios";
import React from "react";
import { REACT_APP_HOST } from "../../utils/Host_pass";

const StripePayment = ({ cartItems, addressDetails }) => {
  // console.log("addressDetails", addressDetails);
  // console.log("cartItems", cartItems);
  const ownerId = localStorage.getItem("customerId");
  const token = localStorage.getItem("token");
  const handlePayment = async () => {
    // Replace with your Stripe Payment Link
    // window.location.href = "https://buy.stripe.com/test_4gwcOL8um0rI8eI6oo";
    const response = await axios.post(
      `${REACT_APP_HOST}/api/order/OrderItems`,
      {
        ownerId,
        token,
        cartItems,
      }
    );
  };

  return (
    <div>
      {/* <h1>Product Checkout</h1>
      <p>Price: $10.00</p> */}
      <button
        onClick={handlePayment}
        className="p-[6px]  rounded-sm border-2 hover:bg-primary hover:text-white"
      >
        Pay Now
      </button>
    </div>
  );
};
export default StripePayment;
