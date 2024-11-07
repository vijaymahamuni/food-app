import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      //mutating the state here
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload); // delete cart Items by Id wise
    },
    clearItems: (state) => {
      state.items.length = 0; // equivalent to setting [] and Delte all CartItems
    },
    setItems: (state, action) => {
      state.items = action.payload || []; // Reset items to initial or custom value
    },
  },
});

export const { addItems, removeItems, clearItems, setItems } =
  cartSlice.actions;
export default cartSlice.reducer;
