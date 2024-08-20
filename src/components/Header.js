import { useState } from "react";
import { APP_LOGOIMG, HEADER_IMG } from "../utils/constants";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnLogin, setBtnLogin] = useState('Login');
    //Subscribing tot the store using a useSelector
    const cartItem = useSelector((store) => store.cart.items);
    // console.log(cartItem)
    const location = useLocation();

    return (
        <div className="flex justify-between bg-gray-50 items-center">
            <div className="logo-container">
                <img className="w-[106px]" src={APP_LOGOIMG} alt="" />
            </div>
            <div className="p-3 m-3 ">
                <ul className="flex">
                    <li className="m-2 p-2 text-[18px] font-[500] hover:text-orange-600">
                        <Link to="/" className={location.pathname === '/' ? 'text-orange-600' : ''}>
                            Home</Link>
                    </li>
                    <li className="m-2 p-2 text-[18px] font-[500] hover:text-orange-600">
                        <Link to="/about" className={location.pathname === '/about' ? 'text-orange-600' : ''}>About Us</Link>
                    </li>
                    <li className="m-2 p-2 text-[18px] font-[500] hover:text-orange-600">
                        <Link to="/contact" className={location.pathname === '/contact' ? 'text-orange-600' : ''} >Contact Us</Link>
                    </li>

                    <li className="m-2 p-2 text-[18px] font-[500] hover:text-orange-600">
                        <Link to="/grocery" className={location.pathname === '/grocery' ? 'text-orange-600' : ''}>Grocery</Link>
                    </li>
                    <button onClick={() => {
                        btnLogin === 'Login' ? setBtnLogin('Logout') : setBtnLogin('Login')
                    }} className="m-2 p-2 font-[500] text-[18px] hover:text-orange-600">{btnLogin}</button>

                    <li className="m-2 p-2 font-[500] text-[18px] hover:text-orange-600">
                        <Link to="/cartItems" className={location.pathname === '/cartItems' ? 'text-orange-600' : ''}>Cart-({cartItem.length})</Link>

                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header;