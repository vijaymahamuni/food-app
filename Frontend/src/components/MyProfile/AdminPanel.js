import React, { useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LogoutIcon from "@mui/icons-material/Logout";
import { Navigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShopIcon from "@mui/icons-material/Shop";
import CategoryIcon from "@mui/icons-material/Category";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import EventIcon from "@mui/icons-material/Event";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import LogoutPage from "./LogoutPage";
import Dashboard from "./Dashboard";
function AdminPanel() {
  const [open, setOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(false);

  const Menus = [
    { title: "Dashboard", src: <DashboardIcon /> },
    { title: "Orders", src: <ShoppingBagIcon /> },
    { title: "Menu", src: <ShopIcon /> },
    { title: "Food Category", src: <CategoryIcon /> },
    { title: "Ingredients", src: <FastfoodIcon /> },
    { title: "Events", src: <EventIcon /> },
    { title: "Details", src: <PrivacyTipIcon /> },
    { title: "Logout", src: <LogoutIcon /> },
  ];
  // const navigate = useNavigate();
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
        {selectedMenu === "Logout" && (
          <>
            <Navigate to="/admin/restaurant/logout" />
            <LogoutPage />
          </>
        )}
        {selectedMenu === "Dashboard" && (
          <>
            <Navigate to="/admin/restaurant/dashboard" />
            <Dashboard />
          </>
        )}
      </div>
    </div>
  );
}

export default AdminPanel;
