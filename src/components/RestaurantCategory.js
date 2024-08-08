import ItemCards from "./ItemCards";
const RestaurantCategory = ({ item,showItems,setShowIndex}) => {
    const handleClick = () => {
        setShowIndex();
    }
    return <div className="w-6/12 mx-auto m-4 p-4 bg-gray-50 font-bold shadow-lg">
        <div>
            <div className="flex justify-between cursor-pointer" onClick={()=>handleClick()}>
                <p>{item?.card?.card?.title}({item?.card?.card?.itemCards?.length})</p>
                <span >▼</span>
            </div>
            {showItems && <ItemCards itemcard={item?.card?.card?.itemCards} />
            }
        </div>


    </div>
}
export default RestaurantCategory;