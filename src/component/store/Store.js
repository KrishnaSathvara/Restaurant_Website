import { configureStore } from "@reduxjs/toolkit";
import orderslice from "./orderslice";

const store = configureStore({
  reducer: {
    order: orderslice,
  },
});

export default store;
