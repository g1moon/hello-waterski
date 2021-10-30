import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {ImageInput, ImagePreview} from "../../components/ImageUploadModal/styles";
import useInput from "../../hooks/useInput";
import axios from "axios";
import fetcher from "../../utils/fetcher";
import {useRouter} from "next/router";
import useditem from "../../apis/rest/useditem";
import {useditemAsyncAction} from "../../store/modules/useditem/saga";
import {useAppDispatch} from "../../store";
import useUseditemUpload from "../../hooks/useUseditemUpload";

const Container = styled.div`
  width: 50%;
  margin: 10px auto;
  height: 80rem;
`;
const UploadForm = styled.form`
  //modal-content
  flex-direction: column;
`;
const InnerFormContainer = styled.div`
  //container
  padding: 16px;
  display: flex;
  flex-direction: column;
`;
const FormHead = styled.h1`
  font-size: 2rem;
`;
const Label = styled.label`
  font-size: 0.8rem;
`;
const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;

  &:focus {
    background-color: #ddd;
    outline: none;
  }
`;
const UserNameInput = styled(Input)``;
const ItemTitleInput = styled(Input)``;
const ItemPrceInput = styled(Input)``;
const ItemLocationInput = styled(Input)``;
const DescriptionInput = styled.textarea`
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
  height: 5rem;

  &:focus {
    background-color: #ddd;
    outline: none;
  }
`;
const ButtonContainer = styled.div`;
`;
const Button = styled.button`
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  font-size: 0.8rem;

  &:hover {
    opacity: 1;
  }
`;
const CancelButton = styled(Button)`
  float: left;
  width: 50%;
  padding: 14px 20px;
  background-color: #f44336;
`;
const SubmitButton = styled(Button)`
  float: left;
  width: 50%;
  padding: 14px 20px;
  background-color: #04AA6D;
`;

const upload = () => {

  const {
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
  } = useUseditemUpload();


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

export default upload;