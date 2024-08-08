import { useDispatch, useSelector } from "react-redux";
import ItemCards from "./ItemCards";
import { clearItems } from "../utils/cartSlice";

const CartItems = () => {
    const itemcard = useSelector((store) => store.cart.items);
    // console.log("cartData", itemcard)
    const dispatch = useDispatch();
    const clearCart = () => {
        dispatch(clearItems());

    }
    return (
        <div className="w-6/12 mx-auto">
            <h1 className="p-4 m-4  text-center text-2xl font-bold">Cart</h1>
            <button className="p-2 h-9  ml-[630px]  bg-gray-200 font-bold rounded-md" onClick={clearCart}>Clear Cart</button>


            <ItemCards itemcard={itemcard} />

        </div>
    )
}
export default CartItems;