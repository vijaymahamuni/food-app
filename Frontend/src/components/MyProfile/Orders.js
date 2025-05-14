import axios from "axios";
import { REACT_APP_HOST } from "../../utils/Host_pass";
// import UserContext from "../../utils/UserContext";
import { useEffect, useState } from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import OrderDetails from "./OrderDetails";
import { setOrders } from "../../utils/orderSlice";
import ListShimmer from "../Shimmer/ListShimmer";
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
  const yourDeleteFunction = (id) => {
    // Your delete logic goes here (e.g., API call, state update)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // ✅ Call your custom delete function here
        CancelOrder(id);

        Swal.fire({
          title: "Canceled!",
          text: "Your order has been canceled.",
          icon: "success",
        });
      }
    });
  };
  const CancelOrder = (id) => {
    console.log("cancelId", id);

    const cancelOrder = getOrderList.map((item) => {
      return {
        ...item,
        orderItems: item.orderItems.filter((orderItem) => orderItem._id !== id),
      };
    });

    const CurrCancelItem = getOrderList
      .map((item) => ({
        ...item,
        orderItems: item.orderItems.filter((orderItem) => orderItem._id === id),
      }))
      .filter((item) => item.orderItems.length > 0); // Filter out items with empty orderItems

    console.log("cancelOrder", cancelOrder);
    // console.log("CurrCancelId", CurrCancelItem[0]._id);
    const CurrCancelId = CurrCancelItem[0]._id;
    const response = axios.delete(
      `${REACT_APP_HOST}/api/order/delOrderCancel/${CurrCancelId}`
    );
    // console.log(response.data.message);
    dispatch(setOrders(cancelOrder));
  };
  const [selectedOrder, setSelectedOrder] = useState(null);

  return (
    <div className="w-8/12  mx-auto ">
      <h1 className="text-2xl font-bold text-center">My Orders</h1>
      {getOrderList.length === 0 ? (
        <ListShimmer />
      ) : (
        <>
          {getOrderList.map((order) => (
            <div key={order._id}>
              {order.orderItems.map((item) => (
                <div
                  key={item._id}
                  className="bg-white shadow-md rounded-xl p-4 cursor-pointer hover:scale-[1.02] transition-all duration-200 mt-4"
                >
                  <div className="flex justify-between ">
                    {/* Left side: Image and Text */}
                    <div
                      className="flex"
                      onClick={() => setSelectedOrder(item)}
                    >
                      <img
                        src={
                          `https://food-app-backend-41z6.onrender.com/` +
                          item.file
                        }
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
                          onClick={() => yourDeleteFunction(item._id)}
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
        </>
      )}

      {selectedOrder && (
        <OrderDetails
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}
    </div>
  );
};
export default Orders;
