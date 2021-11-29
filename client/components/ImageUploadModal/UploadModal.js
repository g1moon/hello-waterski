import {useRef, useState} from 'react';
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
import useUser from "../../hooks/useUser";
import {imageAsyncAction} from "../../store/modules/image/saga";
import {useAppDispatch} from "../../store";
import useForm from "../../hooks/useForm";
import {createImageUploadFormError} from "../../utils/vaidate";

const UploadModal = ({isOpenUploadModal, setIsOpenUploadMdal, setIsActiveBlackout, setImages}) => {
  const {loginStatus} = useUser();
  const $uploadForm = useRef(null);
  const dispatch = useAppDispatch();

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const imagePath = useRef('');

  const initialForm = {
    title: '',
    contents: '',
    location: '',
  }

  const restDataForSubmit = {
    imageFile: image,
    imagePath,
    userId: loginStatus.id
  }

  const onSubmitForm = (objectForSubmit) => {
    dispatch(imageAsyncAction.postImage.request(objectForSubmit));
    closeModal();
  };

  const {onChangeHandler, onSubmitHandler, setForm, form, resetForm} =
    useForm({initialForm, onSubmitForm, restDataForSubmit, createFormError: createImageUploadFormError});

  const closeModal = () => {
    setIsOpenUploadMdal(false);
    setIsActiveBlackout(false);
    resetForm();
  };

  const onChangeImageFile = (e) => {
    const reader = new FileReader();
    setImage(e.target.files[0]);
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => setImagePreview(reader.result.toString());
  };

  const onClickCancel = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <Container>
      <UploadForm ref={$uploadForm}
                  isOpenModal={isOpenUploadModal}
                  onSubmit={onSubmitHandler}
                  encType="multipart/form-data"
                  method="post"
      >
        <InnerFormContainer>
          <FormHead>이미지 업로드</FormHead>
          <hr/>
          <Label><b>Title</b></Label>
          <TitleInput name={'title'} placeholder='제목을 입력하세요.' value={form.title} onChange={onChangeHandler} type='text'/>

          <Label><b>Location</b></Label>
          <LocationInput name={'location'} placeholder='위치(수상스키장)를 입력하세요.' type='text' value={form.location} onChange={onChangeHandler}/>

          <Label><b>Contents</b></Label>
          <ContentTextarea name={'contents'} placeholder='내용을 입력하세요.' value={form.contents} onChange={onChangeHandler}/>

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
            <SubmitButton onClick={onSubmitHandler}><b>Submit Image</b></SubmitButton>
          </ButtonContainer>
        </InnerFormContainer>
      </UploadForm>
    </Container>
  );
};

export default UploadModal;
