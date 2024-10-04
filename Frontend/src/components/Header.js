import { useState } from "react";
// import { APP_LOGOIMG } from "../utils/constants";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import foodie from "../images/Foodie.png";
import Login from "../pages/Login";
import Register from "../pages/Register";
const Header = () => {
  // const [btnLogin, setBtnLogin] = useState("Logout");
  //Subscribing tot the store using a useSelector
  // const cartItem = useSelector((store) => store.cart.items);
  // console.log(cartItem)
  // const location = useLocation();
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);

  const toggleLoginPopup = () => {
    setIsLoginVisible(!isLoginVisible);
    // window.history.pushState(null, "", "/account/login");
    setIsRegisterVisible(false); // Ensure register modal is closed
  };

  const toggleRegisterPopup = () => {
    setIsRegisterVisible(!isRegisterVisible);
    // window.history.pushState(null, "", "/account/register");

    setIsLoginVisible(false); // Ensure login modal is closed
  };

  const switchToRegister = () => {
    setIsLoginVisible(false);
    // window.history.pushState(null, "", "/account/register");

    setIsRegisterVisible(true);
  };

  const switchToLogin = () => {
    setIsRegisterVisible(false);
    // window.history.pushState(null, "", "/account/login");

    setIsLoginVisible(true);
  };
  // useEffect(() => {
  //   if (isLoginVisible === false && isRegisterVisible === false) {
  //     window.history.pushState(null, "", "/home");
  //   }
  // });
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className=" h-[70px]  bg-[#f84260] items-center">
      <div className="flex  w-11/12 mx-auto justify-between ">
        <div className="cursor-pointer" onClick={handleHome}>
          <img className="w-[140px] h-[80px]" src={foodie} alt="" />
          {/* <h1 className="p-2 m-2 text-white font-bold text-xl">Foodie</h1> */}
        </div>
        <div>
          <ul className="flex p-1">
            <li className="m-2 p-2  text-[18px] font-[500] hover:text-orange-600">
              <SearchIcon fontSize="medium" className="text-white font-bold " />
            </li>

            <li className="m-2 p-2 ml-8 font-[500] text-[18px] hover:text-orange-600">
              {/* <Link to="/account/login"> */}
              <button onClick={toggleLoginPopup}>
                <PersonIcon
                  fontSize="medium"
                  className="text-white font-bold "
                />
              </button>
            </li>
            <li className="m-2 p-2 ml-8 font-[500] text-[18px] hover:text-orange-600">
              <Link to="/cartItems">
                <ShoppingCartIcon
                  fontSize="medium"
                  className="text-white font-bold "
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Render the Login Popup Modal */}
      {isLoginVisible && (
        <Login
          closePopup={toggleLoginPopup}
          switchToRegister={switchToRegister}
        />
      )}

      {isRegisterVisible && (
        <Register
          closePopup={toggleRegisterPopup}
          switchToLogin={switchToLogin}
        />
      )}
    </div>
  );
};
export default Header;
