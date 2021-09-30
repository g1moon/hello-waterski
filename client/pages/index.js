import Link from 'next/link';
import Nav from '../layout/Nav';
import styled from 'styled-components';
import NavBar from '../layout/NavBar';
import GlobalStyle from '../styles/global';
import Intro from '../components/home/Intro';
import Header from '../components/Header/Header';

const Home = () => {
    return (
        <>
            <GlobalStyle/>
                <Header/>
        </>
    );
};

export default Home; 