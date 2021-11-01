import styled from 'styled-components';
import {useState, useEffect} from 'react';
import Link from 'next/link';
import checkLogin from '../utils/checkLogin'
import logout from '../utils/logout';
import {store, useAppSelector} from "../store";
import {LoginStatusSelector} from "../store/modules/user";
import useUser from "../hooks/useUser";
import {useSelector} from "react-redux";

const Container = styled.div`
  z-index: 100;
  display: flex;
  justify-content: space-between;
  background: none;

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
  cursor: pointer;

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
  cursor: pointer;

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

  const {loginStatusLoading, loginStatus, onClickNAvLogout, onClickNavLogin} = useUser();
  console.log(loginStatus);

  return (
    <Container>
      <Link isHome={isHome} href='/'><HomeButton isHome={isHome}>HELLO WATERSKI</HomeButton></Link>
      <NavContents>
        <Link href='#'><NavButtonLink isHome={isHome}>출석체크</NavButtonLink></Link>
        <Link href='/images'><NavButtonLink isHome={isHome}>게시판</NavButtonLink></Link>
        <Link href='/usedmarket'><NavButtonLink isHome={isHome}>중고장터</NavButtonLink></Link>
        <Link href='/line'><NavButtonLink isHome={isHome}>줄서기</NavButtonLink></Link>
        {loginStatus.id === ''
          ? <LogoutButton onClick={onClickNavLogin}>login</LogoutButton>
          : <LoginButton onClick={onClickNAvLogout}>logout</LoginButton>
        }
      </NavContents>
    </Container>

  );
};

export default NavBar;
