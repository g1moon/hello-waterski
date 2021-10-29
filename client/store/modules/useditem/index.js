import {createSlice, createSelector, current} from '@reduxjs/toolkit';
import { useditemAsyncAction } from './saga';

export const USEDITEM = 'useditem';

const initialState = {
  useditem: {
      loading: false,
      data: {
        useditemAllData: [],
      },
      error: null,
  },
};

const useditemSlice = createSlice({
  name: USEDITEM,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(`${useditemAsyncAction.getUseditemAll.request}`, (state) => {
      state.useditem.loading = true;
    })
    .addCase(
      `${useditemAsyncAction.getUseditemAll.success}`,
      (state, action) => {
        state.useditem.data.useditemAllData = action.payload.data;
      },
    )
    .addCase(
      `${useditemAsyncAction.getUseditemAll.failure}`,
      (state, action) => {
        state.useditem = initialState.useditem;
      },
    );
  },
});

const selfSelector = (state) => state[USEDITEM];

const useditemSelector = createSelector(selfSelector, (state) => state.useditem);

// const tickerSelector = createSelector(
//   bithumbSelector,
//   (bithumb) => bithumb.ticker,
// );

const UseditemSelector = {
  loading: createSelector(useditemSelector, (useditem) => useditem.loading),
  data: createSelector(useditemSelector, (useditem) => useditem.data),
  error: createSelector(useditemSelector, (useditem) => useditem.error),
}

export const useditemAllDataSelector = createSelector(useditemSelector, (useditem) => useditem.data.useditemAllData);

export const useditemAction = useditemSlice.actions;
export const useditemReducer = useditemSlice.reducer;
