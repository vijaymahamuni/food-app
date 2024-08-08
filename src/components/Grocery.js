import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Grocery = () =>{
    const {loggedInuser}=useContext(UserContext)
    return(
        <div>
            <h1>Welcome to the Vijay Super Market</h1>
            <h1>{loggedInuser}</h1>
        </div>
    )
}
export default Grocery;