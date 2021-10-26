
import axios from 'axios';
import {useState, useEffect} from 'react';

const checkLogin =  (setLoginState, destUrl, router) => {
    axios({
        method: 'get',
        url: 'api/isLogin',
        baseURL: "http://localhost:3000",
    })
    .then((res) => {
        if (res.status === 200 && res.data.id) {
            //로그인
            setLoginState(true);
        } else {
            //로그인 아님
            setLoginState(false);
        }
    })
    .catch((err) => {
        console.log('errrrrr');
        console.log(err);
    });
};

export default checkLogin;
