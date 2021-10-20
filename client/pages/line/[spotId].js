import {useRouter} from 'next/router';
import {useEffect, useRef, useState} from "react";
import fetcher from "../../utils/fetcher";
import axios from 'axios';
import LineList from "../../components/LineList/LineList";
import SpotItem from "../../components/SpotItem/SpotItem";
import MainSpotInfo from "../../components/MainSpotInfo/MainSpotInfo";
import GlobalStyle from "../../styles/global";
import styled from "styled-components";
import CurrentWating from "../../components/CurrentWating";
import NavBar from "../../layout/NavBar";
import UploadModal from "../../components/ImageUploadModal/UploadModal";
import LineUploadModal from "../../components/LineUploadModal/LineUploadModal";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UploadButton = styled.button`
  background-color: #04AA6D;
  color: white;
  margin: 0.5rem 0 1.5rem 0;
  border: none;
  cursor: pointer;
  opacity: 0.8;
  text-align: center;
  position: relative;
  width: 100%;
  height: 70%;
  padding: 20px 20px;
  border-radius: 10px;
  font-size: 1rem;

  &:hover {
    opacity: 1;
  }
`;

const BodyBlackoutStyle = styled.div`
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .6);
  display: ${props => props.isOpenModal ? 'block' : 'none'};
`;

const MainInfoAndCurrent = styled.div`
  margin-left: 20px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 30px;
  }
`;

const WatingInfoContainer = styled.div`
  margin-bottom: 15px;
`;

const spotLine = ({query}) => {
  const router = useRouter();
  //이 아이디에 맞는 데이터를 찾아야함

  const spotId = router.query.spotId;

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [allLineData, setAllLineData] = useState([]);
  const [oneSpotLineData, setOneSpotLineData] = useState(null);


  const [allSpotData, setAllSpotData] = useState([]);
  const [oneSpotData, setOneSpotData] = useState(null);

  const [myTurn, setMyTurn] = useState(null);

  const [isOpenUploadModal, setIsOpenUploadModal] = useState(false);
  const [isActiveBlackout, setIsActiveBlackout] = useState(false);

  const $blackout = useRef(null)


  const getAllSpotData = async () => {
    // const data = await fetcher('get', '/data/spots.json');
    const data = await fetcher('get', '/spots');
    setAllSpotData(data);
  };

  const getAllLineData = async () => {
    // const data = await fetcher('get', '/data/line.json');
    const data = await fetcher('get', '/lines');
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

  //줄서기 등록
  const _onClickLineUp = () => {
    setIsOpenUploadModal(true);
    setIsActiveBlackout(true);
  }

  const _onClickBlackout = () => {
    setIsOpenUploadModal(false);
    setIsActiveBlackout(false);
  }

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

  if (oneSpotData === null || oneSpotLineData === null || myTurn === null) return <div>로딩중</div>;

  return (
    <>
      <Container>
        <BodyBlackoutStyle ref={$blackout} isOpenModal={isActiveBlackout} onClick={_onClickBlackout}/>
        <MainInfoAndCurrent>
          <WatingInfoContainer>
          <MainSpotInfo oneSpotInfo={oneSpotData}/>
          {myTurn !== -1
            ? (
              <CurrentWating myTurn={myTurn}/>
            ) : (
              <UploadButton onClick={_onClickLineUp}>줄 서기</UploadButton>
            )
          }
          </WatingInfoContainer>
        </MainInfoAndCurrent>
        <LineUploadModal isOpenUploadModal={isOpenUploadModal}
                         setIsOpenUploadModal={setIsOpenUploadModal}
                         setIsActiveBlackout={setIsActiveBlackout}
                         spotId={spotId}
                         setAllLineData={setAllLineData}
                         setOneSpotLineData={setOneSpotLineData}
        />
        <LineList oneSpotLineData={oneSpotLineData}
                  setAllLineData={setAllLineData}
        />
      </Container>
    </>

  );
};

export default spotLine;