import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { REACT_APP_HOST } from "../utils/Host_pass";

const RestaurantCard = ({ resData }) => {
  return (
    <div>
      <div className=" m-4  bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer">
        <img
          src={`${REACT_APP_HOST}/` + resData.file}
          alt="img"
          className="w-64 h-40 rounded-lg"
        />

        <div className="flex justify-between p-[13px]">
          <div>
            <h1 className="text-lg font-bold mb-3 mt-1">{resData.name}</h1>
            <h1 className=" w-[200px] break-words">{resData.description}</h1>
          </div>

          <div className="mt-2">
            <FavoriteBorderIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
