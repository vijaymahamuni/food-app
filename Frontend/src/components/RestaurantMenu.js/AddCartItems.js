import React, { useEffect, useState } from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import HomeIcon from "@mui/icons-material/Home";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { useDispatch, useSelector } from "react-redux";
import { REACT_APP_HOST } from "../../utils/Host_pass";
import { removeItems, setItems } from "../../utils/cartSlice";
import { clearItems } from "../../utils/cartSlice";
import emptyCart from "../../images/Nocartim.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import AddAddress from "./AddAddress";
import BusinessIcon from "@mui/icons-material/Business";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripePayment from "./StripePayment";
import OrderSteps from "./OrderSteps";

const stripePromise = loadStripe(
  "pk_test_51QDra5DFEtVBuZZoInYFpSlSov8fwbrZlUpf3uHtzh8wyOoAsMDkZD5RO70SjlAlIeG89Ez5bfdTYcGxAU8hH0Yz00LRq3nc6A"
);

const AddCartItems = () => {
  const CartItemsData = useSelector((store) => store.cart.items);
  const [increments, setIncrements] = useState({}); // Store increment values based on id
  const MySwal = withReactContent(Swal);
  const [addnewaddr, setAddnewAddr] = useState(false);
  const [addressDetails, setAddressDetails] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectAddress, setSelectAddress] = useState();
  const [selectType, setSelectType] = useState();
  const handleIncre = (id) => {
    setIncrements((prevIncrements) => ({
      ...prevIncrements,
      [id]: (prevIncrements[id] || 1) + 1,
    }));
  };

  const handleDecre = (id) => {
    setIncrements((prevIncrements) => ({
      ...prevIncrements,
      [id]: Math.max((prevIncrements[id] || 1) - 1, 1),
    }));
  };

  const ownerId = localStorage.getItem("customerId");
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const fetchData = async () => {
    try {
      console.log(token);
      if (token !== null) {
        const resData = await axios.get(
          `${REACT_APP_HOST}/api/cart/cartData/${ownerId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch(setItems(resData.data.data)); // update setItems for cart items

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
      } else {
        // console.log("Please Login and Visit Restaurant");
      }
    } catch (error) {
      // console.error("Error fetching cart data", error);
      MySwal.fire({
        icon: "failure",
        title: "Token is Expired",
        text: "Token is not valid!please Login again...",
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  // const items = useSelector((state) => state.cart.items);

  // Calculate combined total price for all items
  const combinedTotalPrice = CartItemsData.reduce((total, items) => {
    const quantity =
      increments[items._id] !== undefined ? increments[items._id] : 1;
    return total + items.price * quantity; // Sum total prices based on quantities
  }, 0); // Start with 0
  const GST_Price = 18;
  const Platform_Fee = 5;
  const Deleivery_Fee = 30;
  const navigate = useNavigate();
  const SeeRestaurant_home = () => {
    navigate("/home");
  };
  const AddnewAddress = () => {
    setAddnewAddr(!addnewaddr);
  };

  const handle_clearCart = () => {
    dispatch(clearItems());
    const removeAllItemsApi = axios.delete(
      `${REACT_APP_HOST}/api/cart/removeCartItems`
    );
  };

  const DeleteCartItems = (_id) => {
    // console.log("removeId", _id);
    dispatch(removeItems(_id));
    const response = axios.delete(
      `${REACT_APP_HOST}/api/cart/removeOneitem/${_id}`
    );
  };

  const handleSelect = ({ name, address, addType, id }) => {
    console.log("select address details ", name, address, addType, id);
    setSelectedId(id); // Set the selected box ID
    setAfterAddress(true);
    setSelectAddress(address);
    setSelectType(addType);
  };
  const prvPage = () => {
    setAfterAddress(false);
  };
  const [selectedId, setSelectedId] = useState(null);
  const [afterAddress, setAfterAddress] = useState(false);
  const handlePopup = () => {
    setIsPopupOpen(true);
  };
  return (
    <div>
      {addnewaddr && <AddAddress close_popup={AddnewAddress} />}
      {/* {
        afterAddress?(<h1>Welcome to Foodie App</h1>):(<h1></h1>)
      } */}

      <div className="flex text-textColor">
        {CartItemsData.length !== 0 ? (
          <>
            <div className="p-2 w-[30%]  border-r-2">
              <div>
                {CartItemsData.map((items) => (
                  <div key={items._id}>
                    <div className="flex justify-evenly mt-4">
                      <div>
                        <img
                          src={`${REACT_APP_HOST}/` + items.file}
                          alt="biriyani"
                          className="w-16 h-16"
                        />
                      </div>
                      <div className="mt-4">
                        <h1 className="text-lg font-playfair w-36 break-words">
                          {items.name}
                        </h1>
                      </div>
                      <div className="flex  cursor-pointer mt-4">
                        <RemoveCircleOutlineIcon
                          fontSize="medium"
                          onClick={() => handleDecre(items._id)}
                          className="text-primary"
                        />

                        {/* <h1 className="ml-4">{increments}</h1> */}
                        <h3 className="ml-4 font-playfair">
                          {increments[items._id] !== undefined
                            ? increments[items._id]
                            : 1}
                        </h3>

                        <ControlPointIcon
                          fontSize="medium"
                          onClick={() => handleIncre(items._id)}
                          className="ml-4 text-primary"
                        />
                      </div>
                      <div className="mt-4 ">
                        <h1 className="font-playfair">
                          ₹
                          {increments[items._id] !== undefined
                            ? items.price * increments[items._id]
                            : items.price}
                        </h1>
                      </div>
                      <div className="mt-4 ">
                        <DeleteIcon
                          className="text-textColor cursor-pointer"
                          onClick={() => DeleteCartItems(items._id)}
                        />
                      </div>
                    </div>
                  </div>
                ))}

                <div className="border-b-2 mt-8 border-gray-150"></div>
                <div className=" mt-8 ">
                  <div className="mt-4">
                    <h1 className="font-bold text-xl font-playfair">
                      Bill Details
                    </h1>
                    <div className="flex justify-between mt-4 font-montserrat">
                      <h1>Item Total</h1>
                      <h1>₹{combinedTotalPrice}</h1>
                    </div>
                    <div className="flex justify-between mt-4 font-montserrat">
                      <h1>Delivery Fee</h1>
                      <h1>₹{Deleivery_Fee}</h1>
                    </div>
                    <div className="flex justify-between mt-4 font-montserrat">
                      <h1>Platform Fee</h1>
                      <h1>₹{Platform_Fee}</h1>
                    </div>
                    <div className="flex justify-between mt-4 font-montserrat">
                      <h1>GST and Restaurant Charges</h1>
                      <h1>₹{GST_Price}</h1>
                    </div>
                  </div>
                </div>
                <div className="border-b-2 mt-4"></div>
                <div className="mt-3 flex justify-between font-montserrat">
                  <h1>Total Pay</h1>
                  <h1>
                    ₹
                    {combinedTotalPrice +
                      Deleivery_Fee +
                      Platform_Fee +
                      GST_Price}
                  </h1>
                </div>
                <div className="flex justify-between mt-16">
                  <div>
                    <button
                      className="p-[6px] border-2 rounded-sm  hover:bg-primary hover:text-white"
                      onClick={handle_clearCart}
                    >
                      Clear Cart
                    </button>
                  </div>
                  {/* <div>
                    <button>
                      <Elements stripe={stripePromise}>
                        <StripePayment
                          cartItems={CartItemsData}
                          addressDetails={addressDetails}
                          setIsPopupOpen={handlePopup}
                        />
                      </Elements>
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
            {afterAddress ? (
              <>
                <OrderSteps
                  addressData={selectAddress}
                  prvPage={prvPage}
                  addressType={selectType}
                />
              </>
            ) : (
              <>
                <div className="p-6 w-[70%]">
                  <h1 className="text-2xl font-bold font-playfair text-center">
                    Choose Delivery Address
                  </h1>
                  <div className="mt-4 ">
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        "& > :not(style)": {
                          m: 1,
                          width: 260,
                          height: 200,
                        },
                      }}
                    >
                      {addressDetails.map((item) => (
                        <Paper elevation={2} key={item._id}>
                          <div
                            className={`p-4 transition-all duration-300 ${
                              selectedId === item._id
                                ? "bg-blue-100 border-blue-400"
                                : "bg-white"
                            } border border-gray-300 rounded-md`}
                            onClick={() =>
                              handleSelect({
                                id: item._id,
                                addType: item.addType,
                                name: item.name,
                                address: `${item.streetAddress}, ${item.city}, ${item.state} - ${item.pincode}`,
                              })
                            }
                          >
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
                                  {item.city},{item.pincode}
                                </p>
                              </div>
                              <div className="mt-4">
                                <button
                                  className="p-1 ml-10 w-32 border-[1px] font-bold border-button font-playfair text-primary"
                                  onClick={(e) => {
                                    e.stopPropagation(); // Prevent parent div from getting clicked
                                    handleSelect({
                                      id: item._id,
                                      addType: item.addType,
                                      name: item.name,
                                      address: `${item.streetAddress}, ${item.city}, ${item.state} - ${item.pincode}`,
                                    });
                                  }}
                                >
                                  SELECT
                                </button>
                              </div>
                            </>
                          </div>
                        </Paper>
                      ))}
                    </Box>
                  </div>
                  <div className="mt-4 flex justify-center items-center">
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
                            <p className="ml-4 text-lg font-playfair">
                              Add New Address
                            </p>
                          </div>
                          <div className="ml-10"></div>
                          <div className="mt-4">
                            <button
                              className="p-1 ml-10 w-32 text-white font-playfair bg-primary"
                              onClick={AddnewAddress}
                            >
                              ADD
                            </button>
                          </div>
                        </div>
                      </Paper>
                    </Box>{" "}
                  </div>
                </div>
              </>
            )}
          </>
        ) : (
          <div className="flex items-center justify-center h-[80vh] w-6/12 mx-auto">
            <div className="text-center">
              <img
                src={emptyCart}
                alt="Empty Cart"
                className="w-[300px] h-[300px] mx-auto"
              />
              <h1 className="font-bold text-xl">Your Cart is Empty</h1>
              <h1 className="mt-4">
                You can go to the home page to view more restaurants
              </h1>
              <button
                className="mt-4 px-4 py-2 bg-button font-bold text-white rounded"
                onClick={SeeRestaurant_home}
              >
                See Restaurants
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddCartItems;
