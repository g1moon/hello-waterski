import ImageItem from '../ImageItem/ImageItem';
import {Row, Col} from './styles';
import useImages from "../../hooks/useImages";

const Images = ({onClickImage}) => {

  const {imagesLoading, imagesData} = useImages();

  if (imagesLoading) return <div>로딩중...</div>

  return (
    <Row>
      {imagesData.map(({imageUrl, title, text, location, userId}) =>
        (
          <Col>
            <ImageItem imageUrl={imageUrl}
                       title={title}
                       text={text}
                       location={location}
                       userId={userId}
                       onClickImage={onClickImage}
            />
          </Col>
        )
      )}
    </Row>
  );
};

export default Images;



