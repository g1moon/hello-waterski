import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {GiCancel} from "react-icons/gi";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const LineItemContainer = styled.div`
  //background-color: ;
  border: 1px solid rgba(234, 237, 229, 0.99);
  background-color: ${props => props.isMyLine ? 'red' : 'rgba(246, 250, 225, 0.99)'};
  opacity: ${props => props.isMyLine ? '0.5' : '1'};
  border-radius: 20px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  width: 30rem;
  padding-bottom: 10px;
`;

const LineInfoContainer = styled.div``;
const ButtonContainer = styled.button`
  display: none;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  margin-right: 20px;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.3;
  }

  ${Container}:hover & {
    display: flex;
  }
`;

const UserInfoContainer = styled.div``;
const UserInfo = styled.span`
  font-weight: bold;
  margin-left: 10px;
  font-size: 12px;

`;

const TypeContainer = styled.div`
  margin-left: 10px;
  display: flex;
`;

const Type = styled.p`
  float: left;
  padding: 1px 6px;
  border-radius: 10px;
  line-height: 20px;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  background-color: rgb(29, 205, 255);
  margin: 4px 2px 4px 0;
  


`;

const LineIndexContainer = styled.div`
  display: flex;
  justify-content: end;
  
`;
const LineIndex = styled.span`
  font-size: 15px;
  margin: auto 5px auto 20px;
  
  color: ${props => props.isMyLine ? 'red' : 'black'};
  font-weight: ${props => props.isMyLine ? 'bold' :  'null'};
  font-size: ${props => props.isMyLine ? '20px' :  '15px'};
`;


const LineItem = ({oneLineData, index}) => {
    // {userId: 'userId11', userName: 'userName11', spotId: 'spotId2', boteType: '2021 MasterCraft', ridingType: 'OneSki-Free'}
    //자신의 순서를 다르게 표현하기 위해


    if (oneLineData === null) return <div>로딩중</div>;

    const {userId, userName, spotId, boatType, ridingType} = oneLineData;
    const isMyLine = sessionStorage.getItem('userId') === userId;



    return (
        <Container>
            <LineIndexContainer>
                <LineIndex isMyLine={isMyLine}>{index}</LineIndex>
            </LineIndexContainer>
            <LineItemContainer isMyLine={isMyLine}>
                <LineInfoContainer>
                    <TypeContainer>
                        <Type>{ridingType}</Type>
                        <Type>{boatType}</Type>
                    </TypeContainer>
                    <UserInfoContainer>
                        <UserInfo>{userName}({userId})</UserInfo>
                    </UserInfoContainer>
                </LineInfoContainer>
                <ButtonContainer onClick={(e) => console.log(userId) }>
                    <GiCancel size={'20'} ></GiCancel>
                </ButtonContainer>
            </LineItemContainer>
        </Container>
    );
};

export default LineItem;