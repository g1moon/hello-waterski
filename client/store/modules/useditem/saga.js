import {createAsyncAction} from 'typesafe-actions';

import {call, put, takeLatest, takeEvery} from 'redux-saga/effects';
import useditemServices from "../../../apis/rest/useditem";

// 1. prefix--------------------------------------------------------------------------------
export const PREFIX = 'useditem';

// 2. action, createAction, saga------------------------------------------------------------
// 2.1 action-

export const GET_USEDITEM_ALL = `${PREFIX}/GET_USEDITEM_ALL`;
export const GET_USEDITEM_ALL_SUCCESS = `${PREFIX}/GET_USEDITEM_ALL_SUCCESS`;
export const GET_USEDITEM_ALL_FAILURE = `${PREFIX}/GET_USEDITEM_ALL_FAILURE`;

// 2.2 createAsyncAction
export const getUseditemAll = createAsyncAction(
  GET_USEDITEM_ALL,
  GET_USEDITEM_ALL_SUCCESS,
  GET_USEDITEM_ALL_FAILURE,
)();

// 2.3. saga
function* getUseditemAllSaga(action) {
  try {
    const data = yield call(useditemServices.getUseditemAll);
    yield put(getUseditemAll.success({data}));
  } catch (e) {
    yield put(postUseditem.failure());
  }
}

export const POST_USEDITEM = `${PREFIX}/POST_USEDITEM`;
export const POST_USEDITEM_SUCCESS = `${PREFIX}/POST_USEDITEM_SUCCESS`;
export const POST_USEDITEM_FAILURE = `${PREFIX}/POST_USEDITEM_FAILURE`;

export const postUseditem = createAsyncAction(
  POST_USEDITEM,
  POST_USEDITEM_SUCCESS,
  POST_USEDITEM_FAILURE,
)();

function* postUseditemSaga(action) {
  // const {imageFile, objForPost} = action.payload;
  try {
    const newUseditem = yield call(useditemServices.postUseditem, action.payload);
    yield put(postUseditem.success({newUseditem}));
  } catch (e) {
    yield put(postUseditem.failure());
  }
}

// 3.1 ~AsyncAction - api functions ---------------------------------------------
export const useditemAsyncAction = {
  getUseditemAll,
  postUseditem,
};

// 4. storeSaga() - takeEvery 등  -------------------------------------------------
export default function* useditemSaga() {
  yield takeLatest(GET_USEDITEM_ALL, getUseditemAllSaga);
  yield takeLatest(POST_USEDITEM, postUseditemSaga);
};











