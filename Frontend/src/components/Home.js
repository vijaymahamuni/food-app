import React, { useEffect, useState } from "react";
import HomePage1 from "../images/Home_page1.jpg";
import biriyani_img1 from "../images/biriyani.jpg";
import axios from "axios";
import { REACT_APP_HOST } from "../utils/Host_pass";
function Home() {
  const [restaurantList, setRestaurantList] = useState([]);
  const fetchData = async () => {
    const resData = await axios.get(
      `${REACT_APP_HOST}/api/owner/getRestroList`
    );
    // console.log("getList of Restro", resData.data.data);
    setRestaurantList(resData.data.data);
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
        <h1 className="text-5xl font-bold">Welcome to the Foodie </h1>
        <h1 className="text-3xl mt-6 ">
          Taste Convenience:Food ,Fast and Delivered{" "}
        </h1>
      </div>
      <div className=" w-11/12 mx-auto p-4">
        <h1 className="text-2xl text-gray-500">What's on your mind?</h1>
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
      <div className=" w-11/12 mx-auto p-4">
        <h1 className="text-2xl text-gray-500">
          Top restaurant chains in Chennai
        </h1>
        {restaurantList && restaurantList.length > 0 ? (
          restaurantList.map((item, index) => (
            <div key={index}>
              <h1>{item.name}</h1>
              <img src={item.file} alt="error" />
            </div>
          ))
        ) : (
          <p>No restaurants available</p>
        )}
      </div>
    </div>
  );
}

export default Home;
