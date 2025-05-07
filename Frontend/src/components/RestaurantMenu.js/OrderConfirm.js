import React from "react";
import { useNavigate } from "react-router-dom";

function OrderConfirm() {
  const navigate = useNavigate();

  const handleOrderDetails = () => {
    navigate("/my-profile/orders");
  };
  return (
    <div>
      <h1>Your Order Confirmed</h1>
      <button onClick={handleOrderDetails}>View Order Details</button>
    </div>
  );
}

export default OrderConfirm;
