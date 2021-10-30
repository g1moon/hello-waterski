import {createSlice, createSelector, current} from '@reduxjs/toolkit';
import {postUseditem, useditemAsyncAction} from './saga';

export const USEDITEM = 'useditem';

const initialState = {
  useditem: {
    loading: false,
    data: {
      useditemAll: [],
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
    .addCase(`${useditemAsyncAction.getUseditemAll.request}`, (state, action) => {
      state.useditem.loading = true;
    })
    .addCase(
      `${useditemAsyncAction.getUseditemAll.success}`,
      (state, action) => {
        state.useditem.data = action.payload.data;
        state.useditem.loading = false;
      }
    )
    .addCase(
      `${useditemAsyncAction.getUseditemAll.failure}`,
      (state, action) => {
        state.useditem = initialState.useditem;
        state.useditem.loading = false;
      }
    )
    .addCase(`${useditemAsyncAction.postUseditem.request}`, (state, action) => {
        //action.payload = {imageFile: File, objForPost: {…}}
        state.useditem.loading = true;
      }
    )
    .addCase(`${useditemAsyncAction.postUseditem.success}`, (state, action) => {
        state.useditem.data.unshift(action.payload.data);
      }
    )
    .addCase(`${useditemAsyncAction.postUseditem.failure}`, (state, action) => {
        state.useditem = initialState.useditem;
      }
    );
  },
});

export const useditemAction = useditemSlice.actions;
export const useditemReducer = useditemSlice.reducer;


const selfSelector = (state) => state[USEDITEM];

const useditemSelector = createSelector(selfSelector, (state) => {
  return state.useditem;
});

export const UseditemSelector = {
  loading: createSelector(useditemSelector, (useditem) => useditem.loading),
  data: createSelector(useditemSelector, (useditem) => useditem.data),
  error: createSelector(useditemSelector, (useditem) => useditem.error),
}

// export const useditemAllDataSelector = createSelector(useditemSelector, (useditem) => useditem.data.useditemAllData);


