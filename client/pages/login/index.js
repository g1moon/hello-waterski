import {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {useRouter} from 'next/router';
import login from '../../utils/login';
const Container = styled.div`
  
  margin: auto;

  width: 40%; /* Full width */
  height: 40%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  padding-top: 60px;
`;

const LoginForm = styled.form``;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  width: 60%;
  height: auto;
`;

const InputContainer = styled.div``;

const Label = styled.label``;
const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

const Button = styled.button`
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;

  &:hover {
    opacity: 0.6;
  }
`;


const LoginPage = () => {

    const [loginId, setLoginId] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const router = useRouter();

    const _onSubmitLogin = (e) => {
        e.preventDefault();
        setLoginId('');
        setLoginPassword('');
        console.log('login');
        const body = {id: loginId, password: loginPassword}
        login(body, '/', router);
    };

    const _onChangeInput = (e) => {
        e.preventDefault();
        e.target.name === 'id' ? setLoginId(e.target.value) : setLoginPassword(e.target.value);
    };
    return (
        <Container>
            <LoginForm onSubmit={_onSubmitLogin}>
                <ImageContainer>
                    <Image src='https://cdn-icons-png.flaticon.com/512/1177/1177568.png'></Image>
                </ImageContainer>
                <InputContainer>
                    <Label>ID</Label>
                    <Input type='text'
                           name='id'
                           plceholder='enter user id'
                           value={loginId}
                           onChange={_onChangeInput}
                    />

                    <Label>PASSWORD</Label>
                    <Input type='password'
                           name='password'
                           plceholder='enter password'
                           value={loginPassword}
                           onChange={_onChangeInput}

                    />
                </InputContainer>
                <Button type='button' onClick={_onSubmitLogin}>Login</Button>
            </LoginForm>
        </Container>
    );
};

export default LoginPage;