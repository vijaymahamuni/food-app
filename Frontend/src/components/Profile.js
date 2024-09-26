import axios from "axios";
import React, { useEffect } from "react";
import { REACT_APP_HOST } from "../utils/Host_pass";

function Profile() {
  //   const [profileData, setProfileData] = useState();
  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${REACT_APP_HOST}/api/register_users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
}

export default Profile;
