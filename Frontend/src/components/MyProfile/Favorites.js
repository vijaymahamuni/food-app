import axios from "axios";
import { useEffect, useState } from "react";
import { REACT_APP_HOST } from "../../utils/Host_pass";
import { useDispatch, useSelector } from "react-redux";
import Shimmer from "../Shimmer";
import RestaurantCard from "../RestaurantCard";
import { setFavts } from "../../utils/favoriteSlice";
import { setRestros } from "../../utils/restaurantSlice";
import HomeShimmerList from "../Shimmer/HomeShimmerList";

const Favorites = () => {
  // const [favtList, setFavtList] = useState([]);
  const dispatch = useDispatch();
  const getFavtdata = useSelector((state) => state.favorite.favorites);
  console.log("getFavtdata", getFavtdata);

  const fetchData = async () => {
    try {
      const resData = await axios.get(
        `${REACT_APP_HOST}/api/owner/getRestroList`
      );
      // setFavtList(resData.data.data);
      // Optionally update Redux store:
      dispatch(setFavts(resData.data.data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to prevent infinite loop

  return (
    <div className="flex flex-wrap mt-4">
      {getFavtdata.length > 0 ? (
        getFavtdata
          .filter((item) => item.liked === "true")
          .map((item) => <RestaurantCard resData={item} key={item._id} />)
      ) : (
        <HomeShimmerList />
      )}
    </div>
  );
};

export default Favorites;
