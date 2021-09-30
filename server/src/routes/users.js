import { readDB } from '../dbController.js'

const getUsers = () => readDB('users');
const setUsers = (data) => writeDB('users', data);

const usersRoute = [
    /*
    get users
    return[object] : {
    "gimoon": {
        "id": "gimoonId",
        "nickname": "기문"
    }, ...
    }
    */
    {
        method: 'get',
        route: '/users',
        handler: (req, res) => {
            const users = getUsers();
            res.send(users);
        }

    },

    //get users using unique id
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
                console.log(users);

                console.log('newUser', newUser);
                // console.log(users[newUser.id]);

                //추가
                users.unshift(newUser);
                console.log('newUsers', users);
                //새로 추가한 데이터를 세팅
                setUsers(users);
                res.send(newUser);


            } catch (err) {
                    res.send(err);
                }
            }
        },



];

export default usersRoute