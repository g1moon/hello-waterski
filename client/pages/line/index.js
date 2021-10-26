import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import checkLogin from '../../utils/checkLogin';
import TopSpotsList from '../../components/TopSpotsList/TopSpotsList';
import fetcher from "../../utils/fetcher";
import SpotList from '../../components/SpotList/SpotList';
import Carousel from "../../components/carousel/Carousel";
import SearchBar from "../../components/SearchBar/SearchBar";
import {CarouselContainer} from "./styles";

const Line = ({spotLikesData, spotsData}) => {

    const router = useRouter();
    const [isLogin, setIsLogin] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [allSpotData, setAllSpotData] = useState([]);
    const [topThreeSpot, setTopThreeSpot] = useState([]);
    const [spotLikes, setSpotLikes] = useState(spotLikesData);

    const getAllSpotData = async () => {
        const data = await fetcher('get', '/spots');
        setAllSpotData(data);
    };

    const getTopThreeSpot = () => {
        let result;
        result = allSpotData.sort(function (a, b) {
            return b.like - a.like;
        });
        const topThree = result.slice(0, 3);
        setTopThreeSpot(topThree);
    };

    useEffect(() => {
        console.log('--', spotLikesData);
        setIsLoading(true);
        checkLogin(setIsLogin);
        getAllSpotData();
        setIsLoading(false);
    }, []);

    //spot데이터가 바뀌면 -> topThreespot가져오기
    useEffect(() => {
        getTopThreeSpot();
    }, [allSpotData]);

    if (isLoading) return <div>로딩</div>;

    return (
        <>
            <SearchBar/>
            <TopSpotsList topThreeSpot={topThreeSpot}/>
            <CarouselContainer>
                <Carousel/>
            </CarouselContainer>
            <SpotList allSpotData={allSpotData}/>
        </>
    );
};

export const getServerSideProps = async () => {
    const linesData = await fetcher('get', '/lines');
    const spotLikesData = await fetcher('get', '/spotLikes');
    const spotsData = await fetcher('get', '/spots');
    return {
        props: {linesData, spotLikesData, spotsData},
    };
};

export default Line;
