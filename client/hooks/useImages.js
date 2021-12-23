import {useAppDispatch, useAppSelector} from "../store";
import {createSelector} from "@reduxjs/toolkit";
import {IMAGE} from "../store/modules/image";
import {imageAsyncAction} from "../store/modules/image/saga";

const useImages = () => {
  const dispatch = useAppDispatch();

  const selfSelector = (state) => state[IMAGE];

  const imageSelctor = createSelector(selfSelector, (state) => state.image);
  const imagesSelector = createSelector(imageSelctor, (image) => image.data.images)
  const ImageSelector = {
    loading: createSelector(imageSelctor, (image) => image.loading),
    data: createSelector(imageSelctor, (image) => image.data),
    error: createSelector(imageSelctor, (image) => image.error),
  };

  const [imagesLoading, imagesData, imagesError] = [
    useAppSelector(ImageSelector.loading),
    useAppSelector(imagesSelector),
    useAppSelector(ImageSelector.error),
  ];

  const getImages = () => {
    dispatch(imageAsyncAction.getImages.request());
  };

  const postImages = () => {
    dispatch(imageAsyncAction.postImage.request({
      title,
      contents,
      location,
      imageUrl: imagePath.current,
      userId: loginStatus.id,
      imageFile,
      imagePath
    }));
  };

  return {
    getImages,
    imagesLoading,
    imagesData,
    imagesError
  };

};

export default useImages;