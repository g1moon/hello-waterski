import {useAppDispatch, useAppSelector} from "../store";
import {SPOT} from "../store/modules/spot";
import {createSelector} from "@reduxjs/toolkit";
import {spotAsyncAction} from "../store/modules/spot/saga";

const useSpots = () => {
  const dispatch = useAppDispatch();

  const selfSelector = (state) => (state[SPOT]);
  const spotSelector = createSelector(selfSelector, (state) => state.spot)
  const spotsSelector = createSelector(spotSelector, (state) => state.data.spots);
  const SpotSelector = {
    loading: createSelector(spotSelector, (spot) => spot.loading),
    data: createSelector(spotSelector, (spot) => spot.data),
    error: createSelector(spotSelector, (spot) => spot.error),
  };

  const [spotsLoading, spots, spotsError] = [
    useAppSelector(SpotSelector.loading),
    useAppSelector(spotsSelector),
    useAppSelector(SpotSelector.error),
  ];

  const getSpots = () => {
    console.log('getspots');
    dispatch(spotAsyncAction.getSpots.request());
    console.log(spots);
  };

  return {
    getSpots,
    spotsLoading,
    spots,
    spotsError,
  }
};

export default useSpots;