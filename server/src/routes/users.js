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
  //body : "byeId": { "name": "bye", "nickanme": "바이", "age": 20 }
  {
    method: 'post',
    route: '/users',
    handler: (req, res) => {
      try {
        const body = req.body;
        const users = getUsers();
        const newUser = body;
        users.unshift(newUser);
        setUsers(users);
        res.send(newUser);
      } catch (err) {
        res.send({ error: err});
      }
    }
  },
  {
    method: 'post',
    route: '/users',
    handler: ({body}, res) => {
      try{
        const {userId} = body;
        console.log(log)
      } catch (err) {
        res.send({error: err})
      }
    }
  }
];

export default usersRoute