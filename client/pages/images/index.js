import NavBar from '../../layout/NavBar';
import Global from '../../styles/global';
import Images from '../../components/images/Images'
import styled from 'styled-components';
import {useState, useEffect, useRef} from 'react';
import UploadModal from '../../components/ImageUploadModal/UploadModal';
import ImageModall from '../../components/ImageModall/ImageModall';
import fetcher from "../../utils/fetcher";


const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const UploadButton = styled.button`
  background-color: #04AA6D;
  color: white;
  border: none;
  cursor: pointer;
  opacity: 0.8;
  text-align: center;
  width: 100%;
  height: 70%;
  padding: 20px 20px;
  border-radius: 10px;
  font-size: 1rem;
  margin-bottom: 3rem;

  &:hover {
    opacity: 1;
  }
`;

const Container = styled.div`
  left: 0;
  top: 50px;
  position: absolute;
  z-index: 10;
  width: 100%;

`

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

const ImagetalkContainer = styled.div`
  margin: 40px 200px 0 200px;
`;


const Index = () => {
    const [isOpenUploadModal, setIsOpenUploadMdal] = useState(false);
    const [isOpenImageModal, setIsOpenImageModal] = useState(false)
    const [isActiveBlackout, setIsActiveBlackout] = useState(false);

    const [images, setImages] = useState([]);

    const getAndSetImages = async () => {
      const data = await fetcher('get', '/images');
      setImages(data);
    };

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
    const _onClickImage = (e, url, text, title, location, userId) => {
      setIsActiveBlackout(true);
      setIsOpenImageModal(true);
      setClickedImageInfo({url, text, title, location, userId});
    };


    useEffect(() => {
      getAndSetImages();
    }, []);

    //clickedImageInfo 가 변경되면 -> modal 변경
    useEffect(() => {
    }, [clickedImageInfo]);


    return (
      <>
        <BodyBlackoutStyle ref={$blackout} isOpenModal={isActiveBlackout} onClick={_onClickBlackout}/>
        <Container>
          <ImagetalkContainer>
            <h1>전국 스키장 현황</h1>
            <ButtonContainer>
              <UploadButton onClick={_onClickUpload}>Upload</UploadButton>
            </ButtonContainer>

            <Images images={images} _onClickImage={_onClickImage}/>
          </ImagetalkContainer>
        </Container>
        <UploadModal isOpenUploadModal={isOpenUploadModal}
                     setIsOpenUploadMdal={setIsOpenUploadMdal}
                     setIsActiveBlackout={setIsActiveBlackout}
                     setImages={setImages}

        />
        {clickedImageInfo &&
        <ImageModall isOpenImageModal={isOpenImageModal}
                     clickedImageInfo={clickedImageInfo}/>
        }
      </>
    )
      ;
  }
;

export default Index;