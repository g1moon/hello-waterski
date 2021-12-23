import {readDB, writeDB} from '../dbController.js'

const getUsers = () => readDB('users');
const setUsers = (data) => writeDB('users', data);

const usersRoute = [
  {
    method: 'get',
    route: '/users',
    handler: (req, res) => {
      try {
        const users = getUsers();
        res.send(users);
      } catch (err) {
        res.send({error: err});
      }
    }
  },

  //get user들의 id에 따라 받아오기 users
  {
    method: 'get',
    route: '/users/:id',
    handler: ({ params: { id } }, res) => {
      try {
        const users = getUsers();
        const user = users[id];
        res.send(user);
      } catch (err) {
        res.status(500).send({error: err});
      }
    }
  },

  //post users (회원가입)
  //body : "byeId": { "name": "bye", "nickanme": "바이", "password": "~~' }
  //body : {name: string, nickname: string, password: string}
  {
    method: 'post',
    route: '/users',
    handler: ({body}, res) => {
      try {
        const users = getUsers();
        const newUser = {
          ...body,
        }
        users.unshift(newUser);
        setUsers(users);
        res.send(newUser);
      } catch (err) {
        res.send({ error: err});
      }
    }
  },
  //중복아이디 체크
  {
    method: 'post',
    route: '/users/isPossibleId',
    handler: ({body}, res) => {
      try {
        const requestedId = body.id;
        const users = getUsers();
        const result = users.findIndex(user => user.id === requestedId) === -1;
        res.send(result);
      } catch (err) {
        res.send({error: err});
      }
    }
  },
  //회원가입 체크 + user정보 저장.
  {
    method: 'post',
    route: '/users/login',
    handler: ( { body }, res) => {
      try {
        const {loginId, loginPassword} = body;
        const users = getUsers();
        const targetIndex = users.findIndex(user => user.id === loginId && user.password === loginPassword);
        res.send(targetIndex >= 0 ? users[targetIndex] : false);
      } catch (err) {
        res.send({error: err});
      }
    }
  }
];

export default usersRoute