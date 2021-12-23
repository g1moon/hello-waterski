import styled from "styled-components";
import {useEffect} from 'react';

const Modal = styled.div`
  display: ${props => props.isOpenModal ? "block" : "none"};
  position: relative;
  z-index: 100000000;
  background-color: #fefefe;
  margin: 5% auto 15% auto;
  width: 60%;
  border: 1px solid #888;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;


`;
const ImageTitle = styled.h1`
`;

const Image = styled.img`
  left: 0;
  top: 0;
  width: 500px;
  height: 500px;
  object-fit: cover;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;


`;

const ContentsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 15% 30px 15%;
`;


const ImageModall = ({isOpenImageModal, clickedImageInfo}) => {

    const {title, text, url, location, userId} = clickedImageInfo;
    return (
        <Modal isOpenModal={isOpenImageModal}>
            <HeaderContainer>
            <ImageTitle>{title}</ImageTitle>
                <span><b>위치: {location}</b></span>
                <span><b>작성자: {userId}</b></span>
            </HeaderContainer>
            <ImageContainer>
                <Image src={url}></Image>
            </ImageContainer>
            <ContentsContainer>
                <div>{text}</div>
            </ContentsContainer>
        </Modal>

    );
};

export default ImageModall;