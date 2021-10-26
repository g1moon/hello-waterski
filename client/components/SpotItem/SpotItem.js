import React from 'react';
import Link from 'next/link';
import {
  LikeButton,
  SpotImage,
  SpotImageContainer,
  SpotInfoContainer,
  SpotIntro,
  SpotItemContainer, SpotLike,
  SpotLikeImage,
  SpotLocation,
  SpotTitle,
} from "./styles";
import SpotLikeButton from "../SpotLikeButton /SpotLikeButton";
import {router} from "next/router";


const SpotItem = ({oneSpotData}) => {

  const {spotId, spotName, like, spotLocation, spotImage, spotIntro} = oneSpotData;
  const userId = sessionStorage.getItem('userId');

  return (
    <>
      <SpotItemContainer>
        <SpotInfoContainer>
          <SpotTitle>{spotName}</SpotTitle>
          <SpotLocation>{spotLocation}</SpotLocation>
          <SpotIntro>{spotIntro}</SpotIntro>
          <SpotLikeButton likeCount={like} spotId={spotId}/>
        </SpotInfoContainer>
        <Link
          href={{
            pathname: `/line/[id]`,
            query: {id: spotId}
          }}>
          <SpotImageContainer>
            <SpotImage src={spotImage}/>
          </SpotImageContainer>
        </Link>
      </SpotItemContainer>
    </>
  );
};

export default SpotItem;