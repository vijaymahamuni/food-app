import axios from "axios";
import { useEffect, useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const Login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/users", {
        name,
        email,
      });
      console.log("User added:", response.data);
    } catch (error) {
      console.error(error);
    }

    setEmail("");
    setName("");
  };
  // Function to fetch users
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers(); // Fetch users when component mounts
  }, []);
  return (
    <div className="mt-5 ">
      <div className="mx-auto w-3/12">
        <h1 className="text-black text-xl font-bold ml-32">Login</h1>

        <div className="mt-10 ">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 w-10/12 font-bold rounded-md"
            style={{ border: "0.5px solid gray", Opacity: "0.1" }}
          />
        </div>

        <div className="mt-10">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 w-10/12 font-bold rounded-md"
            style={{ border: "0.5px solid gray", Opacity: "0.1" }}
          />
        </div>
        <button
          className="p-2 w-32 rounded-lg font-bold bg-[#eee5cf] text-[#ba373b] mt-10 text-center ml-24"
          onClick={Login}
        >
          LOGIN
        </button>
      </div>
      <h1>Users:</h1>
      {users.map((user, index) => (
        <li key={index}>{user.name}</li>
      ))}
    </div>
  );
};
export default Login;
