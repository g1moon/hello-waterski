import React from 'react';
import LineItem from "../LineItem/LineItem";
import styled from "styled-components";

const Container = styled.div`
  width: 40%;
  margin: 0 auto;
  
`;

const LineList = ({oneSpotLineData}) => {

    return (
        <Container>
        {oneSpotLineData.map(oneLineData => <LineItem oneLineData={oneLineData}/>)
        }
        </Container>
    );
};

export default LineList;