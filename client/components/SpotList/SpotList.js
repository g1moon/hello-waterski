import React from 'react';
import SpotItem from '../SpotItem/SpotItem';
import styled from "styled-components";

const Row = styled.div`
  content: "";
  display: table;
  clear: both;
  width: 80%;
  margin: 0 auto;

  &:after {
    content: "";
    display: table;
    clear: both;
  }`;
const Col = styled.div`
  float: left;
  width: 50%;
  height: 100%;
`;

const Title = styled.h1`
  padding: 24px 0 16px 16px;
  line-height: 40px;
  color: #292929;
  font-size: 40px;
  font-weight: bold;
`;

const Explanation = styled.div`
    
`;


const SpotList = ({allSpotData}) => {

    return (
        <>
            <Title>수상스키장 목록</Title>

        <Row>
        {allSpotData.map(oneSpotData => {
            return (
                <Col>
                <SpotItem oneSpotData={oneSpotData}/>
                </Col>
            );

            })}
        </Row>
        </>

    );
};

export default SpotList;