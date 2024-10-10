import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const AddRestaurant = () => {
    navigate("/home");
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <button
        className="p-2 w-32 text-white mt-2 rounded-sm bg-[#f84260]"
        onClick={AddRestaurant}
      >
        Add Restro
      </button>
    </div>
  );
}

export default Dashboard;
