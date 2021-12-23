import fetcher from "../../utils/fetcher";
import {getLoginStatus} from "../../store/modules/user/saga";
import {useRouter} from "next/router";



const userServices = {
  async getUsers() {
    const users = await fetcher('get', '/users');
    if (!users) throw 'something error';
    return users;
  },

  async signUp({ id, nickname, password }) {
    // value : {id : string, nickname: string, paswwrod: string }
    const newUser = await fetcher('post', '/users', {id, nickname, password} );
    return newUser;
  },

  async login({loginId, loginPassword}) {
      const rightUserInfo = await fetcher('post', '/users/login', {loginId, loginPassword});
      if (!rightUserInfo) alert('로그인실패');
      return rightUserInfo;
  },

  async logout(id, name, nickname) {
    const logoutResult = await fetcher('post', '/users/logout', {id, name, nickname});
    if (!logoutResult) throw 'something error';
    return logoutResult;
  },

  async checkIdRedundancy(id) {
    return await fetcher('post', '/users/isPossibleId', {id});
  },
}
export default userServices;