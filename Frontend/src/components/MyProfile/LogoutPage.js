import React, { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import UserContext from "../../utils/UserContext";

function LogoutPage() {
  const loginUsername = localStorage.getItem("userName");
  const loginEmail = localStorage.getItem("userEmail");
  const { setUserName } = useContext(UserContext);

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    navigate("/home");
    setUserName("Guest");
  };
  return (
    <div className="flex flex-col items-center mt-36 h-screen">
      <Avatar src="/broken-image.jpg" sx={{ width: 100, height: 100 }} />
      <h1 className="mt-4 text-xl font-bold">{loginUsername}</h1>
      <h1 className="mt-4">Email: {loginEmail}</h1>
      <button
        className="p-1 w-24 text-center rounded-sm text-white bg-[#f84260] mt-4"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default LogoutPage;
