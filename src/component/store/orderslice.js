import { createSlice } from "@reduxjs/toolkit";

const initialState = { orderList: [], total: 0 };

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    add(state, action) {
      let isPresent = false;

      state.orderList = state.orderList.map((ele) => {
        if (ele.id === action.payload?.id) {
          isPresent = true;
          ele.qty += 1;
        }
        return ele;
      });

      if (!isPresent) {
        const item = { ...action.payload, qty: 1 };
        state.orderList = [...state.orderList, item];
      } else {
        return state;
      }
      state.total = state.orderList.reduce((tot, val) => {
        return tot + Number(val.price) * val.qty;
      }, 0);
    },
    remove(state, action) {
      state.orderList = state.orderList.filter(
        (item) => item.id !== action.payload
      );
      state.total = state.orderList.reduce((tot, val) => {
        return tot + Number(val.price) * val.qty;
      }, 0);
    },

    upadateCart(state, action) {
      const quantity = action.payload.quantity;
      const type = action.payload.type;

      const cartIndex = state.orderList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (type === "inc") {
        state.orderList[cartIndex].qty = state.orderList[cartIndex].qty + 1;
      } else {
        state.orderList[cartIndex].qty = state.orderList[cartIndex].qty - 1;
      }
      state.total = state.orderList.reduce((tot, val) => {
        return tot + Number(val.price) * val.qty;
      }, 0);
    },
  },
});

export const { add, remove, upadateCart } = orderSlice.actions;

export default orderSlice.reducer;
