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


const UploadModal = ({isOpenUploadModal, setIsOpenUploadMdal}) => {
    const $background = useRef(null);
    const $uploadForm = useRef(null);


    const _closeModal = () => {
        console.log('click butto');
    };

    return (
        <>
            <UploadForm ref={$uploadForm} isOpenModal={isOpenUploadModal}>
                <InnerFormContainer>
                    <FormHead>이미지 업로드</FormHead>
                    <p>빈간에 알맞는 정보를 넣어주세요.</p>
                    <hr/>
                    <Label><b>Title</b></Label>
                    <TitleInput placeholder='제목을 입력하세요.' type='text'></TitleInput>

                    <Label><b>Content</b></Label>
                    <ContentTextarea placeholder='타이틀을 입력하세요.'></ContentTextarea>

                    <Label><b>Location</b></Label>
                    <LocationInput placeholder='위치(수상스키장)를 입력하세요.' type='text'></LocationInput>

                    <Label><b>Image</b></Label>
                    <LocationInput placeholder='이미지를 업로드하세요' type='text'></LocationInput>

                    <ButtonContainer>
                        <CancelButton><b>Cancel</b></CancelButton>
                        <SubmitButton><b>Submit Image</b></SubmitButton>
                    </ButtonContainer>
                </InnerFormContainer>
            </UploadForm>

        </>
    );
};

export default UploadModal;
