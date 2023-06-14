import { configureStore } from "@reduxjs/toolkit";
import country from "./countrySlice";

export const store = configureStore({
  reducer: {
    country,
  },
});
