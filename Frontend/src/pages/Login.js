import axios from "axios";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { REACT_APP_HOST } from "../utils/Host_pass";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Login = ({ closePopup, switchToRegister }) => {
  const [password, setPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  const { setUserName } = useContext(UserContext);
  const Login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${REACT_APP_HOST}/api/food/login`, {
        userEmail,
        password,
      });
      console.log("get Result data:", response.data);
      localStorage.setItem("token", response.data.token); // Store JWT
      localStorage.setItem("userEmail", response.data.userEmail); // Store JWT
      localStorage.setItem("userName", response.data.userName); // Store JWT
      localStorage.setItem("admin", response.data.typeofUsers); // Store JWT

      setUserName(response.data.userName);
      if (response.data.typeofUsers === "admin") {
        navigate("/admin/restaurant");
      } else {
        navigate("/my-profile");
      }
      closePopup();
    } catch (error) {
      console.error(error);
    }

    setUserEmail("");
    setPassword("");
  };

  return (
    <div
      id="overlay"
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 backdrop-blur-none bg-black bg-opacity-50"
      onClick={(e) => e.target.id === "overlay" && closePopup()} // Click outside to close
    >
      <div className="bg-gray-200 p-8 rounded-lg w-96 text-center relative">
        <h1 className="text-black text-xl mb-6">Login</h1>

        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "32ch" } }}
          noValidate
        >
          <TextField
            id="outlined-textarea"
            type="email"
            label="Email "
            name="email"
            placeholder="Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </Box>

        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "32ch" } }}
          noValidate
        >
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>

        <button
          className="p-2 w-full rounded-sm bg-[#ba373b] text-white mt-6"
          onClick={Login}
        >
          LOGIN
        </button>

        <div className="mt-6">
          <h1 className="cursor-pointer">
            Don't have an account?
            <span
              className="text-[#f84260] ml-3 cursor-pointer"
              onClick={switchToRegister}
            >
              REGISTER
            </span>
          </h1>
          <h1 className="mt-6 text-[#f84260] cursor-pointer">
            FORGOT PASSWORD
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
