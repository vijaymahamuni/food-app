import React, { useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import EventIcon from "@mui/icons-material/Event";
import LogoutIcon from "@mui/icons-material/Logout";
import Orders from "./Orders";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Favorites from "./Favorites";
function MyProfile() {
  const [open, setOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(false);
  const Menus = [
    { title: "Orders", src: <ShoppingBagIcon /> },
    { title: "Favorites", src: <FavoriteIcon /> },
    { title: "Address", src: <HomeIcon /> },
    { title: "Payments", src: <AccountBalanceWalletIcon /> },
    { title: "Notification", src: <NotificationsNoneIcon /> },
    { title: "Events", src: <EventIcon /> },
    { title: "Logout", src: <LogoutIcon /> },
  ];
  const navigate = useNavigate();
  // const handleFavourites = () => {
  //   navigate("/my-profile/Orders");
  // };
  return (
    <div className="flex border-r-2 ">
      <div
        className={`${
          open ? "w-20" : "w-72"
        }  h-screen bg-white relative duration-300 border-r-[1px] `}
      >
        <KeyboardArrowLeftIcon
          className={`absolute cursor-pointer -right-3 top-12 w-7 rounded-full bg-white border-2 border-[#f84260] ${
            open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <ul>
          {Menus.map((menu, index) => (
            <li
              key={index}
              className="text-black text-lg flex items-center gap-x-4 cursor-pointer p-[31px] hover:bg-green-300 border-b-[1px] "
            >
              <span>{menu.src}</span>
              <span
                className={`${open && "hidden"} origin-left duration-200`}
                onClick={() => setSelectedMenu(menu.title)}
              >
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-7  flex-1 h-screen">
        {/* {selectedMenu === "Orders" && <div>{handleFavourites()}</div>} */}
        {selectedMenu === "Orders" && (
          <>
            <Navigate to="/my-profile/orders" />
            <Orders />
          </>
        )}
        {selectedMenu === "Favorites" && (
          <>
            <Navigate to="/my-profile/favorites" />
            <Favorites />
          </>
        )}
      </div>
    </div>
  );
}

export default MyProfile;