import { useState,useEffect } from "react";
import { MENU_API } from "./constants";
const useRestaurantsMenu = (resId) =>{
    console.log("resId is",resId)
    const [restroInfo, setRestroInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log("menuData", json)
        setRestroInfo(json.data)
    }
    return restroInfo;
}
export default useRestaurantsMenu;