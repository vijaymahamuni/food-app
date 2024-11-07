import axios from "axios";
import { REACT_APP_HOST } from "../../utils/Host_pass";
import UserContext from "../../utils/UserContext";
import { useContext, useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Orders = () => {
  const { loggedInUser } = useContext(UserContext);
  const ownerId = localStorage.getItem("customerId");
  const [orders, setOrders] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(
      `${REACT_APP_HOST}/api/order/getOrderdata/${ownerId}`
    );
    console.log("get Order Details", res.data.data);
    if (res.data.data.length !== 0) {
      setOrders(res.data.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-6/12  mx-auto">
      <h1 className="text-2xl font-bold text-center">My Orders</h1>
      {orders.map((order, index) => (
        <div key={order._id}>
          {order.orderItems.map((item) => (
            <div key={item._id}>
              <div className="flex justify-between mt-2 p-4 bg-gray-50">
                {/* Left side: Image and Text */}
                <div className="flex">
                  <img
                    src={`http://localhost:5000/` + item.file}
                    alt="menuImg"
                    className="w-16 h-16 rounded-lg"
                  />
                  <div className="ml-6">
                    <h1 className="text-md font-semibold">{item.name}</h1>
                    <h1 className="mt-2">₹{item.price}</h1>
                  </div>
                </div>

                {/* Right side: Button */}
                <div>
                  <button className="p-1 mt-2 font-thin rounded-sm text-sm bg-[#f84260] w-20 text-white">
                    PENDING
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Orders;
