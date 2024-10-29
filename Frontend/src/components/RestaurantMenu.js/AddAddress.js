import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { REACT_APP_HOST } from "../../utils/Host_pass";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { MenuItem, FormControl, Select, InputLabel } from "@mui/material";

const AddAddress = ({ close_popup }) => {
  const [name, setName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [addType, setAddType] = useState("");
  const [mobileno, setMobileno] = useState("");

  const loginUserid = localStorage.getItem("customerId");
  const MySwal = withReactContent(Swal);

  const Deliver_Add = async () => {
    try {
      const response = await axios.post(
        `${REACT_APP_HOST}/api/order/addAddress`,
        {
          name,
          streetAddress,
          state,
          pincode,
          city,
          loginUserid,
          addType,
          mobileno,
        }
      );
      console.log("reqSend", response.data);
      if (response.status === 200) {
        MySwal.fire({
          icon: "success",
          title: "Add new Address",
          text: "Your new Address details added Successfully...",
        });
      }
      close_popup();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      id="overlayr"
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center  backdrop-blur-none bg-black bg-opacity-60"
      onClick={(e) => e.target.id === "overlayr" && close_popup()} // Click outside to close
    >
      <div className="p-8 bg-gray-200 rounded-sm">
        <div className="mt-[10px]">
          <FormControl sx={{ m: 1, width: 301 }}>
            <InputLabel id="food-category-label">Select Type</InputLabel>
            <Select
              labelId="addresstype-label"
              id="addresstype-id"
              value={addType}
              label="Addresstype"
              onChange={(e) => setAddType(e.target.value)}
            >
              <MenuItem value="Home">Home</MenuItem>
              <MenuItem value="Work">Work</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="flex">
          <div className="mt-1 ">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "17ch" },
              }}
              noValidate
            >
              <TextField
                id="outlined-textarea"
                type="text"
                label="Name"
                name="name"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-white"
              />
            </Box>
          </div>
          <div className="mt-1">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "16ch" },
              }}
              noValidate
            >
              <TextField
                id="outlined-textarea"
                type="text"
                label="Mobileno"
                name="mobileno"
                placeholder="Mobileno"
                value={mobileno}
                onChange={(e) => setMobileno(e.target.value)}
                className="text-white"
              />
            </Box>
          </div>
        </div>

        <div className="mt-1 ">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "35ch" },
            }}
            noValidate
          >
            <TextField
              id="outlined-textarea"
              type="text"
              label="StreetAddress"
              name="streetAddress"
              placeholder="Street Address"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
              className="text-white"
            />
          </Box>
        </div>
        <div className="flex">
          <div className="mt-1 ">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "16ch" },
              }}
              noValidate
            >
              <TextField
                id="outlined-textarea"
                type="text"
                label="State"
                name="state"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="text-white"
              />
            </Box>
          </div>{" "}
          <div className="mt-1 ">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "17ch" },
              }}
              noValidate
            >
              <TextField
                id="outlined-textarea"
                type="text"
                label="Pincode"
                name="pincode"
                placeholder="Pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="text-white"
              />
            </Box>
          </div>{" "}
        </div>

        <div className="mt-1 ">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "35ch" },
            }}
            noValidate
          >
            <TextField
              id="outlined-textarea"
              type="text"
              label="City"
              name="city"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="text-white"
            />
          </Box>
        </div>
        <button
          className="p-1 w-28  bg-primary ml-2 mt-4 hover:shadow-lg text-white rounded-sm text-center text-sm"
          onClick={Deliver_Add}
        >
          DELIVER HERE
        </button>
      </div>
    </div>
  );
};

export default AddAddress;
