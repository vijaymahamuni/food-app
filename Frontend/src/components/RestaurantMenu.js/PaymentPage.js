import React, { useState } from "react";
import PaymentMethodPage from "./PaymentMethodPage";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useSelector } from "react-redux";

function PaymentPage({ handleSuccessPayment }) {
  const [showPayment, setShowPayment] = useState(false);
  const [showPayDone, setShowPayDone] = useState(false);
  const CartItemsData = useSelector((store) => store.cart.items);

  const handlePayProcess = () => {
    setShowPayDone(true);
    handleSuccessPayment();
  };
  return (
    <div>
      <p className="font-bold">
        Choose payment method{" "}
        {showPayDone && (
          <span className="ml-6">
            <CheckCircleIcon className="text-green-600" />
          </span>
        )}
      </p>
      {showPayDone === false ? (
        <>
          <button
            className="p-1 mt-6 bg-green-600 w-[560px] font-bold text-white"
            onClick={() => setShowPayment(true)}
          >
            PROCEED TO PAY
          </button>
          {showPayment && (
            <PaymentMethodPage
              handlePayProcess={handlePayProcess}
              cartItems={CartItemsData}
            />
          )}{" "}
        </>
      ) : (
        <>
          <h1>Payment Sent Successfully </h1>
        </>
      )}
    </div>
  );
}

export default PaymentPage;
