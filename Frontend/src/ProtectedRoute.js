import { useContext } from "react";
import UserContext from "./utils/UserContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { loggedInUser } = useContext(UserContext);

  if (!loggedInUser || loggedInUser === "Guest") {
    return <Navigate path="/home" />;
  }

  const checkuserToken = localStorage.getItem("token");
  if (checkuserToken) {
    return children;
  }
};
export default ProtectedRoute;
