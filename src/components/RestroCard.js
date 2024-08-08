import { RESTRO_IMG } from "../utils/constants";

const RestroCard = ({ resData }) => {
    return (
        <div className="p-4 m-4 w-60 bg-gray-100 rounded-lg hover:bg-gray-200">
            <img className="w-52 h-40 rounded-lg" src={RESTRO_IMG + resData.info.cloudinaryImageId} alt={resData.info.name} />
            <p className="text-lg font-bold mb-3 mt-1">{resData.info.name}</p>
            <p>{resData.info.cuisines.join(' ,')}</p>
            <p>{resData.info.avgRating} stars</p>
            <p>{resData.info.description}</p>
            <p>{resData.info.costForTwo}</p>
            <p>{resData.info.sla.slaString}</p>
        </div>
    );
}

export default RestroCard;
