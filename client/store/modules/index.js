import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { all } from 'redux-saga/effects';

import { useditemReducer, USEDITEM} from "./useditem";
import useditemSaga from '../modules/useditem/saga';

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: [USEDITEM]
};

export const rootReducer = combineReducers({
  [USEDITEM]: useditemReducer,
});

export function* rootSaga() {
  yield all([useditemSaga()]);
}

export default persistReducer(rootPersistConfig, rootReducer);
