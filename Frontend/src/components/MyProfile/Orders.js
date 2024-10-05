import UserContext from "../../utils/UserContext";
import { useContext } from "react";
const Orders = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <header>
      <h1>Welcome, {loggedInUser}!</h1>
    </header>
  );
};
export default Orders;
