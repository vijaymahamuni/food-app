// import axios from "axios";
import React, { useEffect, useState } from "react";
// import { REACT_APP_HOST } from "../utils/Host_pass";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import CloseIcon from "@mui/icons-material/Close";
const RestroDetails = ({ reslistData, showRestrobtn }) => {
  const [restaurantData, setRestaurantData] = useState([reslistData]);
  // const ownerId = localStorage.getItem("customerId");
  const userName = localStorage.getItem("userName");
  // const fetchData = async () => {
  //   const resData = await axios.get(
  //     `${REACT_APP_HOST}/api/owner/getRestrodata/${ownerId}`
  //   );
  //   console.log("getList of Restro", resData.data.data);
  //   setRestaurantData(resData.data.data);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);
  // console.log("getRestroDetails data", reslistData);
  return (
    <div>
      {restaurantData.map((item) => (
        <div className="w-11/12 p-2 mx-auto" key={item._id}>
          <div className="flex justify-between">
            <div className="flex ">
              <div>
                <h1 className="text-4xl  font-bold ">{item.name}</h1>
              </div>
              <div>
                <button className="p-[2px] w-20 rounded-sm bg-[#f84260] text-white ml-8 mt-2">
                  CLOSE
                </button>
              </div>
            </div>

            <div>
              <CloseIcon
                className="ml mt-2 cursor-pointer"
                onClick={showRestrobtn}
              />
            </div>
          </div>

          <div className="p-4 h-[230px] mt-10 bg-gray-100 shadow-md">
            <h1 className="text-lg font-medium">Restaurant</h1>
            <div className="mt-4">
              <div className="flex">
                <p className="w-40 font-medium">Owner</p>
                <h1>
                  - <span className="ml-4">{userName}</span>
                </h1>
              </div>
              <div className="flex  mt-[6px]">
                <h1 className="w-40 font-medium">Restaurant Name</h1>
                <h1>
                  - <span className="ml-4">{item.name}</span>
                </h1>
              </div>
              <div className="flex  mt-[6px]">
                <h1 className="w-40 font-medium">CuisineType</h1>
                <h1>
                  - <span className="ml-4">{item.cuisineType}</span>
                </h1>
              </div>
              <div className="flex  mt-[6px]">
                <h1 className="w-40 font-medium">OpeningHours</h1>
                <h1>
                  - <span className="ml-4">{item.openingHours}</span>
                </h1>
              </div>
              <div className="flex mt-[8px]">
                <h1 className="w-40 font-medium">Status</h1>
                <h1>
                  -{" "}
                  <span className="ml-4">
                    <button className="p-[2px] w-20 rounded-2xl  bg-green-400">
                      Open
                    </button>
                  </span>
                </h1>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="p-4 h-[200px] w-[400px] mt-6 bg-gray-100 shadow-md">
              <h1 className="text-lg font-medium">Address</h1>
              <div className="flex  mt-[15px]">
                <h1 className="w-40 font-medium">Country</h1>
                <h1>
                  - <span className="ml-4">{item.country}</span>
                </h1>
              </div>
              <div className="flex  mt-[6px]">
                <h1 className="w-40 font-medium">City</h1>
                <h1>
                  - <span className="ml-4">{item.city}</span>
                </h1>
              </div>
              <div className="flex  mt-[6px]">
                <h1 className="w-40 font-medium">Postal Code</h1>
                <h1>
                  - <span className="ml-4">{item.postalCode}</span>
                </h1>
              </div>
              <div className="flex  mt-[6px]">
                <h1 className="w-40 font-medium">Street Address</h1>
                <h1>
                  - <span className="ml-4">{item.streetAddress}</span>
                </h1>
              </div>
            </div>
            <div className="p-4 h-[200px] ml-4 w-4/5 mt-6 bg-gray-100 shadow-md">
              <h1 className="text-lg font-medium">Contact</h1>
              <div className="flex  mt-[12px]">
                <h1 className="w-40 font-medium">Email</h1>
                <h1>
                  - <span className="ml-4">{item.emailid}</span>
                </h1>
              </div>
              <div className="flex  mt-[10px]">
                <h1 className="w-40 font-medium">Mobile</h1>
                <h1>
                  - <span className="ml-4">{item.mobileno}</span>
                </h1>
              </div>
              <div className="flex  mt-[20px]">
                <h1 className="w-40 font-medium">Social</h1>
                <h1>
                  -{" "}
                  <span className="ml-4">
                    <InstagramIcon />
                    <XIcon className="ml-2" />
                    <LinkedInIcon className="ml-2" />
                    <FacebookIcon className="ml-2" />
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestroDetails;
