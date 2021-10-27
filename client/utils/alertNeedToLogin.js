const alertNeedToLogin = () => {
  const userId = sessionStorage.getItem('userId');
  if (!userId) {
    alert('로그인이 필요합니다');
    return true;
  }

  return false;
};

export default alertNeedToLogin;