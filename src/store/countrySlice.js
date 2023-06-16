import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// read Actioin
export const showCountry = createAsyncThunk(
  "showCountry",
  async (args, { rejectWithValue }) => {
    try {
      const responce = await axios.get(`${process.env.REACT_APP_API_KEY}/all`);
      const values = responce.data;
      return values;
    } catch (_) {
      return rejectWithValue("something went wrong, could not fetch data");
    }
  }
);

// search action

export const searchCountry = createAsyncThunk(
  "searchCountry",
  async ({ customName, checked }, { rejectWithValue }) => {
    try {
      const responce = await axios.get(
        `${process.env.REACT_APP_API_KEY}/name/${customName}?fullText=${checked}`
      );
      const values = responce.data;
      return values;
    } catch (_) {
      return rejectWithValue("Sorry! this country dose not exist");
    }
  }
);

export const countrySlice = createSlice({
  name: "country",
  initialState: {
    country: [],
    loading: false,
    error: false,
  },
  extraReducers: {
    [showCountry.pending]: (state) => {
      state.loading = true;
    },
    [showCountry.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.country = action.payload;
    },
    [showCountry.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // search for country
    [searchCountry.pending]: (state) => {
      state.loading = true;
    },
    [searchCountry.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.country = action.payload;
    },
    [searchCountry.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default countrySlice.reducer;
