import {useRouter} from 'next/router';
import {useEffect, useState} from "react";
import fetcher from "../../utils/fetcher";
import axios from 'axios';
import LineList from "../../components/LineList/LineList";

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




    const getAllSpotData = async () => {
        // await axios.get('/data/spot.json')
        //     .then((result) => {
        //         setAllSpotData(result.data);
        //     })
        //     .catch((error) => {
        //         setError(error);
        //         console.log(error);
        //     });
        const data = await fetcher('get', '/data/spot.json');
        setAllSpotData(data);
    };

    const getAllLineData = async () => {
        // await axios.get('/data/line.json')
        //     .then((result) => {
        //         setAllLineData(result.data);
        //     })
        //     .catch((error) => setError(error));
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


    useEffect(() => {
        getAllSpotData();
        getAllLineData()
    }, []);


    useEffect( () => {
        getAndSetOneSpotLineData();
        getAndSetOneSpotData();
    }, [allLineData]);


    if (oneSpotData === null || oneSpotLineData === null) return <div>로딩중</div>;

    return (
        <>
            <LineList oneSpotLineData={oneSpotLineData}/>
        </>

    );
};

export default spotLine;