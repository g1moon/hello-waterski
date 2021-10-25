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
                <LikeButton>
                    <SpotLikeImage src={'https://cdn-icons-png.flaticon.com/512/833/833300.png'}/>
                    <SpotLike>{like}</SpotLike>
                </LikeButton>
            </SpotInfoContainer>
            <SpotImageContainer>
                <SpotImage src={spotImage}/>
            </SpotImageContainer>
        </SpotItemContainer>
        </Link>



    );
};

export default SpotItem;