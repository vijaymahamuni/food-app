import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import RestroMenucard from "./components/RestroMenuCard";
// import Grocery from "./components/Grocery";
import Header from "./components/Header";
import "./index.css";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import CartItems from "./components/CartItems";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Profile from "./components/Profile";
import ItemsAdd from "./Admin/ItemsAdd";
import Home from "./components/Home";
import MyProfile from "./components/MyProfile/MyProfile";
import Orders from "./components/MyProfile/Orders";
import Favorites from "./components/MyProfile/Favorites";
import ProtectedRoute from "./ProtectedRoute";
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState(() => {
    // On component mount, check for the token in localStorage
    const storedUser = localStorage.getItem("userName");
    return storedUser || "Vijay";
  });

  useEffect(() => {
    if (userName) {
      localStorage.setItem("userName", userName);
    }
  }, [userName]);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="App">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cartItems",
        element: <CartItems />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/account/login",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/restromenu/:resId",
        element: <RestroMenucard />,
      },
      {
        path: "/account/register",
        element: <Register />,
      },
      {
        path: "/my-profile",
        element: (
          <ProtectedRoute>
            <MyProfile />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "/my-profile/orders",
            element: <Orders />,
          },
          {
            path: "/my-profile/favorites",
            element: <Favorites />,
          },
        ],
      },
      {
        path: "/addItems",
        element: <ItemsAdd />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
