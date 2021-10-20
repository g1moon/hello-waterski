import {useCallback, useEffect, useRef, useState} from 'react';
import {
  Container,
  UploadForm,
  InnerFormContainer,
  FormHead,
  Label,
  TitleInput,
  LocationInput,
  ButtonContainer,
  CancelButton,
  SubmitButton,
  ImageInput, ContentTextarea, ImagePreview,
} from './styles';
import useInput from "../../hooks/useInput";
import axios from "axios";
import fetcher from "../../utils/fetcher";

const UploadModal = ({isOpenUploadModal, setIsOpenUploadMdal, setIsActiveBlackout, setImages}) => {
  const $uploadForm = useRef(null);

  const [title, setTitle, onChangeTitle] = useInput('');
  const [location, setLocation, onChangeLocation] = useInput('');
  const [contents, setContents, onChangeContents] = useInput('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const imagePath = useRef('');

  const resetAllInputs = () => {
    setTitle('');
    setLocation('');
    setContents('');
    setImageFile(null);
    setImagePreview(null);
  };

  const closeModal = () => {
    setIsOpenUploadMdal(false);
    setIsActiveBlackout(false);
    resetAllInputs();
  };

  const onChangeImageFile = (e) => {
    setImageFile(prev => e.target.files[0]);
    const reader = new FileReader();

    // 1. 파일 읽고 버퍼에 저장.
    reader.readAsDataURL(e.target.files[0]);
    // 2. 읽기가 완료되면 아래 코드 실행.
    reader.onloadend = () => {
      const image = reader.result; //파일 비트맵 데이터(이거로 미리보기 가능)
      const imageString = image.toString(); //비트맵 데이터 저장 가능하게 스트링으로 변경.
      setImagePreview(imageString); //preview image 설정
    };
  };

  const saveImage = async () => {
    const formData = new FormData();
    formData.append("img", imageFile);
    await axios
    .post("/saveImage", formData)
    .then(res => {
      const {fileName} = res.data;
      imagePath.current = `http://localhost:8000/img/${fileName}`;
      alert("성공적으로 업로드 하였습니다.");
    })
    .catch(err => {
      console.error(err);
    });
  };

  const createNewPost = async () => {
    const userId = sessionStorage.getItem('userId');
    const imageUrl = imagePath.current;
    const objForPost = {title: title, contents, location, imageUrl, userId}
    const newPost = await fetcher('post', '/images', objForPost);
    setImages(prev => [newPost, ...prev]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await saveImage();
    await createNewPost()
    closeModal();
    resetAllInputs();
  };

  const onClickCancle = (e) => {
    e.preventDefault();
    closeModal();
    resetAllInputs();
  };

  return (
    <Container>
      <UploadForm ref={$uploadForm}
                  isOpenModal={isOpenUploadModal}
                  onSubmit={onSubmit}
                  encType="multipart/form-data"
                  method="post"
      >
        <InnerFormContainer>
          <FormHead>이미지 업로드</FormHead>
          <hr/>
          <Label><b>Title</b></Label>
          <TitleInput placeholder='제목을 입력하세요.' value={title} onChange={onChangeTitle} type='text'/>

          <Label><b>Location</b></Label>
          <LocationInput placeholder='위치(수상스키장)를 입력하세요.' type='text' value={location} onChange={onChangeLocation}/>

          <Label><b>Contents</b></Label>
          <ContentTextarea placeholder='내용을 입력하세요.' value={contents} onChange={onChangeContents}/>

          <Label for='imageFile'><b>Image</b></Label>
          <ImageInput type='file'
                      id='imageFile'
                      name='image'
                      accept='image/*'
                      onChange={onChangeImageFile}
          />

          {imagePreview !== null && <ImagePreview src={imagePreview} alt={'image preview'}/>}

          <ButtonContainer>
            <CancelButton onClick={onClickCancle}><b>Cancel</b></CancelButton>
            <SubmitButton onClick={onSubmit}><b>Submit Image</b></SubmitButton>
          </ButtonContainer>
        </InnerFormContainer>
      </UploadForm>
    </Container>
  );
};

export default UploadModal;
