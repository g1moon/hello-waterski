import styled from 'styled-components';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Link from 'next/link';
import checkLogin from '../utils/checkLogin'
import logout from '../utils/logout';

const Container = styled.div`
  z-index: 100;
  display: flex;
  justify-content: space-between;
  margin: 0px 5px 60px 10px;
`;

const NavContents = styled.div`
  height: 60px;
  right: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;


const HomeButton = styled.a`
  font-weight: bold;
  color: ${props => props.isHome ? "blanchedalmond" : "black"};
  font-size: 25px;
  text-align: center;
  line-height: 60px;
  text-decoration: none;
  transition: opacity .5s;

  &:hover {
    opacity: 0.3;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavButtonLink = styled.a`
  color: ${props => props.isHome ? "blanchedalmond" : "black"};
  padding: 0px 16px;
  vertical-align: middle;
  line-height: 60px;
  text-decoration: none;
  font-size: 15px;
  transition: opacity .5s;

  &:hover {
    opacity: 0.3;
  }

  &.active {
    background-color: #ddd;
    color: black;
  }
`;

const LogoutButton = styled.button`
  color: black;
  padding: 14px 28px;
  font-size: 15px;
  cursor: pointer;
  border: none;
  background: none;
  transition: opacity .5s;

  &:hover {
    opacity: 0.3;
  }
`;
const LoginButton = styled.button`
  color: black;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background: none;

  &:hover {
    background-color: #04AA6D;
  }
`;


const NavBar = ({isHome}) => {

  const [isLogin, setIsLogin] = useState(null);

  useEffect(() => {
    checkLogin(setIsLogin);
  }, []);


  if (isLogin === null) {
    return <div></div>;
  }

  return (
    <Container>
      <HomeButton isHome={isHome} href='/'>HELLO WATERSKI</HomeButton>
      <NavContents>
        <NavButtonLink isHome={isHome} href='#'>출석체크</NavButtonLink>
        <NavButtonLink isHome={isHome} href='/imagetalk'>게시판</NavButtonLink>
        <NavButtonLink isHome={isHome} href='/usedmarket'>중고장터</NavButtonLink>
        <NavButtonLink isHome={isHome} href='/line'>줄서기</NavButtonLink>
        {isLogin
          ? <Link href='/'><LogoutButton onClick={() => logout(setIsLogin)}>Logout</LogoutButton></Link>
          : <Link href='/login'><LoginButton>Login</LoginButton></Link>
        }
      </NavContents>
    </Container>

  );
};

export default NavBar;
