import { useState } from "react";
import { REACT_APP_HOST } from "../utils/Host_pass";
import axios from "axios";
const Register = () => {
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [phoneNum, setPhoneNum] = useState();
  const [password, setPassword] = useState();

  const Register = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${REACT_APP_HOST}/api/register_users`,
        {
          userName,
          userEmail,
          phoneNum,
          password,
        }
      );
      console.log("User added:", response.data);
    } catch (error) {
      console.error(error);
    }

    // setUserName("");
    // setUserEmail("");
  };
  return (
    <div className="mt-5  ">
      <div className="mx-auto w-3/12">
        <h1 className="text-black text-xl font-bold ml-32">Register</h1>

        <div className="mt-10 ">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="p-2 w-10/12 font-bold rounded-md"
            style={{ border: "0.5px solid gray", Opacity: "0.1" }}
          />
        </div>

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
            type="tel"
            name="phone"
            id="phone"
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
            className="p-2 w-10/12 font-bold rounded-md"
            style={{ border: "0.5px solid gray", Opacity: "0.1" }}
            placeholder="Phone num"
            pattern="[0-9]{10}"
            required
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
          onClick={Register}
        >
          Register
        </button>
      </div>
      {/* <div className="ml-8">
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
      </div> */}
    </div>
  );
};
export default Register;
