import axios from "axios";
import { useState } from "react";
import { REACT_APP_HOST } from "../utils/Host_pass";
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
    <div className="mt-5  ">
      <div className="mx-auto w-3/12">
        <h1 className="text-black text-xl font-bold ml-32">Login</h1>

        <div className="mt-10">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="p-2 w-10/12 font-bold rounded-md"
            style={{ border: "0.5px solid gray", Opacity: "0.1" }}
          />
        </div>
        <div className="mt-10">
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 w-10/12 font-bold rounded-md"
            style={{ border: "0.5px solid gray", Opacity: "0.1" }}
            placeholder="Password"
          />
        </div>
        <button
          className="p-2 w-32 rounded-lg font-bold bg-[#eee5cf] text-[#ba373b] mt-10 text-center ml-24"
          onClick={Login}
        >
          LOGIN
        </button>
      </div>
    </div>
  );
};
export default Login;
