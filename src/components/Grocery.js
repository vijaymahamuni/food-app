import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Grocery = () =>{
    const {loggedInuser}=useContext(UserContext)
    return(
        <div>
            <h1 className="bg-orange-100 p-20 text-4xl font-[500] text-center">Welcome to the Vijay Super Market</h1>
            <h1 className="text-2xl text-center">Login User:{loggedInuser}</h1>
        </div>
    )
}
export default Grocery;