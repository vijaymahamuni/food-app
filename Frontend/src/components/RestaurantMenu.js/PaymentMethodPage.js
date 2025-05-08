import React, { useState } from "react";
import { REACT_APP_HOST } from "../../utils/Host_pass";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearItems } from "../../utils/cartSlice";
import Swal from "sweetalert2";

const PaymentMethodPage = ({ handlePayProcess, cartItems, addressDetails }) => {
  const [method, setMethod] = useState("");
  const [paymentDetails, setPaymentDetails] = useState({
    upiId: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };
  const ownerId = localStorage.getItem("customerId");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const yourDeleteFunction = () => {
    // Your delete logic goes here (e.g., API call, state update)
    console.log("Item deleted!");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle payment process
    // alert(`Payment method: ${method}`);
    handlePayProcess();
    console.log(paymentDetails);
    const response = await axios.post(
      `${REACT_APP_HOST}/api/order/OrderItems`,
      {
        ownerId,
        token,
        cartItems,
      }
    );
    Swal.fire({
      title: "Order Confirmed!",
      text: "Your order has been successfully placed.",
      icon: "success",
      confirmButtonText: "Go to Orders",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/my-profile/orders"); // Replace with your actual order list route
      }
    });
    dispatch(clearItems());
    const removeAllItemsApi = await axios.delete(
      `${REACT_APP_HOST}/api/cart/removeCartItems`
    );
    // navigate("/my-profile/orders");
  };

  return (
    <div className="max-w-md mx-auto p-4 shadow-lg rounded-lg bg-white">
      <h2 className="text-2xl font-bold mb-4">Select Payment Method</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1">Choose Method:</label>
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">-- Select --</option>
            <option value="upi">UPI</option>
            <option value="card">Credit/Debit Card</option>
            <option value="cod">Cash on Delivery</option>
          </select>
        </div>

        {method === "upi" && (
          <div className="mb-4">
            <label className="block mb-1">UPI ID</label>
            <input
              type="text"
              name="upiId"
              value={paymentDetails.upiId}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        )}

        {method === "card" && (
          <>
            <div className="mb-2">
              <label className="block mb-1">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={paymentDetails.cardNumber}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={paymentDetails.expiry}
                onChange={handleChange}
                className="w-1/2 p-2 border rounded"
                required
              />
              <input
                type="password"
                name="cvv"
                placeholder="CVV"
                value={paymentDetails.cvv}
                onChange={handleChange}
                className="w-1/2 p-2 border rounded"
                required
              />
            </div>
          </>
        )}

        <button
          type="submit"
          className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Proceed to Pay
        </button>
      </form>
    </div>
  );
};

export default PaymentMethodPage;
