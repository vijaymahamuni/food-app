import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import axios from "axios";
import { REACT_APP_HOST } from "../../utils/Host_pass";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItems, clearItems } from "../../utils/cartSlice";
import Swal from "sweetalert2";

function RestroMenus() {
  const [menuList, setMenuList] = useState([]);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [selectedValue, setSelectedValue] = useState("all");
  const [selectedfoodCate, setSelectedfoodCate] = useState("all");
  const [selectedtoprated, setSelectedtoprated] = useState("all");
  const [selectedprizewise, setSelectedprizewise] = useState("all");

  const { resId } = useParams();
  // console.log("resID", resId);
  const CurrCustId = localStorage.getItem("customerId");

  const fetchData = async () => {
    const resData = await axios.get(
      `${REACT_APP_HOST}/api/menu/getMenulist/${resId}`
    );
    // console.log("getList of menu", resData.data.data);
    setMenuList(resData.data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const dispatch = useDispatch();
  const CartItemsData = useSelector((store) => store.cart.items);
  console.log("CartItemsData", CartItemsData.length);
  const prevCartResId = CartItemsData[0]?.restaurantId;

  const AddToCart = async (item) => {
    console.log("getOriginal Cartitems", item.restaurantId);
    const sltitemResId = item.restaurantId;
    if (CartItemsData.length !== 0 && prevCartResId !== sltitemResId) {
      Swal.fire({
        title: "Items Already in Cart?",
        text: "your cart contains items from other restaurant.Would you like to reset your cart for adding items from this restaurant?",
        showCancelButton: true,
        confirmButtonText: "YES, START AFRESH",
        cancelButtonText: "NO",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          // Swal.fire("Done!", "Your action has been confirmed.", "success");
          // Perform confirmed action here

          //if both previous and curr add items not same then clear prev Cartitems in redux and api and then add this new items
          dispatch(clearItems());
          const removeAllItemsApi = axios.delete(
            `${REACT_APP_HOST}/api/cart/removeCartItems`
          );

          //update redux and api new cartItems data
          dispatch(addItems(item));
          const addCartItemsApi = axios.post(
            `${REACT_APP_HOST}/api/cart/addCartItem`,
            {
              item,
              CurrCustId,
            }
          );
          setShowSuccessAlert(true); // Show success alert

          // console.log(removeAllItemsApi.data.message);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // Swal.fire("Cancelled", "Your action has been cancelled.", "error");
          // Perform cancel action here
        }
      });
    } else {
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
        setShowSuccessAlert(true); // Show success alert
      } catch (error) {}
    }
  };
  const navigate = useNavigate();
  const ViewCartpage = () => {
    navigate("/cart");
  };

  const handleChange = (event) => {
    console.log("filter food type", event.target.value);

    setSelectedValue(event.target.value);
  };
  const handlecategory = (event) => {
    setSelectedfoodCate(event.target.value);
  };
  const handleToprated = (event) => {
    setSelectedtoprated(event.target.value);
  };
  const handlePriceWise = (event) => {
    setSelectedprizewise(event.target.value);
  };
  //filter menu
  const FilterMenu = menuList.filter((item) => {
    const foodtype_flt =
      selectedValue === "all" || item.isVegitarian === selectedValue;
    const foodCate_flt =
      selectedfoodCate === "all" || item.category === selectedfoodCate;

    const toprated =
      selectedtoprated === "all" || item.rating >= selectedtoprated;

    const pricewise_flt =
      selectedprizewise === "all" || item.price >= selectedprizewise;

    return foodtype_flt && foodCate_flt && toprated && pricewise_flt;
  });
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
              value={selectedtoprated}
              onChange={handleToprated}
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
                style={{
                  color: "#424242",
                  fontFamily: ["Montserrat", "sans-serif"],
                }}
                label="All"
              />
              <FormControlLabel
                value="4"
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
            </RadioGroup>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
              className="mt-3 border-b-2"
              value={selectedprizewise} // Controlled component
              onChange={handlePriceWise} // Handle change event
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
                value="200"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#f84260", // Checked color
                      },
                    }}
                  />
                }
                label="Above 200"
              />
              <FormControlLabel
                value="400"
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
              value={selectedValue} // Controlled component
              onChange={handleChange} // Handle change event
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
                value="yes"
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
                value="no"
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
              value={selectedfoodCate} // Controlled component
              onChange={handlecategory} // Handle change event
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
                value="Burgers"
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
                value="Chicken"
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
                value="Dosa"
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
      <div className="w-8/12 pl-6 bg-gray-50 mx-auto mt-4 ">
        {FilterMenu.map((item, index) => (
          <div className="border-b-2 border-gray-200 flex justify-between ">
            <div className="w-9/12 my-1 font-playfair">
              <div>
                <p className="text-lg font-bold font-playfair tex-[#424242]">
                  {item.name}
                </p>
                <p className="mt-1 font-semibold ">₹{item.price}</p>
              </div>
              <span
                className={`${
                  item.rating > 3 ? "text-green-600" : "text-yellow-600"
                }`}
              >
                {item.rating} ★
              </span>

              <p className="text-md py-2 pb-8">{item.description}</p>
            </div>
            <div>
              <button
                className="p-1 m-1 w-20 font-bold text-green-600 bg-white absolute my-24 ml-7 rounded-md"
                onClick={() => AddToCart(item)}
              >
                ADD
              </button>
              <div className="p-2">
                <img
                  src={`http://localhost:5000/` + item.file}
                  className="w-28 h-28 rounded-lg"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
        {showSuccessAlert && (
          <Stack spacing={2} className="absolute mt-36 w-7/12">
            <Alert variant="filled" severity="success" className="flex ">
              <div className="flex justify-between ">
                <h1 className=" font-semibold items-start">1 item added</h1>
                <h1
                  className="font-semibold  cursor-pointer items-end ml-[620px]"
                  onClick={ViewCartpage}
                >
                  VIEW CART <LocalMallIcon fontSize="medium" />
                </h1>
              </div>
            </Alert>
          </Stack>
        )}
      </div>
    </div>
  );
}

export default RestroMenus;
