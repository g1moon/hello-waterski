import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import axios from 'axios';
import logout from '../../utils/logout';
import checkLogin from '../../utils/checkLogin';
import NavBar from '../../layout/NavBar';
import TopSpotsList from '../../components/TopSpotsList/TopSpotsList';
import fetcher from "../../utils/fetcher";
import SpotList from '../../components/SpotList/SpotList';
import Carousel from "../../components/carousel/Carousel";
import styled from "styled-components";
import GlobalStyle from "../../styles/global";
import SearchBar from "../../components/SearchBar/SearchBar";
import {useCallback} from "react";

const CarouselContainer = styled.div`
  width: 100%;
  margin: 0 auto 50px auto;
`;

const Line = () => {

    const router = useRouter();
    const [isLogin, setIsLogin] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [allSpotData, setAllSpotData] = useState([]);
    const [topThreeSpot, setTopThreeSpot] = useState([]);


    //모든 spot데이터 가져오기
    const getAllSpotData = async () => {
        const data = await fetcher('get', '/data/spot.json');
        setAllSpotData(data);
    };

    //상위 3개 spot설정
    const getTopThreeSpot = () => {
        let result;
        result = allSpotData.sort(function (a, b) {
            return b.like - a.like;
        });
        const topThree = result.slice(0, 3);
        setTopThreeSpot(topThree);
    };

    //처음에 모든 spot데이터 받아오기
    useEffect(() => {
        setIsLoading(true);
        checkLogin(setIsLogin);
        getAllSpotData();
        setIsLoading(false);



    }, []);

    //spot데이터가 바뀌면 -> topThreespot가져오기
    useEffect(() => {
        getTopThreeSpot();
    }, [allSpotData]);


    if (isLoading) {
        console.log('로오딩');
        return <div>로딩</div>;
    }



    return (
        <>
            <GlobalStyle/>
            <NavBar/>
            <SearchBar/>
            <TopSpotsList topThreeSpot={topThreeSpot}/>
            <CarouselContainer>
                <Carousel/>
            </CarouselContainer>
            <SpotList allSpotData={allSpotData}/>
        </>

    );

};

export default Line;
