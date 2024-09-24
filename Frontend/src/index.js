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
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Vijay",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInuser: userName }}>
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
        path: "/login",
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
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
