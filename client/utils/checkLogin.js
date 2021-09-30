
import axios from 'axios';
import {useState, useEffect} from 'react';

export default (setLoginState, destUrl, router) => {
    console.log('check login');
    axios.get('api/isLogin')
        .then((res) => {
            if (res.status === 200 && res.data.id) {
                //로그인
                console.log('checklogin-login');
                setLoginState(true);
            } else {
                //로그인 아님
                console.log('checklogin-is not login');
                setLoginState(false);
            }
        })
        .catch((err) => {
            console.log(err);
        });
};

