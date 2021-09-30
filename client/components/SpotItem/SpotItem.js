import React from 'react';
import styled from "styled-components";
import Link from 'next/link';




const SpotItemContainer = styled.div`
  display: flex;
  background-color: rgba(246, 247, 245, 0.99);
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  height: 400px;
`;


//spot like
const SpotLikeContainer = styled.div`
  display: flex;
  align-items: center;

`;
const SpotLikeImage = styled.img`
  height: 1.3rem;
  
`;
const SpotLike = styled.p`
    margin-left: 2px;
  
`;


//spot info
const SpotInfoContainer = styled.div`
    width: 30%;
    padding-left: 30px;

`;
const SpotTitle = styled.h2``;
const SpotLocation = styled.p``;
const SpotIntro = styled.p`
1`;

//spot image
const SpotImageContainer = styled.div`
    display: flex;
  align-items: center;
  margin-right: 15px;
`;
const SpotImage = styled.img`
  width: 320px;
  height: 250px;
  object-fit: cover;
  

`;




const SpotItem = ({oneSpotData}) => {

    const {spotId, spotName, like, spotLocation, spotImage, spotIntro} = oneSpotData;


    return (
        <Link
            href={{
                pathname: `/line/[id]`,
                query: {id: spotId}
            }}>
        <SpotItemContainer>
            <SpotInfoContainer>
                <SpotTitle>{spotName}</SpotTitle>
                <SpotLocation>{spotLocation}</SpotLocation>
                <SpotIntro>{spotIntro}</SpotIntro>
                <SpotLikeContainer>
                    <SpotLikeImage src={'https://cdn-icons-png.flaticon.com/512/833/833300.png'}/>
                    <SpotLike>{like}</SpotLike>
                </SpotLikeContainer>
            </SpotInfoContainer>
            <SpotImageContainer>
                <SpotImage src={spotImage}/>
            </SpotImageContainer>
        </SpotItemContainer>
        </Link>



    );
};

export default SpotItem;