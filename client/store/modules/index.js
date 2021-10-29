import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { all } from 'redux-saga/effects';

import { useditemReducer, USEDITEM} from "./useditem";
import useditemSaga from '../modules/useditem/saga';
import {HYDRATE} from "next-redux-wrapper";

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: [USEDITEM]
};

// export const rootReducer = combineReducers({
//   [USEDITEM]: useditemReducer,
// });

export const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        [USEDITEM]: useditemReducer,
      });
      return combinedReducer(state, action);
    }
  }
};

export function* rootSaga() {
  yield all([useditemSaga()]);
}

export default persistReducer(rootPersistConfig, rootReducer);



//--------
// import { combineReducers } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import { HYDRATE } from 'next-redux-wrapper';
//
// import storage from 'redux-persist/lib/storage';
// import { all } from 'redux-saga/effects';
//
// import { useditemReducer, USEDITEM} from "./useditem";
// import useditemSaga from '../modules/useditem/saga';
//
// const rootPersistConfig = {
//   key: 'root',
//   storage,
//   blacklist: [USEDITEM]
// };
//
//
//
// export function* rootSaga() {
//   yield all([useditemSaga()]);
// }
//
// export default persistReducer(rootPersistConfig, rootReducer);
