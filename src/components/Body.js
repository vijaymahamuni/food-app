import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listofRes, setListofRes] = useState([])
    const [filteredRestro, setFilteredRestro] = useState([])
    const [searchRes, setSearchRes] = useState();
    useEffect(() => {
        fetchData();
    }, [])

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false)
        return (
            <h1>Please Check your Internet Connections</h1>

        )

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9310903&lng=80.15262709999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json)
        // console.log("format type", json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setListofRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    if (listofRes.length === 0) {
        return (
            <Shimmer />

        )
    }


    const TopRatedfunc = () => {
        const TopRatedfilter = listofRes.filter((resData) => resData.info.avgRating > 4.5)
        // console.log("avgRating", TopRatedfilter)
        setFilteredRestro(TopRatedfilter)
    }
    const handleChange = (e) => {
        setSearchRes(e.target.value)
        // console.log("search", e.target.value)
    }
    const filterSearch = () => {
        const filter = listofRes.filter(item => item.info.name.toLowerCase().includes(searchRes.toLowerCase()))
        setFilteredRestro(filter)

    }
    // console.log("restro Items printed",listofRes)
    return (
        <div className="p-4">
            <div className="flex">
                <div className="flex items-center space-x-2">
                    <input
                        type="text"
                        value={searchRes}
                        onChange={handleChange}
                        className="border border-black rounded-sm focus:outline-none"
                    />
                    <button
                        onClick={filterSearch}
                        className="px-2 py-1 text-black bg-pink-200 rounded-md hover:bg-pink-300 focus:outline-none "
                    >
                        Search
                    </button>
                </div>

                <div className="pl-16">
                    <button className="px-3 py-1 text-black bg-gray-200 hover:bg-gray-300 rounded-md" onClick={TopRatedfunc}>TopRated Restro</button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredRestro.map((item) => (
                    <Link
                        key={item.info.id}
                        to={"/restromenu/" + item.info.id}

                    >
                        <RestroCard resData={item} />
                    </Link>
                ))}
            </div>
        </div>


    )
}
export default Body;