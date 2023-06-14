import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    addCountry(state, action) {
      state.push(action.payload);
    },
    removeCountry(state, action) {
      state.pop(action.payload);
    },
  },
});

export const { addCountry, removeCountry } = countrySlice.actions;
export default countrySlice.reducer;
