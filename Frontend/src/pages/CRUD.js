import axios from "axios";
import { useEffect, useState } from "react";
import { REACT_APP_HOST } from "../utils/Host_pass";
const CRUD = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const Login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${REACT_APP_HOST}/api/users`, {
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
      const apiUrl = `${REACT_APP_HOST}/api/users`;
      const response = await axios.get(apiUrl);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  const handleDelete = async (id) => {
    // console.log("id", id);
    try {
      const response = await axios.delete(`${REACT_APP_HOST}/api/users/${id}`);
      if (response.status === 200) {
        alert("User deleted successfully!");
      } else {
        alert("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  // To get employee based on ID
  const getEmployeeById = (id) => {
    axios
      .get(`${REACT_APP_HOST}/api/users/${id}`)
      .then((response) => {
        setName(response.data.name);
        setEmail(response.data.email);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleUpdate = async (id) => {
    // console.log("id", id);
    const updatedUser = { name, email };

    try {
      const response = await axios.put(
        `${REACT_APP_HOST}/api/users/${id}`,
        updatedUser
      );
      if (response.status === 200) {
        alert("User Updated successfully!");
      } else {
        alert("Failed to Updated user");
      }
    } catch (error) {
      console.error("Error Updated user:", error);
    }
  };
  useEffect(() => {
    fetchUsers(); // Fetch users when component mounts
    getEmployeeById();
  }, [users]);
  return (
    <div className="mt-5  ">
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
      <div className="ml-8">
        <h1>Users:</h1>
        {users.map((user, index) => (
          <ul key={index}>
            <div className="flex mt-4">
              <li>{user.name}</li>
              <li className="ml-6">
                <button
                  className="p-2 bg-gray-300"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </button>
              </li>
              <li className="ml-6">
                <button
                  className="p-2 bg-gray-300"
                  onClick={() => getEmployeeById(user._id)}
                >
                  Edit
                </button>
              </li>
              <li className="ml-6">
                <button
                  className="p-2 bg-gray-300"
                  onClick={() => handleUpdate(user._id)}
                >
                  Update
                </button>
              </li>
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
};
export default CRUD;
