import useUser from "../hooks/useUser";

const alertNeedToLogin = (userId) => {
  if (userId === '') {
    alert('로그인이 필요합니다');
    return true;
  } else {
    return false;
  }
};

export default alertNeedToLogin;