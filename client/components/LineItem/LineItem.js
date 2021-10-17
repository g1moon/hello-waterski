import React, {useEffect, useState} from 'react';
import {GiCancel} from "react-icons/gi";
import {
    Container,
    LineItemContainer,
    LineInfoContainer,
    ButtonContainer,
    UserInfoContainer,
    UserInfo,
    TypeContainer,
    Type,
    LineIndexContainer,
    LineIndex,
} from './styles';

const LineItem = ({setAllLineData, oneLineData, index}) => {
    //자신의 순서를 다르게 표현하기 위해
    if (oneLineData === null) return <div>로딩중</div>;

    const {userId, userName, spotId, boatType, ridingType} = oneLineData;
    const isMyLine = sessionStorage.getItem('userId') === userId;

    //현재 스키장 정보에서 삭제하고, 전체 라인 정보에서 ㅅ
    const onClickCancel = () => {
        //fetch추가해야함.
        //spotId 와 userId가 일치하면 -> 삭제
        setAllLineData(allLineData => {
            const targetIndex = allLineData.findIndex(line => line.userId === userId && line.spotId);
            allLineData.slice(targetIndex, 1);
            const newAllLineData = [...allLineData];
            newAllLineData.splice(targetIndex, 1);
            return newAllLineData;
        });
    };

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
                <ButtonContainer onClick={onClickCancel}>
                  {isMyLine && <GiCancel size={'20'}/>}
                </ButtonContainer>
            </LineItemContainer>
        </Container>
    );
};

export default LineItem;