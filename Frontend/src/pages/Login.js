import axios from "axios";
import { useState } from "react";
import { REACT_APP_HOST } from "../utils/Host_pass";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const Login = () => {
  const [password, setPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  // const [users, setUsers] = useState([]);

  const Login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${REACT_APP_HOST}/api/register_users/login`,
        {
          userEmail,
          password,
        }
      );
      console.log("User added:", response.data.token);
      localStorage.setItem("token", response.data.token); // Store JWT
    } catch (error) {
      console.error(error);
    }

    setUserEmail("");
    setPassword("");
  };
  // // Function to fetch users
  // const fetchUsers = async () => {
  //   try {
  //     const apiUrl = `${REACT_APP_HOST}/api/users`;
  //     const response = await axios.get(apiUrl);
  //     setUsers(response.data);
  //   } catch (error) {
  //     console.error("Error fetching users:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchUsers(); // Fetch users when component mounts
  //   getEmployeeById();
  // }, [users]);
  return (
    <div className="mt-24 text-center bg-gray-200 w-1/4 mx-auto h-[425px]">
      <div>
        <h1 className="text-black text-xl  pt-8 ">Login</h1>

        <div className="mt-2">
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
        </div>
        <div>
          <button
            className="p-2 w-[280px] rounded-sm  bg-[#ba373b] text-white mt-6 ml-1 text-center "
            onClick={Login}
          >
            LOGIN
          </button>
        </div>

        <div className="mt-6">
          <h1 className="cursor-pointer">
            Don't have an account?
            <span className="text-[#f84260] ml-3 cursor-pointer">
              REGISTER
            </span>{" "}
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
