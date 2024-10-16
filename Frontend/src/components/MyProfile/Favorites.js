import axios from "axios";
import { useEffect } from "react";
import { REACT_APP_HOST } from "../../utils/Host_pass";

const Favorites = () => {
  // const [customerList, setCustomerList] = useState([]);
  // Function to fetch users

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `${REACT_APP_HOST}/api/food/getcustomerList`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  });
  return (
    <div>
      <h1>Favorites List</h1>
      <h1></h1>
    </div>
  );
};
export default Favorites;
