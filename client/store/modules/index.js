import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import {all} from 'redux-saga/effects';

import {useditemReducer, USEDITEM} from "./useditem";
import useditemSaga from '../modules/useditem/saga';
import {HYDRATE} from "next-redux-wrapper";
import userSaga from "./user/saga";
import {USER, userReducer} from "./user";
import {createStore} from "redux";

const rootPersistConfig = {
  key: 'root',
  storage,
};

export const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        [USEDITEM]: useditemReducer,
        [USER]: userReducer,
      });
      return combinedReducer(state, action);
    }
  }
};

export const enhancedReducer = persistReducer(rootPersistConfig, rootReducer);

export function* rootSaga() {
  yield all([useditemSaga(), userSaga()]);
}

