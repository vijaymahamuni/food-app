import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import { REACT_APP_HOST } from "../../utils/Host_pass";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItems } from "../../utils/cartSlice";
function RestroMenus() {
  const [menuList, setMenuList] = useState([]);
  const { resId } = useParams();
  console.log("resID", resId);
  const CurrCustId = localStorage.getItem("customerId");

  const fetchData = async () => {
    const resData = await axios.get(
      `${REACT_APP_HOST}/api/menu/getMenulist/${resId}`
    );
    console.log("getList of menu", resData.data.data);
    setMenuList(resData.data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const dispatch = useDispatch();
  const AddToCart = async (item) => {
    console.log("getOriginal Cartitems", item);

    try {
      dispatch(addItems(item));
      const checkUser_Restro = await axios.post(
        `${REACT_APP_HOST}/api/cart/addCartItem`,
        {
          item,
          CurrCustId,
        }
      );
      console.log(checkUser_Restro);
    } catch (error) {}
  };
  return (
    <div className=" w-11/12 mx-auto flex">
      <div className="mt-4 w-[20%] bg-gray-50 p-6">
        <div>
          <FormControl>
            <FormLabel
              id="demo-radio-buttons-group-label"
              style={{
                fontSize: "18px",
                color: "black",
                fontWeight: "bold",
                color: "#424242",
                fontFamily: ["Playfair Display", "serif"],
              }}
            >
              Filters
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
              className="mt-3 border-b-2"
            >
              <FormControlLabel
                value="toprated"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#f84260", // Checked color
                      },
                    }}
                  />
                }
                style={{
                  color: "#424242",
                  fontFamily: ["Montserrat", "sans-serif"],
                }}
                label="TopRated Item"
              />
              <FormControlLabel
                value="above 400"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#f84260", // Checked color
                      },
                    }}
                  />
                }
                label="Above 400"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="mt-4">
          <FormControl>
            <FormLabel
              id="demo-radio-buttons-group-label"
              style={{
                fontSize: "18px",
                color: "black",
                fontWeight: "bold",
                color: "#424242",
                fontFamily: ["Playfair Display", "serif"],
              }}
            >
              Food Type
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
              className="mt-3 border-b-2"
            >
              <FormControlLabel
                value="all"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#f84260", // Checked color
                      },
                    }}
                  />
                }
                label="All"
              />
              <FormControlLabel
                value="vegetarian only"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#f84260", // Checked color
                      },
                    }}
                  />
                }
                label="Vegetarian Only"
              />
              <FormControlLabel
                value="non-vegetarian only"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#f84260", // Checked color
                      },
                    }}
                  />
                }
                label="Non-vegetarian Only"
              />
              <FormControlLabel
                value="seasonal"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#f84260", // Checked color
                      },
                    }}
                  />
                }
                label="Seasonal"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="mt-6">
          <FormControl>
            <FormLabel
              id="demo-radio-buttons-group-label"
              style={{
                fontSize: "18px",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Food Category
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
              className="mt-3"
            >
              <FormControlLabel
                value="all"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#f84260", // Checked color
                      },
                    }}
                  />
                }
                label="All"
              />
              <FormControlLabel
                value="burger"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#f84260", // Checked color
                      },
                    }}
                  />
                }
                label="Burger"
              />
              <FormControlLabel
                value="chicken"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#f84260", // Checked color
                      },
                    }}
                  />
                }
                label="Chicken"
              />
              <FormControlLabel
                value="dosa"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#f84260", // Checked color
                      },
                    }}
                  />
                }
                label="Dosa"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <div className="w-9/12 pl-10">
        {menuList.map((item, index) => (
          <Accordion key={index} className="mt-4">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography className="flex p-1">
                <div className="mt-2">
                  <img
                    src={`http://localhost:5000/` + item.file}
                    alt="menuImg"
                    className="w-28 h-28 rounded-lg"
                  />
                </div>
                <div className="ml-4">
                  <h1 className="text-lg font-bold">{item.name}</h1>
                  <h1 className="mt-2 font-extralight">₹{item.price}</h1>
                  <h1 className="mt-2">{item.description}</h1>
                  <h1 className="mt-2">★4.3</h1>
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <button
                  className="p-1 font-thin rounded-sm text-sm bg-[#f84260] w-32 text-white"
                  onClick={() => AddToCart(item)}
                >
                  ADD TO CART
                </button>
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default RestroMenus;
