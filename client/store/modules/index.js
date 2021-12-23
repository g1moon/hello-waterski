import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {all} from 'redux-saga/effects';
import {useditemReducer, USEDITEM} from "./useditem";
import useditemSaga from '../modules/useditem/saga';
import {HYDRATE} from "next-redux-wrapper";
import userSaga from "./user/saga";
import {USER, userReducer} from "./user";
import {IMAGE, imageReducer} from "./image";
import imageSaga from "./image/saga";
import {SPOT, spotReducer} from "./spot";
import spotSaga from "./spot/saga";

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: [USER]
};

export const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        [USEDITEM]: useditemReducer,
        [USER]: userReducer,
        [IMAGE]: imageReducer,
        [SPOT]: spotReducer,
      });
      return combinedReducer(state, action);
    }
  }
};

export function* rootSaga() {
  yield all([useditemSaga(), userSaga(), imageSaga(), spotSaga()]);
}

export const persistedRootReducer = persistReducer(rootPersistConfig, rootReducer);
