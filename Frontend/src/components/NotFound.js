import React from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
function NotFound() {
  return (
    <div className=" w-full  h-[630px] flex justify-center text-center items-center bg-[#f8f8f8] ">
      <div>
        <SentimentVeryDissatisfiedIcon fontSize="large" color="#6b7280" />
        <h1 className="text-6xl font-semibold mt-4 text-gray-500">404</h1>
        <h1 className="text-xl font-semibold mt-4 text-gray-400">
          Page not found
        </h1>
        <h1 className="text-md font-semibold mt-4 text-gray-400">
          This page you are looking for doesn't exist or other error occurred.{" "}
        </h1>
      </div>
    </div>
  );
}

export default NotFound;
