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
import useUser from "../../hooks/useUser";
import {imageAsyncAction} from "../../store/modules/image/saga";
import {useAppDispatch} from "../../store";

const UploadModal = ({isOpenUploadModal, setIsOpenUploadMdal, setIsActiveBlackout, setImages}) => {
  const {loginStatus} = useUser();
  const $uploadForm = useRef(null);
  const dispatch = useAppDispatch();

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
    setImageFile(e.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => setImagePreview(reader.result.toString());
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(imageAsyncAction.postImage.request({
      title,
      contents,
      location,
      imageUrl: imagePath.current,
      userId: loginStatus.id,
      imageFile,
      imagePath
    }));
    closeModal();
    resetAllInputs();
  };

  const onClickCancel = (e) => {
    e.preventDefault();
    closeModal();
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
          <TitleInput name={'title'} placeholder='제목을 입력하세요.' value={title} onChange={onChangeTitle} type='text'/>

          <Label><b>Location</b></Label>
          <LocationInput name={'location'} placeholder='위치(수상스키장)를 입력하세요.' type='text' value={location} onChange={onChangeLocation}/>

          <Label><b>Contents</b></Label>
          <ContentTextarea name={'contents'} placeholder='내용을 입력하세요.' value={contents} onChange={onChangeContents}/>

          <Label for='imageFile'><b>Image</b></Label>
          <ImageInput type='file'
                      id='imageFile'
                      name='image'
                      accept='image/*'
                      onChange={onChangeImageFile}
          />

          {imagePreview !== null && <ImagePreview src={imagePreview} alt={'image preview'}/>}

          <ButtonContainer>
            <CancelButton onClick={onClickCancel}><b>Cancel</b></CancelButton>
            <SubmitButton onClick={onSubmit}><b>Submit Image</b></SubmitButton>
          </ButtonContainer>
        </InnerFormContainer>
      </UploadForm>
    </Container>
  );
};

export default UploadModal;
