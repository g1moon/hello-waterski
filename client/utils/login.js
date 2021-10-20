
import axios from 'axios';

const login = (loginData, destUrl, router) => {
    axios({
        method: 'post',
        url: 'api/login',
        baseURL: "http://localhost:3000",
        data: loginData
    })
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
