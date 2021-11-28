import {
  Overlay,
  Content,
  ImageContainer,
  Image,
} from './styles';

const ImageItem = ({imageUrl, text, title, userId, location, onClickImage}) => {
    return (
        <>
            <ImageContainer onClick={(e) => onClickImage(e, imageUrl, text, title, location, userId)}>
                <Image src={imageUrl} alt='photo'/>
                <Overlay>
                    <Content>{title}</Content>
                </Overlay>
            </ImageContainer>
        </>
    );
};

export default ImageItem;