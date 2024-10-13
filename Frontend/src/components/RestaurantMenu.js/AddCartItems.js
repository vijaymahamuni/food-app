import React, { useState } from "react";
import biriyani from "../../images/biriyani.jpg";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import HomeIcon from "@mui/icons-material/Home";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
const AddCartItems = () => {
  const [increQuant, setIncreQuant] = useState(1);
  const [totalAmount, setTotalAmount] = useState(250);
  const IncreItems = async () => {
    setIncreQuant((prevQuant) => {
      const newQuant = prevQuant + 1;
      setTotalAmount(250 * newQuant);
      return newQuant; // Update the quantity
    });
  };

  const DecrementItems = () => {
    setIncreQuant((prevQuant) => {
      if (prevQuant > 1) {
        const newQuant = prevQuant - 1;
        setTotalAmount(250 * newQuant);
        return newQuant; // Update the quantity
      }
      return prevQuant; // Prevent going below 1
    });
  };

  return (
    <div className=" w-12/12 mx-auto flex">
      <div className="p-6 w-[30%]  border-r-2">
        <div className="flex ">
          <div>
            <img src={biriyani} alt="biriyani" className="w-20 h-20" />
          </div>
          <div className="ml-4 ">
            <h1 className="text-lg">Burger</h1>
            <div className="flex mt-4 cursor-pointer">
              <RemoveCircleOutlineIcon
                fontSize="medium"
                onClick={DecrementItems}
                className="text-[#f84260]"
              />

              <h1 className="ml-4">{increQuant}</h1>
              <ControlPointIcon
                fontSize="medium"
                onClick={IncreItems}
                className="ml-4 text-[#f84260]"
              />
            </div>
          </div>
          <div className="ml-36 mt-8 ">
            <h1>₹{totalAmount}</h1>
          </div>
        </div>
        <div className="border-b-2 mt-8 "></div>

        <div className=" mt-8 ">
          <div className="mt-4">
            <h1 className="font-bold">Bill Details</h1>
            <div className="flex justify-between mt-4">
              <h1>Item Total</h1>
              <h1>{totalAmount}</h1>
            </div>
            <div className="flex justify-between mt-4">
              <h1>Delivery Fee</h1>
              <h1>₹30</h1>
            </div>
            <div className="flex justify-between mt-4">
              <h1>Platform Fee</h1>
              <h1>₹5</h1>
            </div>
            <div className="flex justify-between mt-4">
              <h1>GST and Restaurant Charges</h1>
              <h1>₹30</h1>
            </div>
          </div>
        </div>
        <div className="border-b-2 mt-4"></div>
        <div className="mt-3 flex justify-between">
          <h1>Total Pay</h1>
          <h1>₹1350</h1>
        </div>
      </div>

      <div className="p-6 w-[70%]">
        <h1 className="text-xl font-bold text-center">
          Choose Delivery Address
        </h1>
        <div className="mt-4">
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 230,
                height: 200,
              },
            }}
          >
            <Paper elevation={2}>
              <div className="p-4">
                <div className="flex">
                  <HomeIcon />
                  <p className="ml-4 text-lg ">Home</p>
                </div>
                <div className="ml-10">
                  <p>Vijay,2/186</p>
                  <p>600001,Chennai</p>
                  <p>India</p>
                </div>
                <div className="mt-4">
                  <button className="p-1 ml-10 w-32 border-[1px] font-bold border-[#f84260] text-[#f84260]">
                    SELECT
                  </button>
                </div>
              </div>
            </Paper>
            <Paper elevation={2}>
              <div className="p-4">
                <div className="flex">
                  <HomeIcon />
                  <p className="ml-4 text-lg ">Home</p>
                </div>
                <div className="ml-10">
                  <p>Vijay,</p>
                  <p>621206,Meenachipatti</p>
                  <p>Thuraiyur</p>
                </div>
                <div className="mt-4">
                  <button className="p-1 ml-10 w-32 border-[1px] font-bold border-[#f84260] text-[#f84260]">
                    SELECT
                  </button>
                </div>
              </div>
            </Paper>
          </Box>
        </div>
        <div className="mt-4">
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
          >
            <Paper elevation={2}>
              <div className="p-4">
                <div className="flex">
                  <AddLocationAltIcon />
                  <p className="ml-4 text-lg ">Add New Address</p>
                </div>
                <div className="ml-10"></div>
                <div className="mt-4">
                  <button className="p-1 ml-10 w-32 text-white  bg-[#f84260] ">
                    ADD
                  </button>
                </div>
              </div>
            </Paper>
          </Box>{" "}
        </div>
      </div>
    </div>
  );
};

export default AddCartItems;
