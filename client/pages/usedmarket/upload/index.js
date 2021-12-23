import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {ImageInput, ImagePreview} from "../../../components/ImageUploadModal/styles";
import useInput from "../../../hooks/useInput";
import axios from "axios";
import fetcher from "../../../utils/fetcher";
import {useRouter} from "next/router";
import useditem from "../../../apis/rest/useditem";
import {useditemAsyncAction} from "../../../store/modules/useditem/saga";
import {useAppDispatch} from "../../../store";

import {
  Container,
  UploadForm,
  InnerFormContainer,
  FormHead,
  Label,
  UserNameInput,
  ItemTitleInput,
  ItemPrceInput,
  ItemLocationInput,
  DescriptionInput,
  ButtonContainer,
  CancelButton,
  SubmitButton,
} from './styles';
import {PAGE_URL} from "../../../constants/PageUrl";
import {AERT_MESSAGE as ALERT_MESSAGE} from "../../../constants/AlertMessage";

const index = () => {

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
      setImagePreview(image.toString()); //preview image 설정
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
    alert(ALERT_MESSAGE.CANCEL_ITEM_UPLOAD);
    router.push(PAGE_URL.USED_MARKET);
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
    router.push(PAGE_URL.USED_MARKET);
  };

  return (
    <>
      <Container>
        <UploadForm onSubmit={onSubmit}>
          <InnerFormContainer>
            <FormHead>중고아이템 판매 등록</FormHead>
            <hr/>
            <Label for='imageFile'><b>Image</b></Label>
            <ImageInput type='file'
                        id='imageFile'
                        name='image'
                        accept='image/*'
                        onChange={onChangeImageFile}
            />
            {imagePreview !== null && <ImagePreview src={imagePreview} alt={'image preview'}/>}
            <Label><b>UserName</b></Label>
            <UserNameInput onChange={onChangeUserName}/>
            <Label><b>Title</b></Label>
            <ItemTitleInput onChange={onChangeTitle}/>
            <Label><b>Price(원)</b></Label>
            <ItemPrceInput onChange={onChangePrice}/>
            <Label><b>Location</b></Label>
            <ItemLocationInput onChange={onChangeLocation}/>
            <Label><b>Description</b></Label>
            <DescriptionInput onChange={onChangeDescription}/>
            <ButtonContainer>
              <CancelButton onClick={onClickCancel}><b>Cancel</b></CancelButton>
              <SubmitButton onClick={onSubmit}><b>Submit</b></SubmitButton>
            </ButtonContainer>
          </InnerFormContainer>
        </UploadForm>
      </Container>
    </>
  );
};

export default index;