import axios from "axios";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { REACT_APP_HOST } from "../utils/Host_pass";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// import { useNavigate } from "react-router-dom";

const Login = ({ closePopup, switchToRegister }) => {
  const [password, setPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const validate = (field, value) => {
    let newErrors = { ...errors };
    if (field === "email") {
      if (!value.trim()) {
        newErrors.userEmail = "Email is required";
      } else if (
        !value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      ) {
        newErrors.userEmail = "Invalid email format";
      } else {
        delete newErrors.userEmail;
      }
    }
    if (field === "password") {
      if (!value.trim()) {
        newErrors.password = "Password is required";
      } else if (value.length < 6) {
        newErrors.password = "Password must be at least 6 characters long";
      } else {
        delete newErrors.password;
      }
    }
    setErrors(newErrors);
  };
  const { setUserName } = useContext(UserContext);
  const Login = async (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0 && userEmail && password) {
      try {
        const { data } = await axios.post(`${REACT_APP_HOST}/api/food/login`, {
          userEmail,
          password,
        });

        const { token, userEmail: email, userName, typeofUsers, userId } = data;

        //Set data in localStorage only once
        localStorage.setItem("token", token);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userName", userName);
        localStorage.setItem("admin", typeofUsers);
        localStorage.setItem("customerId", userId);

        setUserName(userName);

        // Check if user is an admin
        if (typeofUsers === "admin") {
          // If admin, check if they are an owner
          const checkUser_Restro = await axios.post(
            `${REACT_APP_HOST}/api/owner/checkOwner`,
            {
              ownerId: userId,
            }
          );

          if (checkUser_Restro.status === 200) {
            navigate("/admin/addrestaurant");
          } else if (checkUser_Restro.status === 201) {
            navigate("/admin/restaurant");
          }
        } else {
          navigate("/my-profile");
        }
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
        closePopup();
      } catch (error) {
        // Improved error handling
        console.error("Login Error:", error);
        if (error.response && error.response.status === 400) {
          // Handle 400 Bad Request error
          alert(
            error.response.data.message ||
              "Invalid credentials. Please try again."
          );
        } else {
          // Handle other errors
          alert("Something went wrong. Please try again later.");
        }
      }
      setUserEmail("");
      setPassword("");
    }
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
            onChange={(e) => {
              setUserEmail(e.target.value);
              validate("email", e.target.value);
            }}
            error={!!errors.userEmail}
            helperText={errors.userEmail}
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
            onChange={(e) => {
              setPassword(e.target.value);
              validate("password", e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                this.setState({ message: e.target.value }, () => {
                  alert(this.state.message);
                });
              }
            }}
            error={!!errors.password}
            helperText={errors.password}
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
