import axios from "axios";
import React from "react";
import { REACT_APP_HOST } from "../../utils/Host_pass";
import { useDispatch } from "react-redux";
import { clearItems } from "../../utils/cartSlice";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { InputLabel } from "@mui/material";
import Select from "@mui/material/Select";
const StripePayment = ({ cartItems, addressDetails, setIsPopupOpen }) => {
  // console.log("addressDetails", addressDetails);
  // console.log("cartItems", cartItems);
  const ownerId = localStorage.getItem("customerId");
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const handlePayment = async () => {
    // Replace with your Stripe Payment Link
    // window.location.href = "https://buy.stripe.com/test_4gwcOL8um0rI8eI6oo";
    // const response = await axios.post(
    //   `${REACT_APP_HOST}/api/order/OrderItems`,
    //   {
    //     ownerId,
    //     token,
    //     cartItems,
    //   }
    // );
    // dispatch(clearItems());
    // const removeAllItemsApi = await axios.delete(
    //   `${REACT_APP_HOST}/api/cart/removeCartItems`
    // );
    alert("Ordered");
  };

  const [paymentMethod, setPaymentMethod] = React.useState("");

  const handleChange = (event) => {
    setPaymentMethod(event.target.value);
    // alert(event.target.value);
    if (event.target.value === "cash") {
      // alert("cash");
      // handlePayment();
      setIsPopupOpen();
    } else {
      alert("Phonepay/Gpay/card");
    }
  };

  return (
    <div>
      {/* <h1>Product Checkout</h1>
      <p>Price: $10.00</p> */}
      {/* <button
        // onClick={handlePayment}
        className="p-[6px]  rounded-sm border-2 hover:bg-primary hover:text-white"
      >
        Payment Method
      </button> */}

      <FormControl sx={{ width: "24ch" }}>
        <InputLabel id="demo-simple-select-label">Payment Method</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Payment Method"
          value={paymentMethod}
          onChange={handleChange}
        >
          <MenuItem value="cash">Cash on Delivery</MenuItem>
          <MenuItem value="online">Online Payment method</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
export default StripePayment;
