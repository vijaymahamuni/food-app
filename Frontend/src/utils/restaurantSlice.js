import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    restaurants: [],
  },
  reducers: {
    addRestros: (state, action) => {
      //mutating the state here
      state.restaurants.push(action.payload);
    },
    removeRestros: (state, action) => {
      state.favorites = state.restaurants.filter(
        (item) => item._id !== action.payload
      ); // delete cart Items by Id wise
    },
    clearRestros: (state) => {
      state.restaurants.length = 0; // equivalent to setting [] and Delte all
    },
    setRestros: (state, action) => {
      state.restaurants = action.payload || []; // Reset items to initial or custom value
    },
    updateRestros: (state, action) => {
      const { id } = action.payload;
      state.restaurants = state.restaurants.map((restaurant) =>
        restaurant._id === id
          ? { ...restaurant, liked: !restaurant.liked } // Toggle liked status
          : restaurant
      );
    },
  },
});

export const {
  addRestros,
  removeRestros,
  clearRestros,
  setRestros,
  updateRestros,
} = restaurantSlice.actions;
export default restaurantSlice.reducer;
