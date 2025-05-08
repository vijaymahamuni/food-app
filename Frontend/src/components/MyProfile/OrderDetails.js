import { motion } from "framer-motion";
import { CheckCircle, XCircle, PackageCheck } from "lucide-react";

const OrderDetails = ({ order, onClose }) => {
  console.log("getdata for order Details printed here:", order);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div className="bg-gradient-to-br from-white to-gray-100 p-6 rounded-3xl shadow-2xl w-[90%] max-w-md relative border border-gray-200">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-all"
          onClick={onClose}
        >
          <XCircle size={28} />
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-4 text-green-600">
          <CheckCircle size={48} />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-4">Order Confirmed</h2>

        {/* Order Info */}
        <div className="space-y-3 text-gray-800">
          <div>
            <p className="text-sm text-gray-500">Order ID</p>
            <p className="text-lg font-semibold">{order._id}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Customer Name</p>
            <p className="text-lg font-semibold">{"Sai Pallavi"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Amount</p>
            <p className="text-lg font-semibold">$ {order.price}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Payment Mode</p>
            <p className="text-lg font-semibold">{"Cash on Delivery"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Shipping Address</p>
            <p className="text-lg font-semibold">
              {"Ranga Street, Chennai, Tamilnadu - 600001"}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Phone Number</p>
            <p className="text-lg font-semibold">{"9384974729"}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Status</p>
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                order.Status === "Delivered"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {order.Status}
            </span>
          </div>

          {/* <div>
            <p className="text-sm text-gray-500 mb-1">Items Ordered</p>
            <ul className="list-disc list-inside text-base">
              {order.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <PackageCheck className="inline-block mr-2 text-blue-600" />
          <span className="text-sm text-gray-600">
            Track your order in the Orders section
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default OrderDetails;
