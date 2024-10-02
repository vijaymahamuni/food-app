import React from "react";
import HomePage1 from "../images/Home_page1.jpg";
import biriyani_img1 from "../images/biriyani.jpg";
function Home() {
  return (
    <div>
      <img
        src={HomePage1}
        className="object-none w-[100%] h-[650px]"
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
          {" "}
          Top restaurant chains in Chennai
        </h1>
      </div>
    </div>
  );
}

export default Home;
