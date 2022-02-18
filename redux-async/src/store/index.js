import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import uiSlice from "./uiSlice";

const store = configureStore({
  reducer: { ui: uiSlice },
});

export default store;
