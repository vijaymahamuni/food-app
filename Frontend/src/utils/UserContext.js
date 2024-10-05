import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default User", // Initial value
  setUserName: () => {}, // Placeholder for function
});

export default UserContext;
