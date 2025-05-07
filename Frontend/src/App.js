import React, { Suspense, lazy, useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import RestroMenucard from "./components/RestroMenuCard";
import CartItems from "./components/CartItems";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ItemsAdd from "./Admin/ItemsAdd";
import Home from "./components/Home";
import MyProfile from "./components/MyProfile/MyProfile";
import Orders from "./components/MyProfile/Orders";
import Favorites from "./components/MyProfile/Favorites";
import ProtectedRoute from "./ProtectedRoute";
import AddRestaurant from "./Admin/AddRestaurant";
import AdminPanel from "./components/MyProfile/AdminPanel";
import LogoutPage from "./components/MyProfile/LogoutPage";
import Dashboard from "@mui/icons-material/Dashboard";
import RestroMenus from "./components/RestaurantMenu.js/RestroMenus";
import AddCartItems from "./components/RestaurantMenu.js/AddCartItems";
import AddMenuItem from "./Admin/AddMenuItem";
import AllMenuItems from "./Admin/AllMenuItems";
import RestroDetails from "./Admin/RestroDetails";
import Addresses from "./components/MyProfile/Addresses";
import OrdersList from "./Admin/OrdersList";
import NotFound from "./components/NotFound";
import RestaurantList from "./Admin/RestaurantList";
import PaymentMethodPage from "./components/RestaurantMenu.js/PaymentMethodPage";

const Grocery = lazy(() => import("./components/Grocery"));

// Component: App Layout
const AppLayout = React.memo(() => {
  const [userName, setUserName] = useState(() => {
    const storedUser = localStorage.getItem("userName");
    return storedUser || "Guest";
  });

  useEffect(() => {
    localStorage.setItem("userName", userName);
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
});

// Routing Setup
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/cartItems", element: <CartItems /> },
      { path: "/cart", element: <AddCartItems /> },
      //carts payment method route
      // { path: "/cart/payment", element: <PaymentMethodPage /> },
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
      { path: "/account/register", element: <Register /> },
      { path: "/restromenu/:resId", element: <RestroMenucard /> },

      //  Admin Routes
      {
        path: "/admin/restaurant",
        element: (
          <ProtectedRoute>
            <AdminPanel />
          </ProtectedRoute>
        ),
        children: [
          { path: "logout", element: <LogoutPage /> },
          { path: "dashboard", element: <Dashboard /> },
          { path: "add-menu", element: <AddMenuItem /> },
          { path: "menu", element: <AllMenuItems /> },
          { path: "details", element: <RestroDetails /> },
          { path: "orders", element: <OrdersList /> },
          { path: "restaurantList", element: <RestaurantList /> },
        ],
      },

      //  Profile Routes
      {
        path: "/my-profile",
        element: (
          <ProtectedRoute>
            <MyProfile />
          </ProtectedRoute>
        ),
        children: [
          { path: "orders", element: <Orders /> },
          { path: "favorites", element: <Favorites /> },
          { path: "logout", element: <LogoutPage /> },
          { path: "address", element: <Addresses /> },
        ],
      },

      // Other Routes
      { path: "/addItems", element: <ItemsAdd /> },
      { path: "/home", element: <Home /> },
      { path: "/restaurantmenu/:resId", element: <RestroMenus /> },
      { path: "/admin/addrestaurant", element: <AddRestaurant /> },

      //  404 Not Found
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
