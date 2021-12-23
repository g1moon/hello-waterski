import {createSlice} from "@reduxjs/toolkit";
import {spotAsyncAction} from "./saga";


export const SPOT = 'spot';
const initialState = {
  spot: {
    loading: false,
    data: {
      spots: [],
    },
    error: null,
  }
};

const spotSlice = createSlice({
  name: SPOT,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(`${spotAsyncAction.getSpots.request}`, (state, action) => {
      state.spot.loading = true;
    })
    .addCase(`${spotAsyncAction.getSpots.success}`, (state, action) => {
      state.spot.data.spots = action.payload.spots;
      state.spot.loading = false;
    })
    .addCase(`${spotAsyncAction.getSpots.failure}`, (state, action) => {
      state.spot.loading = false;
    });
  }
});

export const spotAction = spotSlice.actions;
export const spotReducer = spotSlice.reducer;