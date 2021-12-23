import {createAsyncAction} from 'typesafe-actions';
import {call, put, takeLatest, takeEvery} from 'redux-saga/effects';
import imageServices from "../../../apis/rest/image";


//1. getImages
export const PREFIX = 'image';

export const GET_IMAGES = `${PREFIX}/GET_IMAGES`;
export const GET_IMAGES_SUCCESS = `${PREFIX}/GET_IMAGES_SUCCESS`;
export const GET_IMAGES_FAILURE = `${PREFIX}/GET_IMAGES_FAILURE`;

export const getImages = createAsyncAction(
  GET_IMAGES,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAILURE,
)();

function* getImagesSaga(action) {
  try {
    const images = yield call(imageServices.getImages);
    yield put(getImages.success({images}));
  } catch (e) {
    yield put(postImage.failure());
  }
}

// 2. postImage
export const POST_IMAGE = `${PREFIX}/POST_IMAGE`;
export const POST_IMAGE_SUCCESS = `${PREFIX}/POST_IMAGE_SUCCESS`;
export const POST_IMAGE_FAILURE = `${PREFIX}/POST_IMAGE_FAILURE`;

export const postImage = createAsyncAction(
  POST_IMAGE,
  POST_IMAGE_SUCCESS,
  POST_IMAGE_FAILURE,
)();

function* postImageSaga(action) {
  try {
    const newPost = yield call(imageServices.postImage, action.payload);
    yield put(postImage.success({newPost}));
  } catch (e) {
    yield put(postImage.failure());
  }
}

// 3.1 ~AsyncAction - api functions ---------------------------------------------
export const imageAsyncAction = {
  getImages,
  postImage,
};

// 4. storeSaga() - takeEvery 등  -------------------------------------------------
export default function* imageSaga() {
  yield takeLatest(GET_IMAGES, getImagesSaga);
  yield takeLatest(POST_IMAGE, postImageSaga);
};


