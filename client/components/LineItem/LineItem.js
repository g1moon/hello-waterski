import React from 'react';
import styled from "styled-components";
import {GiCancel} from "react-icons/gi";

const Container = styled.div`
  background-color: navajowhite;
  border-radius: 30px;
  padding-bottom: 20px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  
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
  
  ${Container}:hover &{
    display: block;
  }
`;

const UserInfoContainer = styled.div``;
const UserInfo = styled.span`
  font-weight: bold;
  margin-left: 20px;

`;

const TypeContainer = styled.div`
  margin-left: 20px;
  display: flex;
`;
const Type = styled.p`
  margin-right: 10px;
  float: left;
  padding: 3px 8px;
  border-radius: 10px;
  line-height: 20px;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  background-color: #a6a6a6;
`;


const LineItem = ({oneLineData}) => {
    console.log(oneLineData);
    // {userId: 'userId11', userName: 'userName11', spotId: 'spotId2', boteType: '2021 MasterCraft', ridingType: 'OneSki-Free'}
    const {userId, userName, spotId, boatType, ridingType} = oneLineData;
    return (
        <Container>
            <LineInfoContainer>
                <TypeContainer>
                    <Type>{ridingType}</Type>
                    <Type>{boatType}</Type>
                </TypeContainer>
                <UserInfoContainer>
                    <UserInfo>{userName}({userId})</UserInfo>
                </UserInfoContainer>
            </LineInfoContainer>
            <ButtonContainer>
                <GiCancel size={'25'}></GiCancel>
            </ButtonContainer>
        </Container>
    );
};

export default LineItem;