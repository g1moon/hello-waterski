import {useAppDispatch, useAppSelector} from "../store";
import {useditemAllSelector, UseditemSelector} from "../store/modules/useditem";
import {useCallback, useState} from "react";
import {useditemAsyncAction} from "../store/modules/useditem/saga";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";
import useInput from "./useInput";

const useUseditemUpload = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [userName, setUserName, onChangeUserName] = useInput('');
  const [title, setTitle, onChangeTitle] = useInput('');
  const [price, setPrice, onChangePrice] = useInput(0);
  const [location, setLocation, onChangeLocation] = useInput('');
  const [description, setDescription, onChangeDescription] = useInput('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const onChangeImageFile = (e) => {
    setImageFile(prev => e.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]); // 1. 파일 읽고 버퍼에 저장.
    // 2. 읽기가 완료되면 아래 코드 실행.
    reader.onloadend = () => {
      const image = reader.result; //파일 비트맵 데이터(이거로 미리보기 가능)
      const imageString = image.toString(); //비트맵 데이터 저장 가능하게 스트링으로 변경.
      setImagePreview(imageString); //preview image 설정
    };
  };

  const resetAllInputs = () => {
    setUserName('');
    setTitle('');
    setPrice(0);
    setLocation('');
    setDescription('');
    setImageFile(null);
    setImagePreview(null);
  };

  const onClickCancel = (e) => {
    e.preventDefault();
    resetAllInputs();
    alert('아이템 등록을 취소합니다.');
    router.push('/usedmarket');
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const objForPost = {
      title,
      price,
      location,
      description,
      userId: sessionStorage.getItem('userId'),
      userName,
    };
    dispatch(useditemAsyncAction.postUseditem.request({ imageFile, objForPost }));
    dispatch(useditemAsyncAction.getUseditemAll.request());
    router.push('/usedmarket');
  };


  return {
    onChangeImageFile,
    resetAllInputs,
    onClickCancel,
    onSubmit,
    userName,
    title,
    price,
    location,
    description,
    imageFile,
    imagePreview,
    setUserName,
    setTitle,
    setPrice,
    setLocation,
    setDescription,
    setImageFile,
    setImagePreview,
    onChangeUserName,
    onChangeTitle,
    onChangePrice,
    onChangeLocation,
    onChangeDescription,
  };

};

export default useUseditemUpload;