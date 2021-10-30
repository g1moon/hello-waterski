import {createAsyncAction} from 'typesafe-actions';

import {call, put, takeLatest, takeEvery} from 'redux-saga/effects';
import useditemServices from "../../../apis/useditem";

// 1. prefix
export const PREFIX = 'useditem';

// 2. actions
export const GET_USEDITEM_ALL = `${PREFIX}/GET_USEDITEM_ALL`;
export const GET_USEDITEM_ALL_SUCCESS = `${PREFIX}/GET_USEDITEM_ALL_SUCCESS`;
export const GET_USEDITEM_ALL_FAILURE = `${PREFIX}/GET_USEDITEM_ALL_FAILURE`;

// 3. createAsyncAction
export const getUseditemAll = createAsyncAction(
  GET_USEDITEM_ALL,
  GET_USEDITEM_ALL_SUCCESS,
  GET_USEDITEM_ALL_FAILURE,
)();

// 3.1 ~AsyncAction - api functions
export const useditemAsyncAction = {
  getUseditemAll,
};

// 4. saga
function* getUseditemAllSaga(action) {
  try {
    const data = yield call(useditemServices.getUseditemAll);
    yield put(getUseditemAll.success({data}));
  } catch (e) {
    yield put(getUseditemAll.failure());
  }
}


// 5. storeSaga() - takeEvery 등
export default function* useditemSaga() {
  yield takeLatest(GET_USEDITEM_ALL, getUseditemAllSaga);
};