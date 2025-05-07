import React, { useState } from "react";
import { Button, message, Steps, theme } from "antd";
import SelectAdd_details from "./SelectAdd_details";
import "./OrderSteps.css";
import PaymentPage from "./PaymentPage";
import OrderConfirm from "./OrderConfirm";
const OrderSteps = ({ addressData, prvPage, addressType }) => {
  const steps = [
    {
      title: "Address",
      content: (
        <SelectAdd_details
          addressdata={addressData}
          addressType={addressType}
          prvPage={prvPage}
        />
      ),
    },
    {
      title: "Payment",
      content: (
        <PaymentPage
          addressdata={addressData}
          addressType={addressType}
          prvPage={prvPage}
        />
      ),
    },
    {
      title: "Order",
      content: <OrderConfirm />,
    },
  ];
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    if (current < steps.length - 1) {
      setCurrent(current + 1);
    } else {
      message.success("Processing complete!");
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    marginTop: "10px",
  };

  const contentStyle = {
    width: "600px",
    minHeight: "100px", // Set a fixed minimum height for consistent size
    padding: "30px ",
    // textAlign: "center",
    // color: token.colorTextTertiary,
    backgroundColor: "#FAFAFA",
    borderRadius: "8px",
    // border: `1px solid ${token.colorBorder}`,
    // boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    cursor: "pointer",
    alignItems: "center", // Vertically center content
    justifyContent: "center", // Horizontally center content
    transition: "all 0.3s ease",
    margin: 0,
  };

  const buttonStyle = {
    margin: "0 8px",
    backgroundColor: "#f84260",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "6px 16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "40px",
        marginTop: "20px",
        marginLeft: "100px",
      }}
    >
      {/* Steps Section */}
      <Steps
        direction="vertical"
        current={current}
        items={items}
        // backgroundColor="#f84260"
        // style={{ width: "200px" }}
      />

      {/* Content Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {steps.slice(0, current + 1).map((step, index) => (
          <div
            key={index}
            style={contentStyle}
            // onMouseEnter={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = "rgba(0, 0, 0, 0.4)";
              e.target.style.transform = "translateY(-5px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = "none";
              e.target.style.transform = "none";
            }}
          >
            {step.content}
          </div>
        ))}

        {/* Buttons Section */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          {current > 0 && (
            <Button
              onClick={prev}
              style={{
                ...buttonStyle,
                backgroundColor: "#f84260",
                color: "white",
              }}
            >
              Previous
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button onClick={next} style={buttonStyle}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              onClick={() => message.success("Processing complete!")}
              style={{
                ...buttonStyle,
                backgroundColor: "#52c41a",
              }}
            >
              Done
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderSteps;
