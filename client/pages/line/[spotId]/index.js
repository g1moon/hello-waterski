import {useRouter} from 'next/router';
import {useEffect, useRef, useState} from "react";
import fetcher from "../../../utils/fetcher";
import LineList from "../../../components/LineList/LineList";
import MainSpotInfo from "../../../components/MainSpotInfo/MainSpotInfo";
import CurrentWating from "../../../components/CurrentWating";
import LineUploadModal from "../../../components/LineUploadModal/LineUploadModal";

import {
  Container,
  UploadButton,
  BodyBlackoutStyle,
  MainInfoAndCurrent,
  WatingInfoContainer,
} from './styles';


const spotLine = ({query, linesData, spotLikesData, spotsData}) => {
  const router = useRouter();
  //이 아이디에 맞는 데이터를 찾아야함

  const spotId = router.query.spotId;

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [allLineData, setAllLineData] = useState(linesData);
  const [oneSpotLineData, setOneSpotLineData] = useState(null);


  const [allSpotData, setAllSpotData] = useState(spotsData);
  const [oneSpotData, setOneSpotData] = useState(null);

  const [spotLikes, setSpotLikes] = useState(spotLikesData);

  const [myTurn, setMyTurn] = useState(null);

  const [isOpenUploadModal, setIsOpenUploadModal] = useState(false);
  const [isActiveBlackout, setIsActiveBlackout] = useState(false);

  const $blackout = useRef(null)


  const getAllSpotData = async () => {
    const data = await fetcher('get', '/spots');
    setAllSpotData(data);
  };

  const getAllLineData = async () => {
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
    getAndSetOneSpotData();
  }, [allSpotData]);

  useEffect(() => {
    getAndSetOneSpotLineData();
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

export const getServerSideProps = async () => {
  const linesData = await fetcher('get', '/lines');
  const spotLikesData = await fetcher('get', '/spotLikes');
  const spotsData = await fetcher('get', '/spots');
  return {
    props: {linesData, spotLikesData, spotsData},
  }
}

export default spotLine;