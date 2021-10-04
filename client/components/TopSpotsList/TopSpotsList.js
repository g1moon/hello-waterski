import React, {useEffect} from 'react';
import SpotItem from "../SpotItem/SpotItem";
import styled from "styled-components";

const TopSpotListContainer = styled.div`
  margin: 50px 50px 100px 50px;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1400px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30rem;
    margin: 0 auto;
    min-width: 30rem;
  }
`;


const Title = styled.h1`
  padding: 24px 0 16px 16px;
  line-height: 40px;
  color: #292929;
  font-size: 40px;
  font-weight: bold;

`;

const Container = styled.div`
`;


const TopSpotsList = ({topThreeSpot}) => {

    return (
        <Container>
            <Title>인기수상스키장</Title>
            <TopSpotListContainer>
                {topThreeSpot.map(topSpot => {
                    return <SpotItem oneSpotData={topSpot}/>;
                })}
            </TopSpotListContainer>
        </Container>

    )
        ;
};

export default TopSpotsList;