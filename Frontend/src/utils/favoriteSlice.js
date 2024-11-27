import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavts: (state, action) => {
      //mutating the state here
      state.favorites.push(action.payload);
    },
    removeFavts: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item._id !== action.payload
      ); // delete cart Items by Id wise
    },
    clearFavts: (state) => {
      state.favorites.length = 0; // equivalent to setting [] and Delte all CartItems
    },
    setFavts: (state, action) => {
      state.favorites = action.payload || []; // Reset items to initial or custom value
    },
  },
});

export const { addFavts, removeFavts, clearFavts, setFavts } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
