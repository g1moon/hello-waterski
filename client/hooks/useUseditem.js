import {useAppDispatch, useAppSelector} from "../store";
import {useditemAllSelector, UseditemSelector} from "../store/modules/useditem";
import {useCallback} from "react";
import {useditemAsyncAction} from "../store/modules/useditem/saga";
import {useSelector} from "react-redux";

const useUseditemData = () => {
  const dispatch = useAppDispatch();

  const [useditemAllLoading, useditemAllData, useditemAllError] = [
    useAppSelector(UseditemSelector.loading),
    useAppSelector(UseditemSelector.data),
    useAppSelector(UseditemSelector.error),
  ];

  const getUseditemAll = useCallback(() => {
    dispatch(useditemAsyncAction.getUseditemAll.request());
  }, [dispatch]);


  return{
    getUseditemAll,
    useditemAllLoading,
    useditemAllData,
    useditemAllError,
  };

};

export default useUseditemData;