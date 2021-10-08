import NavBar from '../../layout/NavBar';
import Global from '../../styles/global';
import Images from '../../components/images/Images'
import styled from 'styled-components';
import {useState, useEffect, useRef} from 'react';
import UploadModal from '../../components/ImageUploadModal/UploadModal';
import ImageModall from '../../components/ImageModall/ImageModall';

const UploadButton = styled.button`
  background-color: #04AA6D;
  color: white;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  opacity: 0.9;
  text-align: center;
  width: 10%;
  position: relative;
  width: 100%;
  padding: 20px 20px;
  border-radius: 10px;

  &:hover {
    opacity: 1;
  }
`;

const Container = styled.div`
  left: 0;
  top: 0;
  position: absolute;
  z-index: 10;
`

const BodyBlackoutStyle = styled.div`
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .85);
  display: ${props => props.isOpenModal ? 'block' : 'none'};
`;

const ImagetalkContainer = styled.div`
  margin: 0 300px 0 300px;
  
`;


const Index = () => {
    const [isOpenUploadModal, setIsOpenUploadMdal] = useState(false);
    const [isOpenImageModal, setIsOpenImageModal] = useState(false)
    const [isActiveBlackout, setIsActiveBlackout] = useState(false);

    //blackout
    const $blackout = useRef(null);

    //imageModal을 위한 상태
    const [clickedImageInfo, setClickedImageInfo] = useState(null);


    //upload 버튼 누를 시
    const _onClickUpload = () => {
        setIsActiveBlackout(true)
        setIsOpenUploadMdal(true);
    };

    //blackout버튼 누를 시 -> 모든 모달 닫기
    const _onClickBlackout = () => {
        setIsActiveBlackout(false);
        setIsOpenImageModal(false);
        setIsOpenUploadMdal(false);
    };

    //image를 클릭 할 시 -> imageModal 보여주고, blackout 활성화
    const _onClickImage = (e, url, text, title) => {
        setIsActiveBlackout(true);
        setIsOpenImageModal(true);
        setClickedImageInfo({url, text, title});
    };


    //clickedImageInfo 가 변경되면 -> modal 변경
    useEffect(() => {
        console.log('dd', clickedImageInfo);
    }, [clickedImageInfo]);


    return (
        <>
            <Global/>
            <BodyBlackoutStyle ref={$blackout} isOpenModal={isActiveBlackout} onClick={_onClickBlackout}/>
            <Container>
                <NavBar isHome={false}></NavBar>
                <ImagetalkContainer>
                <h1>전국 스키장 현황</h1>
                <UploadButton onClick={_onClickUpload}>Upload</UploadButton>
                <div>
                    <Images _onClickImage={_onClickImage}/>
                </div>
                </ImagetalkContainer>
            </Container>
            <UploadModal isOpenUploadModal={isOpenUploadModal}
                         setIsOpenUploadMdal={setIsOpenUploadMdal}
            />
            {clickedImageInfo &&
            <ImageModall isOpenImageModal={isOpenImageModal}
                         clickedImageInfo={clickedImageInfo}></ImageModall>
            }
        </>
    )
        ;
}
;

export default Index;