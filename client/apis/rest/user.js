import fetcher from "../../utils/fetcher";
import {getLoginStatus} from "../../store/modules/user/saga";
import {useRouter} from "next/router";


const userServices = {
  async getUsers() {
    const users = await fetcher('get', '/users');
    if (!users) throw 'something error';
    return users;
  },

  // async getLoginStatus() {
  //   const loginStatus = await fetcher('get', '/users/loginStatus');
  //   if(!loginStatus) throw 'something error';
  //   return loginStatus;
  // },

  async login({loginId, loginPassword}) {
    try{
      const rightUserInfo = await fetcher('post', '/users/login', {loginId, loginPassword});
      if (!rightUserInfo) alert('로그인실패');
      return rightUserInfo;
    } catch (err) {
      console.log('errrr');
      console.log(err);
    }
  },

  async logout(id, name, nickname) {
    const logoutResult = await fetcher('post', '/users/logout', {id, name, nickname});
    if (!logoutResult) throw 'something error';
    return logoutResult;
  },
}

export default userServices;