import React, {useEffect, useState} from 'react';
import useInput from "../../hooks/useInput";
import {useRouter} from "next/router";
import {Link} from 'next/link';
import {
  ButtonContainer, CancelButton,
  Container,
  FormHead,
  InnerFormContainer,
  Input,
  Label, SubmitButton,
  UploadForm,
  IdChekcerButton,
  IdInputContainer,
  CheckMessage
} from "./styles";
import fetcher from "../../utils/fetcher";


const SignUp = () => {
  const [id, setId] = useState('');
  const [nickname, setNickname, onChangeNickname] = useInput('');
  const [password, setPassword, onChangePassword] = useInput('');
  const [passwordConfirm, setPasswordConfirm, onChangePasswordConfirm] = useInput('');
  const [isMatchedPassword, setIsMatchedPassword] = useState(true);
  const [passwordCheckerVisibility, setPasswordCheckerVisibility] = useState(false);

  const [isPossibleId, setIsPossibleId] = useState(false);

  const router = useRouter();

  const resetAllInputs = () => {
    setId('');
    setNickname('');
    setPassword('');
    setPasswordConfirm('');
  };

  const onChangeId = (e) => {
    setId(e.target.value);
    setIsPossibleId(false); //id값이 바뀌면 -> 중복체크 다시해야함.
  };

  const onClickCancel = (e) => {
    e.preventDefault();
    resetAllInputs();
    alert('회원 가입을 취소합니다.');
    router.push('/');
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const objForRegistrationId = {id, nickname, password}
    if (isPossibleId && isMatchedPassword === false) alert('아이디 중복 체크와 입력한 비밀번호들을 일치시켜주세요.');
    const newUser = await fetcher('post', '/users', objForRegistrationId);
    alert('회원가입을 완료헀습니다.')
    router.push('/login');
  };

  const onClickIdChecker = async (e) => {
    e.preventDefault();
    const objForIdChecking = {'id': id};
    const result = await fetcher('post', '/users/isPossibleId', objForIdChecking);
    result ? alert('사용가능한 아이디 입니다.') : alert('이미 사용중인 아이디 입니다. 다른 아이디를 입력하세요.');
    setIsPossibleId(result);
  }

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