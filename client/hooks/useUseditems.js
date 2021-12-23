import {useAppDispatch, useAppSelector} from "../store";
import {USEDITEM} from "../store/modules/useditem";
import {useditemAsyncAction} from "../store/modules/useditem/saga";
import {createSelector} from "@reduxjs/toolkit";

const useUseditems = () => {
  const dispatch = useAppDispatch();

  // selector
  const selfSelector = (state) => state[USEDITEM];
  const useditemSelector = createSelector(selfSelector, (state) => state.useditem);
  const UseditemSelector = {
    loading: createSelector(useditemSelector, (useditem) => useditem.loading),
    data: createSelector(useditemSelector, (useditem) => useditem.data),
    error: createSelector(useditemSelector, (useditem) => useditem.error),
  };

  const [useditemAllLoading, useditemAllData, useditemAllError] = [
    useAppSelector(UseditemSelector.loading),
    useAppSelector(UseditemSelector.data),
    useAppSelector(UseditemSelector.error),
  ];

  const getUseditemAll = () => {
    dispatch(useditemAsyncAction.getUseditemAll.request());
  };

  return {
    getUseditemAll,
    useditemAllLoading,
    useditemAllData,
    useditemAllError,
  };
};

export default useUseditems;