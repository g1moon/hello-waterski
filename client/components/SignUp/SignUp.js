import React, {useEffect, useState} from 'react';
import useInput from "../../hooks/useInput";
import {useRouter} from "next/router";
import {Link} from 'next/link';
import {
  ButtonContainer,
  CancelButton,
  CheckMessage,
  Container,
  FormHead,
  IdChekcerButton,
  IdInputContainer,
  InnerFormContainer,
  Input,
  Label,
  SubmitButton,
  UploadForm
} from "./styles";
import fetcher from "../../utils/fetcher";
import {useAppDispatch} from "../../store";
import {userAsyncAction} from "../../store/modules/user/saga";
import userServices from "../../apis/rest/user";
import useSignUp from "../../hooks/useSignUp";


const SignUp = () => {

  const {
    password,
    passwordConfirm,
    isMatchedPassword,
    passwordCheckerVisibility,
    isPossibleId,
    setIsMatchedPassword,
    setPasswordCheckerVisibility,
    onChangeNickname,
    onChangePassword,
    onChangePasswordConfirm,
    onChangeId,
    onClickCancel,
    onSubmit,
    onClickIdChecker,
  } = useSignUp();


  useEffect(() => {
    passwordConfirm.length >= 1 ? setPasswordCheckerVisibility(true) : setPasswordCheckerVisibility(false);
    setIsMatchedPassword(password === passwordConfirm);
  }, [password, passwordConfirm, isMatchedPassword], passwordCheckerVisibility);


  return (
    <Container>
      <UploadForm>
        <InnerFormContainer>
          <FormHead>회원가입</FormHead>
          <hr/>
          <Label><b>Id</b></Label>
          <IdInputContainer>
            <Input onChange={onChangeId}/>
            <IdChekcerButton onClick={onClickIdChecker}>중복확인</IdChekcerButton>
          </IdInputContainer>
          {(
            isPossibleId
              ? <CheckMessage className='possible'>사용 가능한 아이디 입니다.</CheckMessage>
              : <CheckMessage className='impossible'>중복 확인을 완료해주시길 바랍니다.</CheckMessage>
          )}
          <Label><b>Nickname</b></Label>
          <Input onChange={onChangeNickname}/>
          <Label><b>Password</b></Label>
          <Input type={'password'} onChange={onChangePassword}/>
          <Label><b>Reapeat Password</b></Label>
          <Input type={'password'} onChange={onChangePasswordConfirm}/>
          {passwordCheckerVisibility &&
          (
            isMatchedPassword
              ? <CheckMessage className='possible'>password가 일치합니다!</CheckMessage>
              : <CheckMessage className='impossible'>password가 일치하지 않습니다.</CheckMessage>
          )
          }
          <ButtonContainer>
            <CancelButton onClick={onClickCancel}><b>Cancel</b></CancelButton>
            <SubmitButton onClick={onSubmit}><b>Submit</b></SubmitButton>
          </ButtonContainer>
        </InnerFormContainer>
      </UploadForm>
    </Container>
  );
};

export default SignUp;