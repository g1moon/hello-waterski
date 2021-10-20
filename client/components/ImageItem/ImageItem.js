import styled from 'styled-components';

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #008CBA;
  display: flex;
  border-radius: 20px;
`;

const Content = styled.div`
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
`;

const ImageContainer = styled.div`
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  cursor: pointer;

  
  &:hover ${Overlay} {
    opacity: 0.6;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
`;


const ImageItem = ({imageUrl, text, title, userId, location, _onClickImage}) => {


    return (
        <>
            <ImageContainer onClick={(e) => _onClickImage(e, imageUrl, text, title, location, userId)}>
                <Image src={imageUrl} alt='photo'/>
                <Overlay>
                    <Content>{title}</Content>
                </Overlay>
            </ImageContainer>
        </>
    );
};

export default ImageItem;