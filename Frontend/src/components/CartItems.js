import { useDispatch, useSelector } from "react-redux";
import ItemCards from "./ItemCards";
import { clearItems } from "../utils/cartSlice";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const itemcard = useSelector((store) => store.cart.items);
  // console.log("cartData", itemcard)
  const dispatch = useDispatch();
  const clearCart = () => {
    dispatch(clearItems());
  };
  const navigate = useNavigate();

  const handle_Homepagelink = () => {
    navigate("/");
  };
  return (
    <div>
      <h1 className=" mt-2 text-4xl font-[500] text-center">Cart</h1>
      {itemcard.length !== 0 ? (
        <div className="w-6/12 mx-auto">
          <button
            className="p-2 h-9 mt-2 ml-[630px]  bg-gray-200 font-bold rounded-md"
            onClick={clearCart}
          >
            Clear Cart
          </button>

          <ItemCards itemcard={itemcard} />
        </div>
      ) : (
        <div className="m-4 w-2/12 mt-16 mx-auto">
          <img
            src="https://t4.ftcdn.net/jpg/04/81/88/03/360_F_481880392_qj1h5f1QVbYlzwh2n1yiJHM5L4KOUMSN.jpg"
            alt=""
            className="w-[250px] h-[200px]"
          />
          <h1 className="text-center text-xl font-bold mt-2">
            Your cart is empty
          </h1>
          <h1 className="mt-2 text-center">
            You can go to home page to view more restaurants
          </h1>
          <button
            className="p-2 m-2 mt-4 ml-14 bg-orange-400 hover:bg-orange-600 shadow-lg text-white font-bold"
            onClick={handle_Homepagelink}
          >
            See Restaurants
          </button>
        </div>
      )}
    </div>
  );
};
export default CartItems;
