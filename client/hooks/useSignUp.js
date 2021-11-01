import {useRouter} from "next/router";
import {useAppDispatch} from "../store";
import {useState} from "react";
import useInput from "./useInput";
import {SIGN_UP, SIGN_UP_FAILURE, SIGN_UP_SUCCESS, userAsyncAction} from "../store/modules/user/saga";
import userServices from "../apis/rest/user";

const useSignUp = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [id, setId] = useState('');
  const [nickname, setNickname, onChangeNickname] = useInput('');
  const [password, setPassword, onChangePassword] = useInput('');
  const [passwordConfirm, setPasswordConfirm, onChangePasswordConfirm] = useInput('');
  const [isMatchedPassword, setIsMatchedPassword] = useState(true);
  const [passwordCheckerVisibility, setPasswordCheckerVisibility] = useState(false);
  const [isPossibleId, setIsPossibleId] = useState(false);


  const resetAllInputs = () => {
    setId('');
    setNickname('');
    setPassword('');
    setPasswordConfirm('');
  };

  const onChangeId = (e) => {
    setId(e.target.value);
    setIsPossibleId(false);
  };

  const onClickCancel = (e) => {
    e.preventDefault();
    resetAllInputs();
    alert('회원 가입을 취소합니다.');
    router.push('/');
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const objForRegistrationId = {id, nickname, password};
    if (!isPossibleId || !isMatchedPassword) alert('아이디 중복 체크와 입력한 비밀번호들을 일치시켜주세요.');
    resetAllInputs();
    dispatch(userAsyncAction.signUp.request(objForRegistrationId));
    alert('회원가입을 성공했습니다.');
    router.push('/login');
  };

  const onClickIdChecker = async (e) => {
    e.preventDefault();
    const isPossible = await userServices.checkIdRedundancy(id);
    alert(isPossible ? '사용가능한 아이디 입니댜.' : '중복된 아이디 입니다. 다른아이디를 입력하세요');
    setIsPossibleId(isPossible);
  }

  return {
    id,
    nickname,
    password,
    passwordConfirm,
    isMatchedPassword,
    passwordCheckerVisibility,
    isPossibleId,
    setId,
    setNickname,
    setPassword,
    setPasswordConfirm,
    setIsMatchedPassword,
    setPasswordCheckerVisibility,
    setIsPossibleId,
    onChangeNickname,
    onChangePassword,
    onChangePasswordConfirm,
    resetAllInputs,
    onChangeId,
    onClickCancel,
    onSubmit,
    onClickIdChecker,
  }

};

export default useSignUp;