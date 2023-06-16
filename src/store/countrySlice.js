import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// read Action
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

// search Action

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

// view Action

export const viewCountry = createAsyncThunk(
  "viewCountry",
  async ( ccn3, { rejectWithValue }) => {
    try {
      const responce = await axios.get(
        `${process.env.REACT_APP_API_KEY}/alpha/${ccn3}`
      );
      const values = responce.data;
      return values;
    } catch (_) {
      return rejectWithValue("This contury dose not exist");
    }
  }
);

const countrySlice = createSlice({
  name: "country",
  initialState: {
    country: [],
    loading: false,
    error: false,
  },
  extraReducers: {
    // get all countries
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

    //view Country
    [viewCountry.pending]: (state) => {
      state.loading = true;
    },
    [viewCountry.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.country = action.payload;
    },
    [viewCountry.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default countrySlice.reducer;
