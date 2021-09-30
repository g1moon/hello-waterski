import axios from 'axios';
import {useState, useEffect} from 'react';

export default (setLoginState) => {
    console.log('logout');
    axios.get('/api/logout')
        .then((res) => {
            if (res.status === 200) {
                setLoginState(false);
                alert('로그아웃을 성공했습니다.');
            } else {
                console.log('로그아웃실패');
            }
        })
        .catch((err) => console.log(err))
};