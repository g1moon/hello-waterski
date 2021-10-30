import {GET_USEDITEM_ALL_FAILURE} from "../useditem/saga";
import {createAsyncAction} from "typesafe-actions";
import {call, put, takeEvery, takeLatest} from "redux-saga/effects";
import userServices from "../../../apis/rest/user";

export const PREFIX = 'user';

// GET_USERS
export const GET_USERS = `${PREFIX}/GET_USERS`;
export const GET_USERS_SUCCESS = `${PREFIX}/GET_USERS_SUCCESS`;
export const GET_USERS_FAILURE = `${PREFIX}/GET_USERS_FAILURE`;

export const getUsers = createAsyncAction(
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
)();

function* getUsersSaga(action) {
  try {
    const users = yield call(userServices.getUsers);
    yield put(getUsers.success({users}));
  } catch (err) {
    yield put(getUsers.failure())
  }
}

// GET_LOGIN_STATUS
export const GET_LOGIN_STATUS = `${PREFIX}/GET_LOGIN_STATUS`;
export const GET_LOGIN_STATUS_SUCCESS = `${PREFIX}/GET_LOGIN_STATUS_SUCCESS`;
export const GET_LOGIN_STATUS_FAILURE = `${PREFIX}/GET_LOGIN_STATUS_FAILURE`;

export const getLoginStatus = createAsyncAction(
  GET_LOGIN_STATUS,
  GET_LOGIN_STATUS_SUCCESS,
  GET_LOGIN_STATUS_FAILURE,
)();

function* getLoginStatusSaga(action) {
  try {
    const loginStatus = yield call(userServices.getLoginStatus);
    yield put(getUsers.success({users}));
  } catch (err) {
    yield put(getUsers.failure())
  }
}

// LOGIN
export const LOGIN = `${PREFIX}/LOGIN`;
export const LOGIN_SUCCESS = `${PREFIX}/LOGIN_SUCCESS`;
export const LOGIN_FAILURE = `${PREFIX}/LOGIN_FAILURE`;

export const login = createAsyncAction(
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
)();

function* loginSaga(action) {
  try {
    const loginStatus = yield call(userServices.login, action.payload);
    yield put(login.success(loginStatus));
  } catch (err) {
    yield put(login.failure())
  }
}

// LOGOUT
export const LOGOUT = `${PREFIX}/LOGOUT`;
export const LOGOUT_SUCCESS = `${PREFIX}/LOGOUT_SUCCESS`;
export const LOGOUT_FAILURE = `${PREFIX}/LOGOUT_FAILURE`;

export const logout = createAsyncAction(
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
)();

function* logoutSaga(action) {
  try {
    const logoutResult = yield call(userServices.logout);
    yield put(logout.success({logoutResult}));
  } catch (err) {
    yield put(logout.failure())
  }
}

// SIGN_UP
export const SIGN_UP = `${PREFIX}/SIGN_UP`;
export const SIGN_UP_SUCCESS = `${PREFIX}/SIGN_UP_SUCCESS`;
export const SIGN_UP_FAILURE = `${PREFIX}/SIGN_UP_FAILURE`;

export const signUp = createAsyncAction(
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
)();

function* signUpSaga(action) {
  try {
    const newUser = yield call(userServices.signUp);
    yield put(signUp.success({newUser}));
  } catch (err) {
    yield put(signUp.failure())
  }
}

export const userAsyncAction = {
  getUsers,
  getLoginStatus,
  login,
  logout,
  signUp,
};

export default function* userSaga() {
  yield takeLatest(GET_USERS, getUsersSaga);
  yield takeLatest(GET_LOGIN_STATUS, getLoginStatusSaga);
  yield takeEvery(LOGIN, loginSaga);
  yield takeLatest(LOGOUT, logoutSaga);
  yield takeLatest(SIGN_UP, signUpSaga);
};