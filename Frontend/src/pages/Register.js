import { useState } from "react";
import { REACT_APP_HOST } from "../utils/Host_pass";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import { useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
// import Login from "./Login";
const Register = ({ closePopup, switchToLogin }) => {
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [password, setPassword] = useState();
  const [typeofUsers, setTypeofUsers] = useState("customer");
  // const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
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

    if (field === "name") {
      if (!value.trim()) {
        newErrors.userName = "Name is required";
      } else if (value.length < 2) {
        newErrors.userName = "Name must be at least 2 characters long";
      } else if (!/^[a-zA-Z ]+$/.test(value)) {
        newErrors.userName = "Only alphabets and spaces are allowed";
      } else {
        delete newErrors.userName;
      }
    }
    setErrors(newErrors);
  };
  const Register = async (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0 && userEmail && password) {
      try {
        const response = await axios.post(
          `${REACT_APP_HOST}/api/food/register`,
          {
            userName,
            userEmail,
            password,
            typeofUsers,
          }
        );
        console.log("User added:", response.data);
        if (response.status === 200) {
          MySwal.fire({
            icon: "success",
            title: "Success!",
            text: "Registration successful! Please log in to access your account.",
          });
        }
        // if (typeofUsers === "admin") {
        //   navigate("/admin/addrestaurant");
        // }
        closePopup(); // Close popup after successful registration
      } catch (error) {
        console.error(error);
      }

      // setUserName("");
      // setUserEmail("");
      // setPassword("");
      // setTypeofUsers("");
    }
  };

  const handleChange = (event) => {
    setTypeofUsers(event.target.value);
  };
  return (
    <div
      id="overlay"
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 backdrop-blur-none bg-black bg-opacity-50"
      onClick={(e) => e.target.id === "overlay" && closePopup()} // Click outside to close
    >
      <div className="bg-gray-200 p-8 rounded-lg w-96 text-center relative">
        <div>
          <h1 className="text-black text-xl  pt-8 ">Register</h1>
          <div className="mt-2">
            <Box
              component="form"
              sx={{ "& .MuiTextField-root": { m: 1, width: "32ch" } }}
              noValidate
            >
              <TextField
                id="outlined-textarea"
                type="text"
                label="Full Name "
                name="fullname"
                placeholder="Full Name"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                  validate("name", e.target.value);
                }}
                error={!!errors.userName}
                helperText={errors.userName}
              />
            </Box>
          </div>
          <div className="mt-2">
            <Box
              component="form"
              sx={{ "& .MuiTextField-root": { m: 1, width: "32ch" } }}
              noValidate
            >
              <TextField
                id="outlined-textarea"
                type="email"
                label="Email Address"
                name="email"
                placeholder="Email Address"
                value={userEmail}
                onChange={(e) => {
                  setUserEmail(e.target.value);
                  validate("email", e.target.value);
                }}
                error={!!errors.userEmail}
                helperText={errors.userEmail}
              />
            </Box>
          </div>
          <div className="mt-4">
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
                error={!!errors.password}
                helperText={errors.password}
              />
            </Box>
          </div>
          <div className="mt-4">
            <FormControl sx={{ m: 1, width: "32ch" }}>
              <Select
                value={typeofUsers}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value={"customer"}>Customer</MenuItem>
                <MenuItem value={"admin"}>Restaurant Owner</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            <button
              className="p-2 w-[280px] rounded-sm  bg-[#ba373b] text-white mt-6 ml-1 text-center "
              onClick={Register}
            >
              Register
            </button>
          </div>

          <div className="mt-6">
            <h1 className="cursor-pointer">
              Already have an account?
              <span
                className="text-[#f84260] ml-3 cursor-pointer"
                onClick={switchToLogin}
              >
                LOGIN
              </span>{" "}
            </h1>
            {/* <h1 className="mt-6 text-[#f84260] cursor-pointer">
              FORGOT PASSWORD
            </h1> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
