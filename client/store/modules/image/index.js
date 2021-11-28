import {createSelector, createSlice, current} from "@reduxjs/toolkit";
import {imageAsyncAction} from "./saga";

export const IMAGE = 'image';

// 초깃값
const initialState = {
  image: {
    loading: false,
    data: {
      images: [],
    },
    error: null,
  },
};

const imageSlice = createSlice({
  name: IMAGE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(`${imageAsyncAction.getImages.request}`, (state, action) => {
      console.log('req');
      state.image.loading = true;
      console.log(action.payload);
    })
    .addCase(`${imageAsyncAction.getImages.success}`, (state, action) => {
      state.image.loading = false;
      state.image.data.images = action.payload.images;
    })
    .addCase(`${imageAsyncAction.getImages.failure}`, (state, action) => {
      console.log('fai');
      state.image.loading = false;
    })
    .addCase(`${imageAsyncAction.postImage.request}`, (state, action) => {
      state.image.loading = true;
    })
    .addCase(`${imageAsyncAction.postImage.success}`, (state, action) => {
      state.image.data.images.unshift(action.payload.newPost)
      state.image.loading = false;

    })
    .addCase(`${imageAsyncAction.postImage.failure}`, (state, action) => {
      state.image.loading = false;
    })
  },
});

export const imageAction = imageSlice.actions;
export const imageReducer = imageSlice.reducer;

