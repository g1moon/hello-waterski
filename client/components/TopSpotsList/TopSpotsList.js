import React, {useEffect} from 'react';
import SpotItem from "../SpotItem/SpotItem";
import styled from "styled-components";

const TopSpotListContainer = styled.div`
  margin: 50px 50px 100px 50px;
  display: flex;
  flex-direction: row;
`;

const Title = styled.h1`
  padding: 24px 0 16px 16px;
  line-height: 40px;
  color: #292929;
  font-size: 40px;
  font-weight: bold;
`;


const TopSpotsList = ({topThreeSpot}) => {



    return (
        <>
        <Title>인기수상스키장</Title>
        <TopSpotListContainer>
            {topThreeSpot.map(topSpot => {
                return <SpotItem oneSpotData={topSpot}/>;
            })}
        </TopSpotListContainer>
        </>
    );
};

export default TopSpotsList;