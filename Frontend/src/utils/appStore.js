import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import orderReducer from "./orderSlice";
import favoriteReducer from "./favoriteSlice";
import restaurantReducer from "./restaurantSlice";
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
    favorite: favoriteReducer,
    restaurant: restaurantReducer,
  },
});

export default appStore;
