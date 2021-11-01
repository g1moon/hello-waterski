import {useAppDispatch, useAppSelector} from "../store";
import {LoginStatusSelector, userAction, UserSelector} from "../store/modules/user";
import {useCallback, useState} from "react";
import {userAsyncAction} from "../store/modules/user/saga";
import {useRouter} from "next/router";



const useUser = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [loginId, setLoginId] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [okLogin, setOkLogin] = useState(false);

  const [loginStatusLoading, loginStatus, loginStatusError] = [
    useAppSelector(LoginStatusSelector.loading),
    useAppSelector(LoginStatusSelector.data),
    useAppSelector(LoginStatusSelector.error),
  ];

  const [usersLoading, users, usersError] = [
    useAppSelector(UserSelector.loading),
    useAppSelector(UserSelector.data),
    useAppSelector(UserSelector.error),
  ];

  const getUsers = () => {
    dispatch(userAsyncAction.getUsers.request());
  };

  const login = (value) => {
    dispatch(userAsyncAction.login.request(value));
    console.log(loginStatus);
    // const a = isLogged() ? alert('성공') : alert('실패');
    // console.log(a);
  };

  const logout = () => {
    dispatch(userAction.logout());
  };

  const isLogged = () => !!loginStatus.id;

  const onClickLogin = (e) => {
    e.preventDefault();
    setLoginId('');
    setLoginPassword('');
    login({loginId, loginPassword});
  };


  const _onChangeInput = (e) => {
    e.preventDefault();
    e.target.name === 'id' ? setLoginId(e.target.value) : setLoginPassword(e.target.value);
  };

  const loginSuccess = () => {
    alert('로그인을 성공헀습니다.');
    router.push('/');
  };

  const onClickNAvLogout = () => {
    logout();
    alert('로그아웃되었습니다');
    router.push('/');
  };

  const onClickNavLogin = () => {
    router.push('/login');
  };

  return {
    loginStatusLoading,
    loginStatus,
    getUsers,
    login,
    logout,
    isLogged,
    loginId,
    loginPassword,
    okLogin,
    setLoginId,
    setLoginPassword,
    setOkLogin,
    onClickLogin,
    _onChangeInput,
    loginSuccess,
    onClickNAvLogout,
    onClickNavLogin,
  }

};

export default useUser;