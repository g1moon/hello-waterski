import Images from '../../components/images/Images'
import {useState, useEffect, useRef} from 'react';
import UploadModal from '../../components/ImageUploadModal/UploadModal';
import ImageModall from '../../components/ImageModall/ImageModall';
import fetcher from "../../utils/fetcher";
import useUser from "../../hooks/useUser";
import {
  ButtonContainer,
  UploadButton,
  Container,
  BodyBlackoutStyle,
  ImagetalkContainer,
} from './styles';
import {useAppDispatch} from "../../store";
import {useditemAsyncAction} from "../../store/modules/useditem/saga";
import {imageAsyncAction} from "../../store/modules/image/saga";
import useImages from "../../hooks/useImages";

const Index = () => {
  const dispatch = useAppDispatch();

  const [images, setImages] = useState([]);
    const [isOpenUploadModal, setIsOpenUploadModal] = useState(false);
    const [isOpenImageModal, setIsOpenImageModal] = useState(false)
    const [isActiveBlackout, setIsActiveBlackout] = useState(false);
    const [clickedImageInfo, setClickedImageInfo] = useState(null);

    const {checkNeedToLoginService} = useUser();

  const {getImages, imagesLoading, imagesData} = useImages();


    const $blackout = useRef(null);

    const onClickUpload = () => {
      if (checkNeedToLoginService()) return alert('로그인이 필요한 서비스입니다');
      setIsActiveBlackout(true)
      setIsOpenUploadModal(true);
    };

    const onClickBlackout = () => {
      setIsActiveBlackout(false);
      setIsOpenImageModal(false);
      setIsOpenUploadModal(false);
    };

    const onClickImage = (e, url, text, title, location, userId) => {
      setIsActiveBlackout(true);
      setIsOpenImageModal(true);
      setClickedImageInfo({url, text, title, location, userId});
    };

    useEffect(() => {
      getImages();
    }, []);

    if (imagesLoading) return <div>로딩중</div>;

    return (
      <>
        <BodyBlackoutStyle ref={$blackout} isOpenModal={isActiveBlackout} onClick={onClickBlackout}/>
        <Container>
          <ImagetalkContainer>
            <h1>전국 스키장 현황</h1>
            <ButtonContainer>
              <UploadButton onClick={onClickUpload}>Upload</UploadButton>
            </ButtonContainer>
            <Images images={imagesData} onClickImage={onClickImage}/>
          </ImagetalkContainer>
        </Container>
        <UploadModal isOpenUploadModal={isOpenUploadModal}
                     setIsOpenUploadMdal={setIsOpenUploadModal}
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