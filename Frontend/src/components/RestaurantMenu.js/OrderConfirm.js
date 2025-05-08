import React from "react";
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function OrderConfirm() {
  const navigate = useNavigate();

  const handleOrderDetails = () => {
    navigate("/my-profile/orders");
  };
  return (
    <div>
      <h1 className="font-bold">
        Your Order Confirmed
        <span className="ml-6">
          <CheckCircleIcon className="text-green-600" />
        </span>
      </h1>
      <button
        onClick={handleOrderDetails}
        className="p-1 mt-6 bg-green-600 w-[560px] font-bold text-white"
      >
        View Order Details
      </button>
    </div>
  );
}

export default OrderConfirm;
