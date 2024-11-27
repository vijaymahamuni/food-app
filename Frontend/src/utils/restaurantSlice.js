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
  },
});

export const { addRestros, removeRestros, clearRestros, setRestros } =
  restaurantSlice.actions;
export default restaurantSlice.reducer;
