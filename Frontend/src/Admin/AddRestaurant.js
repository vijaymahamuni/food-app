import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
function AddRestaurant() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [cuisineType, setCuisineType] = useState("");
  const [openingHours, setOpeningHours] = useState(
    "Mon-Sun: 9.00 AM - 9.00 PM"
  );
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [emailid, setEmailid] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [file, setFile] = useState();

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  };
  return (
    <div className="w-7/12  mx-auto">
      <h1 className="pt-6 font-bold text-2xl text-center">
        Add New Restaurant
      </h1>
      <div className="flex">
        <div className="p-6 ml-2 mt-4 w-20 border-2 rounded-lg text-center">
          <input
            type="file"
            id="fileInput"
            className="hidden" // Keep the file input hidden
            onChange={handleChange}
          />
          <label htmlFor="fileInput" className="cursor-pointer">
            <AddPhotoAlternateIcon />
          </label>
        </div>
        {file && (
          <div>
            <img
              src={file}
              alt="selectedfile"
              className="w-20 h-20 mt-[12px] ml-4 rounded-sm"
            />
          </div>
        )}
      </div>

      <div className="mt-1 ">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "100ch" },
          }}
          noValidate
        >
          <TextField
            id="outlined-textarea"
            type="text"
            label="Name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-white"
          />
        </Box>
      </div>
      <div className="mt-[2px]">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "100ch" },
          }}
          noValidate
        >
          <TextField
            id="outlined-textarea"
            type="text"
            label="Description"
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="text-white"
          />
        </Box>
      </div>
      <div className="flex">
        <div className="mt-[2px]">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "49ch" },
            }}
            noValidate
          >
            <TextField
              id="outlined-textarea"
              type="text"
              label="CuisinType"
              name="cuisineType"
              placeholder="Cuisine Type"
              value={cuisineType}
              onChange={(e) => setCuisineType(e.target.value)}
              className="text-white"
            />
          </Box>
        </div>
        <div className="mt-[2px]">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "49ch" },
            }}
            noValidate
          >
            <TextField
              id="outlined-textarea"
              type="text"
              label="Opening Hours"
              name="openingHours"
              placeholder="Opening Hours"
              value={openingHours}
              onChange={(e) => setOpeningHours(e.target.value)}
              className="text-white"
            />
          </Box>
        </div>
      </div>
      <div className="mt-[2px]">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "100ch" },
          }}
          noValidate
        >
          <TextField
            id="outlined-textarea"
            type="text"
            label="Street Address"
            name="streetAddress"
            placeholder="Street Address"
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
            className="text-white"
          />
        </Box>
      </div>
      <div className="flex">
        <div className="mt-[2px]">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "32ch" },
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
        <div className="mt-[2px]">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "32ch" },
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
        </div>
        <div className="mt-[2px]">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "32ch" },
            }}
            noValidate
          >
            <TextField
              id="outlined-textarea"
              type="text"
              label="Postal Code"
              name="postalCode"
              placeholder="Postal Code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="text-white"
            />
          </Box>
        </div>
      </div>
      <div className="mt-[2px]">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "100ch" },
          }}
          noValidate
        >
          <TextField
            id="outlined-textarea"
            type="text"
            label="Country"
            name="country"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="text-white"
          />
        </Box>
      </div>
      <div className="flex">
        <div className="mt-[2px]">
          <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 1, width: "49ch" } }}
            noValidate
          >
            <TextField
              id="outlined-textarea"
              type="email"
              label="Email Address"
              name="email"
              placeholder="Email Address"
              value={emailid}
              onChange={(e) => setEmailid(e.target.value)}
            />
          </Box>
        </div>
        <div className="mt-[2px]">
          <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 1, width: "49ch" } }}
            noValidate
          >
            <TextField
              id="outlined-textarea"
              type="mobilenum"
              label="Mobile No"
              name="mobile"
              placeholder="Mobile No"
              value={mobileno}
              onChange={(e) => setMobileno(e.target.value)}
            />
          </Box>
        </div>
      </div>
      <div className="flex">
        <div className="mt-[2px]">
          <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 1, width: "49ch" } }}
            noValidate
          >
            <TextField
              id="outlined-textarea"
              type="email"
              label="Twitter"
              name="twitter"
              placeholder="Twitter"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
            />
          </Box>
        </div>
        <div className="mt-[2px]">
          <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 1, width: "49ch" } }}
            noValidate
          >
            <TextField
              id="outlined-textarea"
              type="text"
              label="Instagram"
              name="instagram"
              placeholder="Instagram"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
            />
          </Box>
        </div>
      </div>
      <button className="p-2 rounded-sm w-44 m-2 text-white text-center bg-[#f84260]">
        CREATE RESTAURANT
      </button>
    </div>
  );
}

export default AddRestaurant;
