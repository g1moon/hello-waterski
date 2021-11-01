import {createSelector, createSlice} from "@reduxjs/toolkit";
import {useditemAsyncAction} from "../useditem/saga";
import {getUsers, userAsyncAction} from "./saga";

//
export const USER = 'user';


// 초깃값
const initialState = {
  user: {
    loading: false,
    data: {
      users: [],
    },
    error: null,
  },
  loginStatus: {
    loading: false,
    data: {
      id: "",
      nickanme: "",
    },
    error: null,
  },
};

// action, reducer 생성
const userSlice = createSlice({
  name: USER,
  initialState,
  reducers: {
    logout(state) {
      state.loginStatus = initialState.loginStatus;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(`${userAsyncAction.getUsers.request}`, (state, action) => {
      state.user.loading = true;
    })
    .addCase(`${userAsyncAction.getUsers.success}`, (state, action) => {
      // action.payload: {id, nickanme, password}
      state.user.loading = false;
      state.user.data = action.payload;
    })
    .addCase(`${userAsyncAction.getUsers.failure}`, (state, action) => {
      state.user.loading = false;
      state.user = initialState.users;
    })
    .addCase(`${userAsyncAction.signUp.request}`, (state, action) => {
      state.user.loading = true;
    })
    .addCase(`${userAsyncAction.signUp.success}`, (state, action) => {
      // action.payload: {id, nickanme, password}
      state.user.loading = false;
      state.user.data.users.unshift(action.payload);
    })
    .addCase(`${userAsyncAction.signUp.failure}`, (state, action) => {
      state.user.loading = false;
      state.user = initialState.users;
    })
    .addCase(`${userAsyncAction.login.request}`, (state, action) => {
      state.loginStatus.loading = true;
    })
    .addCase(`${userAsyncAction.login.success}`, (state, action) => {
      state.loginStatus.loading = false;
      if (action.payload === false) {
        state.loginStatus = initialState.loginStatus;
        return;
      }
      const {id, nickname, password} = action.payload;
      state.loginStatus.data = {id, nickname}
    })
    .addCase(`${userAsyncAction.login.failure}`, (state, action) => {
      state.loginStatus.loading = false;
      state.loginStatus = initialState.users;
    });
  }
});

export const userAction = userSlice.actions;
export const userReducer = userSlice.reducer;

// selector
const selfSelector = (state) => state[USER];

//UserSelector
const userSelector = createSelector(selfSelector, (state) => state.user);
export const usersSelector = createSelector(userSelector, (user) =>user.data.users);
export const UserSelector = {
  loading: createSelector(userSelector, (user) => user.loading),
  data: createSelector(userSelector, (user) => user.data),
  error: createSelector(userSelector, (user) => user.error)
};

//LoginStatus
const loginStatusSelector = createSelector(selfSelector, (state) => state.loginStatus);
export const LoginStatusSelector = {
  loading: createSelector(loginStatusSelector, (loginStatus) => loginStatus.loading),
  data: createSelector(loginStatusSelector, (loginStatus) => loginStatus.data),
  error: createSelector(loginStatusSelector, (loginStatus) => loginStatus.error)
};