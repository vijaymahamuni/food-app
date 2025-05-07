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
import LogoutPage from "./LogoutPage";
import { Navigate } from "react-router-dom";
import Favorites from "./Favorites";
import Addresses from "./Addresses";
function MyProfile() {
  const [open, setOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("Orders");
  const Menus = [
    { title: "Orders", src: <ShoppingBagIcon /> },
    { title: "Favorites", src: <FavoriteIcon /> },
    { title: "Address", src: <HomeIcon /> },
    { title: "Payments", src: <AccountBalanceWalletIcon /> },
    { title: "Notification", src: <NotificationsNoneIcon /> },
    { title: "Events", src: <EventIcon /> },
    { title: "Logout", src: <LogoutIcon /> },
  ];
  // const navigate = useNavigate();
  // const handleFavourites = () => {
  //   navigate("/my-profile/Orders");
  // };
  const handle_selectmenu = (title) => {
    setSelectedMenu(title);
  };
  return (
    <div className="flex border-r-2 ">
      <div
        className={`${
          open ? "w-20" : "w-72"
        }  h-screen bg-white relative duration-300 border-r-[1px] `}
      >
        <KeyboardArrowLeftIcon
          className={`absolute cursor-pointer -right-3 top-12 w-7 rounded-full bg-white border-2 border-button ${
            open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <ul>
          {Menus.map((menu, index) => (
            <li
              key={index}
              className="text-textColor text-lg flex items-center gap-x-4 cursor-pointer p-[31px] hover:bg-green-300 border-b-[1px] "
            >
              <span>{menu.src}</span>
              <span
                className={`${
                  open && "hidden"
                } origin-left duration-200 font-playfair text-lg`}
                onClick={() => handle_selectmenu(menu.title)}
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
        {selectedMenu === "Logout" && (
          <>
            <Navigate to="/my-profile/logout" />
            <LogoutPage />
          </>
        )}
        {selectedMenu === "Address" && (
          <>
            <Navigate to="/my-profile/address" />
            <Addresses />
          </>
        )}
      </div>
    </div>
  );
}

export default MyProfile;
