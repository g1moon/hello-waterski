import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  border-top: 1px solid silver;
  border-bottom: 1px solid silver;
`;
const WatingNumber = styled.div`
    padding: 10px 0 10px 0;
    text-align: center;
    font-size: 4rem;
    color: rgba(255,0,0,.6);

  & .explanation {
      font-size: 2rem;
    }
  
    & .wating-nubmer {
      font-size: 3rem;
    }
`;


const CurrentWating = ({myTurn}) => {

    return (
      <Container>
        <WatingNumber>
            <div className='explanation'>현재 대기</div>
            <div className='wating-nubmer'>{myTurn}</div>
        </WatingNumber>

      </Container>
    );
};

export default CurrentWating;