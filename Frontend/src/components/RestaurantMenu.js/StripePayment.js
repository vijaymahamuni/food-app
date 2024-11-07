import axios from "axios";
import React from "react";
import { REACT_APP_HOST } from "../../utils/Host_pass";
import { useDispatch } from "react-redux";
import { clearItems } from "../../utils/cartSlice";

const StripePayment = ({ cartItems, addressDetails }) => {
  // console.log("addressDetails", addressDetails);
  // console.log("cartItems", cartItems);
  const ownerId = localStorage.getItem("customerId");
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
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
    dispatch(clearItems());
    const removeAllItemsApi = await axios.delete(
      `${REACT_APP_HOST}/api/cart/removeCartItems`
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
