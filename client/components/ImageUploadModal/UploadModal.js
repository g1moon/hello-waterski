import styled from "styled-components";
import {useEffect, useRef} from 'react';
//
// const Container = styled.div`
//   height: 100%;
//   width: 100%;
//   background-color: #fff;
//   position: fixed;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
//   padding: 45px;
//   display: block;
//   z-index: 10000000;
//   display: ${props => props.isOpenModal ? "block" : "none"};
//   pointer-events: ${props => props.isOpenModal ? "auto" : "none"};
// `;

const Modal = styled.div`
  display: ${props => props.isOpenModal ? "block" : "none"};
  position: fixed;
  z-index: 100000000;
  left: 0;
  top: 0;
  background-color: #474e5d;
  overflow: auto;
  width: 100%;
  height: 100%;
`;

const UploadForm = styled.form`
  //modal-content
  display: ${props => props.isOpenModal ? "block" : "none"};
  position: relative;
  z-index: 100000000;
  overflow: auto;
  background-color: #fefefe;
  margin: 5% auto 15% auto;
  width: 80%;
  border: 1px solid #888;
`;
const InnerFormContainer = styled.div`
  //container
  padding: 16px;
  display: flex;
  flex-direction: column;
`;


const FormHead = styled.h1``;

//label
const Label = styled.label``;
/*----------------Input------------------*/
const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;

  &:focus {
    background-color: #ddd;
    outline: none;
  }
`;

const TitleInput = styled(Input)``;
const ContentTextarea = styled.textarea`
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;

  &:focus {
    background-color: #ddd;
    outline: none;
  }
`;
const LocationInput = styled(Input)``;
;
const ImageInput = styled(Input)``;

/*-----------button-----------------*/
const ButtonContainer = styled.div`;
`;
const Button = styled.button`
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
`;

const UploadModal = ({isOpenUploadModal ,setIsOpenUploadMdal, setIsActiveBlackout}) => {
  const $uploadForm = useRef(null);

  const [title, setTitle, onChangeTitle] = useInput('');
  const [location, setLocation, onChangeLocation] = useInput('');
  const [contents, setContents, onChangeContents] = useInput('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

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
    setImageFile(e.target.files[0]);
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

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', imageFile);
    closeModal();
  };

  useEffect(() => {
    console.log('imagePreview', imagePreview);
  }, [imageFile, imagePreview]);



  return (
    <Container>
      <UploadForm ref={$uploadForm} isOpenModal={isOpenUploadModal} onSubmit={onSubmit} encType="multipart/form-data">
        <InnerFormContainer>
          <FormHead>이미지 업로드</FormHead>
          <hr/>
          <Label><b>Title</b></Label>
          <TitleInput placeholder='제목을 입력하세요.' value={title} onChange={onChangeTitle} type='text'/>

          <Label><b>Location</b></Label>
          <LocationInput placeholder='위치(수상스키장)를 입력하세요.' type='text' value={location} onChange={onChangeLocation}/>

          <Label><b>Contents</b></Label>
          <ContentTextarea placeholder='내용을 입력하세요.' value={contents} onChange={onChangeContents}/>

          <Label for='myFile'><b>Image</b></Label>
          <ImageInput type="file"
                      id="myFile"
                      name="image"
                      accept="image/*"
                      onChange={onChangeImageFile}/>

          {imagePreview !== null && <ImagePreview src={imagePreview} alt={'image preview'}/>}

          <ButtonContainer>
            <CancelButton><b>Cancel</b></CancelButton>
            <SubmitButton onClick={onSubmit}><b>Submit Image</b></SubmitButton>
          </ButtonContainer>
        </InnerFormContainer>
      </UploadForm>
    </Container>
  );
};

export default UploadModal;
