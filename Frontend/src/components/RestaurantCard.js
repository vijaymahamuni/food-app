import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateRestros } from "../utils/restaurantSlice";
import axios from "axios";
import { REACT_APP_HOST } from "../utils/Host_pass";

const RestaurantCard = ({ resData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Ensure liked is stored as a boolean
  const [liked, setLiked] = useState(resData.liked === "true");

  const VisitRestro = () => {
    navigate(`/restaurantmenu/${resData._id}`);
  };

  const AddLike = async () => {
    const newLikedStatus = !liked; // Toggle local state
    setLiked(newLikedStatus); // Update UI instantly for a smooth user experience
    try {
      // Send updated liked status to backend
      const response = await axios.put(
        `${REACT_APP_HOST}/api/owner/updateFavt/${resData._id}`,
        { liked: newLikedStatus }
      );

      if (response.status === 200) {
        // Update Redux store only if backend update is successful
        dispatch(updateRestros({ id: resData._id, liked: newLikedStatus }));
      } else {
        throw new Error("Failed to update like status");
      }
    } catch (error) {
      console.error("Error updating liked status:", error);
      setLiked(!newLikedStatus); // Revert UI on failure
    }
  };

  return (
    <div>
      <div className="m-4 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer">
        <img
          src={`${REACT_APP_HOST}/` + resData.file}
          alt="img"
          className="w-64 h-40 rounded-lg"
          onClick={VisitRestro}
        />

        <div className="flex justify-between p-[13px]">
          <div>
            <h1 className="text-lg font-bold mb-3 mt-1 font-playfair">
              {resData.name}
            </h1>
            <h1 className="w-[200px] break-words font-montserrat">
              {resData.description}
            </h1>
          </div>

          {/* Like/Unlike Button */}
          <div className="mt-2">
            <button
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              {liked ? (
                <FavoriteIcon sx={{ color: "red" }} onClick={AddLike} />
              ) : (
                <FavoriteBorderIcon onClick={AddLike} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
