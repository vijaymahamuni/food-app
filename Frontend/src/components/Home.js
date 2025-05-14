import React, { useEffect, useState } from "react";
import HomePage1 from "../images/Home_page1.jpg";
import biriyani_img1 from "../images/biriyani.jpg";
import axios from "axios";
import { REACT_APP_HOST } from "../utils/Host_pass";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { useDispatch, useSelector } from "react-redux";
import { setRestros } from "../utils/restaurantSlice";
import BoxShimmer from "./Shimmer/BoxShimmer";
import HomeShimmer from "./Shimmer/HomeShimmer";
import HomeShimmerList from "./Shimmer/HomeShimmerList";
function Home() {
  // const [restaurantList, setRestaurantList] = useState([]);
  const getFavtdata = useSelector((state) => state.restaurant.restaurants);
  console.log("initial Restaurnt List ", getFavtdata);
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      const resData = await axios.get(
        `${REACT_APP_HOST}/api/owner/getRestroList`
      );
      dispatch(setRestros(resData.data.data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <img
        src={HomePage1}
        className="object-none w-[100%] h-[650px] brightness-[.60]"
        alt="Home Page"
      />
      <div className="absolute top-[330px] text-center left-[29%] text-white  ">
        <h1 className=" font-bold font-playfair text-5xl ">
          Welcome to the Foodie{" "}
        </h1>
        <h1 className="mt-6 font-montserrat text-3xl ">
          Taste Convenience:Food ,Fast and Delivered{" "}
        </h1>
      </div>
      <div className=" w-11/12 mx-auto p-4">
        <h1 className="text-2xl text-textColor font-playfair">
          What's on your mind?
        </h1>
        <div className="flex justify-between">
          <img
            src={biriyani_img1}
            className="rounded-full w-40 h-40 object-cover mt-6 cursor-pointer"
            alt="biriyaniimg"
          />
          <img
            src={biriyani_img1}
            className="rounded-full w-40 h-40 object-cover mt-6 cursor-pointer"
            alt="biriyaniimg"
          />
          <img
            src={biriyani_img1}
            className="rounded-full w-40 h-40 object-cover mt-6 cursor-pointer"
            alt="biriyaniimg"
          />
          <img
            src={biriyani_img1}
            className="rounded-full w-40 h-40 object-cover mt-6"
            alt="biriyaniimg"
          />
          <img
            src={biriyani_img1}
            className="rounded-full w-40 h-40 object-cover mt-6"
            alt="biriyaniimg"
          />
          <img
            src={biriyani_img1}
            className="rounded-full w-40 h-40 object-cover mt-6"
            alt="biriyaniimg"
          />
          <img
            src={biriyani_img1}
            className="rounded-full w-40 h-40 object-cover mt-6"
            alt="biriyaniimg"
          />
        </div>
      </div>
      <div className=" w-11/12 mx-auto ">
        <h1 className="text-2xl text-textColor font-playfair">
          Top restaurant chains in Chennai
        </h1>
        <div className="flex flex-wrap mt-4">
          {getFavtdata && getFavtdata.length > 0 ? (
            getFavtdata.map((item) => (
              // <Link key={item._id} to={"/restaurantmenu/" + item._id}>
              <RestaurantCard resData={item} key={item._id} />
              // </Link>
            ))
          ) : (
            <HomeShimmerList />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
