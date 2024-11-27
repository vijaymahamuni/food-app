import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { REACT_APP_HOST } from "../utils/Host_pass";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavts, setFavts } from "../utils/favoriteSlice";
import { setRestros } from "../utils/restaurantSlice";
import axios from "axios";

const RestaurantCard = ({ resData }) => {
  const navigate = useNavigate();
  const [addFavt, setAddFavt] = useState(false);
  const dispatch = useDispatch();
  const VisitRestro = () => {
    navigate(`/restaurantmenu/${resData._id}`);
  };
  var likedStatus;

  const AddLike = async (likeData, id, liked) => {
    if (liked === "true") {
      likedStatus = false;
    } else {
      likedStatus = true;
    }
    const UpdateLiked = await axios.put(
      `${REACT_APP_HOST}/api/owner/updateFavt/${id}`,
      {
        likedStatus,
      }
    );
    console.log("updated Favts Data", UpdateLiked.data.data);

    // const AddlikedApi = await axios.post(
    //   `${REACT_APP_HOST}/api/owner/addFavt`,
    //   {
    //     favtItem: likeData,
    //   }
    // );

    // console.log(UpdateLiked.data.data);
  };
  console.log("favt restro list", resData);

  return (
    <div>
      <div className=" m-4 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer">
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
            <h1 className=" w-[200px] break-words font-montserrat">
              {resData.description}
            </h1>
          </div>

          <div className="mt-2">
            {resData.liked === "true" ? (
              <div>
                <FavoriteIcon
                  onClick={() => AddLike(resData, resData._id, resData.liked)}
                  sx={{ color: "red" }}
                />
              </div>
            ) : (
              <div>
                <FavoriteBorderIcon
                  onClick={() => AddLike(resData, resData._id, resData.liked)}
                />
              </div>
            )}
            {/* {addFavt === true ? (
              <div>
                <FavoriteIcon
                  onClick={() => AddLike(resData)}
                  sx={{ color: "red" }}
                />
              </div>
            ) : (
              <div>
                <FavoriteBorderIcon onClick={() => AddLike(resData)} />
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
