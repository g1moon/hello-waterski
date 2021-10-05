
import axios from 'axios';
import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';


const login = (loginData, destUrl, router) => {
    axios.post('/api/login', loginData)
        .then((res) => {
            if (res.status === 200) {
                sessionStorage.setItem('userId', loginData.id);
                alert('로그인을 성공하셨습니다.');
                router.push(destUrl);
            }
        })
        .catch((err) => {
            console.log(err);
        });
};

export default login;
