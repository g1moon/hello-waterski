import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { all } from 'redux-saga/effects';

// import { userReducer, USER } from '@store/modules/user';
import { useditemReducer, USEDITEM} from "./useditem";
import useditemSaga from '../modules/useditem/saga';

const rootPersistConfig = {
  key: 'root',
  storage,
  // blacklist: [BITHUMB, WALLET, PORTFOLIO],
  blacklist: [USEDITEM]
};

export const rootReducer = combineReducers({
  // [WALLET]: walletReducer,
  [USEDITEM]: useditemReducer,
});

export function* rootSaga() {
  // yield all([bithumbSaga(), userSaga(), walletSaga(), portfolioSaga()]);
  yield all([useditemSaga()]);
}

// export default rootReducer;
// export default persistReducer(rootPersistConfig, rootReducer);
