import {createAsyncAction} from "typesafe-actions";
import {call, put, takeLatest} from "redux-saga/effects";
import {spotServices} from "../../../apis/rest/spot";

export const PREFIX = 'spot';

export const GET_SPOTS = `${PREFIX}/GET_SPOTS`;
export const GET_SPOTS_SUCCESS = `${PREFIX}/GET_SPOTS_SUCCESS`;
export const GET_SPOTS_FAILURE = `${PREFIX}/GET_SPOTS_FAILURE`;

export const getSpots = createAsyncAction(
  GET_SPOTS,
  GET_SPOTS_SUCCESS,
  GET_SPOTS_FAILURE,
)();

function* getSpotsSaga(action) {
  try {
    const spots = yield call(spotServices.getSpots);
    yield put(getSpots.success({spots}));
  } catch (e) {
    yield put(getSpots.failure());
  }
}

export const spotAsyncAction = {
  getSpots,
}

export default function* spotSaga() {
  yield takeLatest(GET_SPOTS, getSpotsSaga);
};