import React, { useEffect, useState } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { MenuItem, FormControl, Select, InputLabel } from "@mui/material";
import axios from "axios";
import { REACT_APP_HOST } from "../utils/Host_pass";

const AddMenuItem = () => {
  const [image, setImage] = useState();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [isVegitarian, setIsVegitarian] = useState("");
  const [isSeasonal, setIsSeasonal] = useState("");
  const handleChange = (e) => {
    // console.log(e.target.files);
    // setFile(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  const ownerId = localStorage.getItem("customerId");

  const AddMenuItem = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("ingredient", ingredient);
    formData.append("isVegitarian", isVegitarian);
    formData.append("isSeasonal", isSeasonal);
    formData.append("ownerId", ownerId);
    formData.append("restaurantId", restaurantId);

    try {
      const Menudata = await axios.post(
        `${REACT_APP_HOST}/api/menu/addItem`,
        formData
      );
      console.log("Menudata", Menudata);
    } catch (error) {
      console.log(error);
    }
  };
  const [restaurantId, setRestaurantId] = useState();
  const fetchData = async () => {
    const checkUser_Restro = await axios.post(
      `${REACT_APP_HOST}/api/owner/checkOwner`,
      {
        ownerId,
      }
    );
    console.log("getList of Restro", checkUser_Restro.data.data._id);
    setRestaurantId(checkUser_Restro.data.data._id);
  };
  useEffect(() => {
    fetchData();
  });

  return (
    <div className="w-5/6 mx-auto">
      <h1 className=" font-bold text-2xl text-center">Add New Menu Item</h1>
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
        {image && (
          <div>
            <img
              src={image}
              alt="selectedfile"
              name="image"
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
              type="number"
              label="Price"
              name="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="text-white"
            />
          </Box>
        </div>
        <div className="mt-[10px]">
          <Box sx={{ minWidth: 430 }}>
            <FormControl fullWidth>
              <InputLabel id="food-category-label">Food Category</InputLabel>
              <Select
                labelId="food-category-label"
                id="food-category-id"
                value={category}
                label="Food Category"
                onChange={(e) => setCategory(e.target.value)}
              >
                <MenuItem value="Biriyani">Biriyani</MenuItem>
                <MenuItem value="Burgers">Burgers</MenuItem>
                <MenuItem value="Pizzas">Pizzas</MenuItem>
                <MenuItem value="Salads">Salads</MenuItem>
                <MenuItem value="Drinks">Drinks</MenuItem>
                <MenuItem value="Desserts">Desserts</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      <div className="mt-[10px]">
        <FormControl sx={{ m: 1, width: 860 }}>
          <InputLabel id="food-category-label">Ingredients</InputLabel>
          <Select
            labelId="ingredient-label"
            id="ingredient-id"
            value={ingredient}
            label="Ingredient"
            onChange={(e) => setIngredient(e.target.value)}
          >
            <MenuItem value="Chicken">Chicken</MenuItem>
            <MenuItem value="Rice">Rice</MenuItem>
            <MenuItem value="Spices">Spices</MenuItem>
            <MenuItem value="Vegetables">Vegetables</MenuItem>
            <MenuItem value="Cheese">Cheese</MenuItem>
            <MenuItem value="Paneer">Paneer</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="flex">
        <div className="mt-[10px]">
          <FormControl sx={{ m: 1, width: 420 }}>
            <InputLabel id="food-category-label">Is Vegitarian</InputLabel>
            <Select
              labelId="isVegitarian-label"
              id="isVegitarian-id"
              value={isVegitarian}
              label="Is Vegitarian"
              onChange={(e) => setIsVegitarian(e.target.value)}
            >
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="mt-[10px]">
          <FormControl sx={{ m: 1, width: 420 }}>
            <InputLabel id="food-category-label">Is Seasonal</InputLabel>
            <Select
              labelId="isSeasonal-label"
              id="isSeasonal-id"
              value={isSeasonal}
              label="Is Seasonal"
              onChange={(e) => setIsSeasonal(e.target.value)}
            >
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="p-2">
        <button
          className="p-2 w-44 rounded-sm bg-[#f84260] text-white"
          onClick={AddMenuItem}
        >
          CREATE MENU ITEM
        </button>
      </div>
    </div>
  );
};

export default AddMenuItem;
