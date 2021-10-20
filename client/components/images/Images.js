import ImageItem from '../ImageItem/ImageItem';
import styled from 'styled-components';
import {useEffect, useState} from "react";
import axios from "axios";
import fetcher from "../../utils/fetcher";

// const Row = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   padding: 0 4px;
// `;

const Row = styled.div`
  content: "";
  display: table;
  clear: both;
  margin: 0 auto;


  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

const Col = styled.div`
  float: left;
  width: 33.33%;
  height: 100%;

  @media screen and (max-width: 1400px) {
    display: flex;
    width: 50%;
  }

  @media screen and (max-width: 1024px) {
    display: flex;
    width: 100%;
    margin: 0 auto;
    
  }
`;
const Images = ({_onClickImage, images}) => {

  if (images === []) return <div>로딩중...</div>

  return (
    <Row>
      {images.map(({imageUrl, title, text, location, userId}) =>
        (
          <Col>
            <ImageItem imageUrl={imageUrl}
                       title={title}
                       text={text}
                       location={location}
                       userId={userId}
                       _onClickImage={_onClickImage}
            />
          </Col>
        )
      )}
    </Row>
  );
};

export default Images;



