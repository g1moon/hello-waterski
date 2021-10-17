import React from 'react';
import LineItem from "../LineItem/LineItem";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  margin: 0 60px 0 0;
  @media screen and (max-width: 1024px) {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

`;

const LineList = ({setAllLineData, oneSpotLineData}) => {

    return (
        <Container>
        {oneSpotLineData.map((oneLineData, index) => {
            return <LineItem oneSpotLineData={oneSpotLineData}
                             index={index+1}
                             setAllLineData={setAllLineData}
                             oneLineData={oneLineData}
            />;


        })
        }
        </Container>
    );
};

export default LineList;