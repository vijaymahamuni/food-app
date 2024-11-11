import { createSlice } from "@reduxjs/toolkit";

const orderReducer = createSlice({
  name: "order",
  initialState: {
    orders: [],
  },
  reducers: {
    addOrders: (state, action) => {
      state.orders.push(action.payload);
    },
    removeOrders: (state, action) => {
      state.orders = state.orders.filter((item) => item.id !== action.payload);
    },
    setOrders: (state, action) => {
      state.orders = action.payload || []; // Reset orders to initial or custom value
    },
  },
});
export const { addOrders, removeOrders, setOrders } = orderReducer.actions;
export default orderReducer.reducer;
