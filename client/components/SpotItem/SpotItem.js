import React, {useEffect} from 'react';
import styled from "styled-components";
import Link from 'next/link';
import {
    SpotImage,
    SpotImageContainer,
    SpotInfoContainer,
    SpotIntro,
    SpotItemContainer, SpotLike,
    SpotLikeContainer,
    SpotLikeImage,
    SpotLocation,
    SpotTitle
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