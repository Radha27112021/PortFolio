import { configureStore } from "@reduxjs/toolkit";
import rootSlice from "./rootSlice";

const store = configureStore({
  reducer: {
    root: rootSlice, 
  },
});

export default store;
