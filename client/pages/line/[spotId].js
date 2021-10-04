import {useRouter} from 'next/router';
import {useEffect, useState} from "react";
import fetcher from "../../utils/fetcher";
import axios from 'axios';
import LineList from "../../components/LineList/LineList";
import SpotItem from "../../components/SpotItem/SpotItem";
import MainSpotInfo from "../../components/MainSpotInfo/MainSpotInfo";
import GlobalStyle from "../../styles/global";
import styled from "styled-components";
import CurrentWating from "../../components/CurrentWating";
import NavBar from "../../layout/NavBar";

const Container = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
`;

const MainInfoAndCurrent = styled.div`
    margin-left: 20px;

  @media screen and (max-width: 1024px){
    margin-bottom: 30px;
  }
`;


const spotLine = ({query}) => {
    const router = useRouter();
    //이 아이디에 맞는 데이터를 찾아야함

    const spotId = router.query.spotId;
    console.log(spotId);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [allLineData, setAllLineData] = useState([]);
    const [oneSpotLineData, setOneSpotLineData] = useState(null);


    const [allSpotData, setAllSpotData] = useState([]);
    const [oneSpotData, setOneSpotData] = useState(null);

    const [myTurn, setMyTurn] = useState(null);



    const getAllSpotData = async () => {
        const data = await fetcher('get', '/data/spot.json');
        setAllSpotData(data);
    };

    const getAllLineData = async () => {
        const data = await fetcher('get', '/data/line.json');
        setAllLineData(data);
    };


    const getAndSetOneSpotData = () => {
        const res = allSpotData.find(spot => spot.spotId === spotId);
        setOneSpotData(res);
    };

    const getAndSetOneSpotLineData = () => {
        const res = allLineData.filter(oneLine => {
            return oneLine.spotId === spotId;
        });
        setOneSpotLineData(res);

    };

    const getMyTurn = () => {

        //useId를 가져오고
        const userId = sessionStorage.getItem('userId');
        setMyTurn(oneSpotLineData.findIndex(line => line.userId === userId));
    };


    useEffect(() => {
        getAllSpotData();
        getAllLineData()
    }, []);


    useEffect(() => {
        getAndSetOneSpotLineData();
        getAndSetOneSpotData();
    }, [allLineData]);


    useEffect(() => {
        if (oneSpotLineData === null) return;
        getMyTurn();
    }, [oneSpotLineData]);


    useEffect(() => {
        console.log(myTurn);
    }, [myTurn]);

    if (oneSpotData === null || oneSpotLineData === null || myTurn === null) return <div>로딩중</div>;

    return (
        <>
            <NavBar/>
        <Container>
            <GlobalStyle></GlobalStyle>
            <MainInfoAndCurrent>
                <MainSpotInfo oneSpotInfo={oneSpotData}></MainSpotInfo>
                <CurrentWating myTurn={myTurn}></CurrentWating>
            </MainInfoAndCurrent>
            <LineList oneSpotLineData={oneSpotLineData}/>
        </Container>
        </>

    );
};

export default spotLine;