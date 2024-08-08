import { useDispatch } from "react-redux";
import { MENUCARD_IMG } from "../utils/constants";
import { addItems } from "../utils/cartSlice";
const ItemCards = ({ itemcard }) => {
    const dispatch=useDispatch();
    const handleAddItems =(items) =>{
        //Dispatch on Action
        dispatch(addItems(items))
    }
    console.log("addItems list", addItems)


    return (
        <div className="m-2 p-2  font-medium text-left">
            {itemcard.map((items) => (
                <div className="border-b-2 border-gray-200 flex justify-between">
                    <div className="w-9/12 my-4">
                        <div>
                            <p>{items?.card?.info?.name}</p>
                            <p>₹{items.card.info.price ? items.card.info.price / 100 : items.card.info.defaultPrice / 100}</p>
                            <span className={`${items?.card?.info?.ratings?.aggregatedRating?.rating > 3 ? 'text-green-600' : 'text-yellow-600'}`}>★{items?.card?.info?.ratings?.aggregatedRating?.rating}</span>

                        </div>

                        <p className="text-xs py-2 pb-8">{items.card.info.description}</p>
                    </div>
                    <div>
                        <button className="p-1 m-1 w-20 font-bold text-green-600 bg-white absolute my-28 ml-10 rounded-md" onClick={()=>handleAddItems(items)}>ADD</button>
                        <div className="p-2">
                            <img src={MENUCARD_IMG + items.card.info.imageId} className="w-36 h-32 rounded-lg" />
                        </div>
                    </div>

                </div>
            ))}

        </div>
    )
}
export default ItemCards;