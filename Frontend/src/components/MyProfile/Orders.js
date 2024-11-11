import axios from "axios";
import { REACT_APP_HOST } from "../../utils/Host_pass";
// import UserContext from "../../utils/UserContext";
import { useEffect } from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { setOrders } from "../../utils/orderSlice";
const Orders = () => {
  // const { loggedInUser } = useContext(UserContext);
  const ownerId = localStorage.getItem("customerId");
  // const [orders, setOrders] = useState([]);
  const getOrderList = useSelector((state) => state.order.orders);
  const dispatch = useDispatch();
  const fetchData = async () => {
    const res = await axios.get(
      `${REACT_APP_HOST}/api/order/getOrderdata/${ownerId}`
    );
    // console.log("get Order Details", res.data.data);
    if (res.data.data.length !== 0) {
      // setOrders(res.data.data);
      dispatch(setOrders(res.data.data));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const CancelOrder = (id) => {
    // console.log("cancelId", id);
    const cancelOrder = getOrderList.map((item) => {
      return {
        ...item,
        orderItems: item.orderItems.filter((orderItem) => orderItem._id !== id),
      };
    });
    // console.log("cancelOrder", cancelOrder);
    dispatch(setOrders(cancelOrder));
  };

  return (
    <div className="w-8/12  mx-auto">
      <h1 className="text-2xl font-bold text-center">My Orders</h1>
      {getOrderList.map((order) => (
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
                <div className="mt-2">
                  <button
                    className={`p-1 w-[120px] mt-2 font-bold rounded-sm text-sm ${
                      item.Status === "Pending"
                        ? " bg-[#f84260]"
                        : item.Status === "Completed"
                        ? "bg-yellow-400"
                        : item.Status === "Out for Delivery"
                        ? "bg-yellow-400"
                        : item.Status === "Delivered"
                        ? "bg-green-700"
                        : "bg-[#f84260]"
                    }   text-white`}
                  >
                    {" "}
                    {item.Status}
                  </button>
                  {item.Status === "Pending" ? (
                    <button
                      className="p-1 ml-6 w-[120px] text-white bg-[#f84260] mt-2 font-bold rounded-sm text-sm"
                      onClick={() => CancelOrder(item._id)}
                    >
                      Cancel
                    </button>
                  ) : (
                    <></>
                  )}
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
