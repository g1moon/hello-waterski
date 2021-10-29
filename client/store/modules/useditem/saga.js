import { createAsyncAction } from 'typesafe-actions';

import { call, put, takeLatest } from 'redux-saga/effects';
import {useditemServices} from '../../../apis/useditem';
// import { getTickerAllData, getTickerList } from '@/utils/bithumbUtils';

export const PREFIX = 'useditem';

export const GET_USEDITEM_ALL = `${PREFIX}/GET_TICKER_ALL`;
export const GET_USEDITEM_ALL_SUCCESS = `${PREFIX}/GET_USEDITEM_ALL_SUCCESS`;
export const GET_USEDITEM_ALL_FAILURE = `${PREFIX}/GET_USEDITEM_ALL_FAILURE`;

export const getUseditemAll = createAsyncAction(
  GET_USEDITEM_ALL,
  GET_USEDITEM_ALL_SUCCESS,
  GET_USEDITEM_ALL_FAILURE,
)();


function* getUsedItemAllSaga() {
  try {
    const { data } = yield call(useditemServices.getUseditemAll);
    yield put(getUseditemAll.success({data}));
  } catch (e) {
    yield put(getUseditemAll.failure());
  }
}

export const useditemAsyncAction = {
  getUseditemAll,
};

//(apiAction, apiSaga)
export default function* useditemSaga() {
  yield takeLatest(GET_USEDITEM_ALL, getUsedItemAllSaga);
}
