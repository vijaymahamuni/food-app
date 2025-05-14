import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import HomeIcon from "@mui/icons-material/Home";
import axios from "axios";
import BusinessIcon from "@mui/icons-material/Business";
import { REACT_APP_HOST } from "../../utils/Host_pass";
import Shimmer from "../Shimmer";
import BoxShimmer from "../Shimmer/BoxShimmer";
import BoxShimmerList from "../Shimmer/BoxShimmerList";
import ListShimmer from "../Shimmer/ListShimmer";
import HomeShimmerList from "../Shimmer/HomeShimmerList";
const Addresses = () => {
  const [addressDetails, setAddressDetails] = useState([]);
  const ownerId = localStorage.getItem("customerId");
  const token = localStorage.getItem("token");

  const fetchData = async () => {
    try {
      const getAddrDetails = await axios.get(
        `${REACT_APP_HOST}/api/order/getAddressDetails/${ownerId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("getaddressdetails", getAddrDetails.data.data);
      setAddressDetails(getAddrDetails.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="p-1 w-5/6 ">
      <h1 className="text-2xl font-bold font-playfair text-center">
        Addresses
      </h1>
      <div className="mt-4 ">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              // width: 260,
              // height: 200,
            },
          }}
        >
          {addressDetails.length === 0 ? (
            <BoxShimmerList />
          ) : (
            <>
              {addressDetails.map((item) => (
                <Paper elevation={2} key={item._id}>
                  <div className="p-4">
                    <>
                      <div className="flex">
                        {item.addType === "Home" ? (
                          <HomeIcon />
                        ) : (
                          <BusinessIcon />
                        )}
                        <p className="ml-4 text-xl font-playfair">
                          {item.addType}
                        </p>
                      </div>
                      <div className="ml-10 font-montserrat">
                        <p>{item.name}</p>
                        <p>{item.streetAddress}</p>
                        <p>{item.state}</p>
                        <p>
                          {item.pincode},{item.city}
                        </p>
                      </div>
                      {/* <div className="mt-4">
                    <button className="p-1 ml-10 w-32 border-[1px] font-bold border-button font-playfair text-primary">
                      SELECT
                    </button>
                  </div> */}
                    </>
                  </div>
                </Paper>
              ))}
            </>
          )}
        </Box>
      </div>
      {/* <div className="mt-4 flex justify-center items-center">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 230,
              height: 120,
            },
          }}
        ></Box>{" "}
      </div> */}
    </div>
  );
};

export default Addresses;
