import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {ImageInput, ImagePreview} from "../../components/ImageUploadModal/styles";
import useInput from "../../hooks/useInput";
import axios from "axios";
import fetcher from "../../utils/fetcher";

const Container = styled.div`
  width: 50%;
  margin: 10px auto;
  height: 80rem;
`;

const UploadForm = styled.form`
  //modal-content
  flex-direction: column;
`;
const InnerFormContainer = styled.div`
  //container
  padding: 16px;
  display: flex;
  flex-direction: column;
`;


const FormHead = styled.h1`
  font-size: 2rem;
`;

//label
const Label = styled.label`
  font-size: 0.8rem;
`;

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

//userdItemId, userId, itemState,
//imageUrl 처리해야함.
const UserNameInput = styled(Input)``;
const ItemTitleInput = styled(Input)``;
const ItemPrceInput = styled(Input)``;
const ItemLocationInput = styled(Input)``;
const DescriptionInput = styled.textarea`
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
  height: 5rem;

  &:focus {
    background-color: #ddd;
    outline: none;
  }
`;


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
  font-size: 0.8rem;

  &:hover {
    opacity: 1;
  }
`;

const CancelButton = styled(Button)`
  float: left;
  width: 50%;
  padding: 14px 20px;
  background-color: #f44336;
`;
const SubmitButton = styled(Button)`
  float: left;
  width: 50%;
  padding: 14px 20px;
  background-color: #04AA6D;
`;


const upload = () => {

  const [usedItems, setUsedItems] = useState([]);

  const [userName, setUserName, onChangeUserName] = useInput('');
  const [title, setTitle, onChangeTitle] = useInput('');
  const [price, setPrice, onChangePrice] = useInput(0);
  const [location, setLocation, onChangeLocation] = useInput('');
  const [description, setDescription, onChangeDescription] = useInput('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const imagePath = useRef('');

  const getAndSetUsedItems = async () => {
    const data = await fetcher('get', '/useditems');
    setUsedItems(data);
  };

  const resetAllInputs = () => {
    setUserName('');
    setTitle('');
    setPrice(0);
    setLocation('');
    setDescription('');
    setImageFile(null);
    setImagePreview(null);
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
    await
    axios({
      method: 'post',
      url: '/saveImage',
      baseURL: "http://localhost:8000",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
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
    const objForPost = {
      title,
      price,
      location,
      description,
      userId,
      userName,
      imageUrl,
    }
    const newItem = await fetcher('post', '/useditems', objForPost);
    // setImages(prev => [newPost, ...prev]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await saveImage();
    await createNewPost()
    resetAllInputs();
  };

  useEffect(() => {
    getAndSetUsedItems();
  }, [usedItems]);

  if (usedItems === []) return <div>로딩중</div>;

  return (
    <>
      <Container>
        <UploadForm onSubmit={onSubmit}>
          <InnerFormContainer>
            <FormHead>중고아이템 판매 등록</FormHead>
            <hr/>
            <Label for='imageFile'><b>Image</b></Label>
            <ImageInput type='file'
                        id='imageFile'
                        name='image'
                        accept='image/*'
                        onChange={onChangeImageFile}
            />
            {imagePreview !== null && <ImagePreview src={imagePreview} alt={'image preview'}/>}
            <Label><b>UserName</b></Label>
            <UserNameInput onChange={onChangeUserName}/>
            <Label><b>Title</b></Label>
            <ItemTitleInput onChange={onChangeTitle}/>
            <Label><b>Price(원)</b></Label>
            <ItemPrceInput onChange={onChangePrice}/>
            <Label><b>Location</b></Label>
            <ItemLocationInput onChange={onChangeLocation}/>
            <Label><b>Description</b></Label>
            <DescriptionInput onChange={onChangeDescription}/>
            <ButtonContainer>
              <CancelButton><b>Cancel</b></CancelButton>
              <SubmitButton onClick={onSubmit}><b>Submit</b></SubmitButton>
            </ButtonContainer>
          </InnerFormContainer>
        </UploadForm>
      </Container>
    </>
  );
};

export default upload;