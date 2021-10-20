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
import fetcher from "../../utils/fetcher";

const LineItem = ({setAllLineData, oneLineData, index}) => {
    //자신의 순서를 다르게 표현하기 위해
    if (oneLineData === null) return <div>로딩중</div>;

    const {id, userId, userName, spotId, boatType, ridingType} = oneLineData;
    const isMyLine = sessionStorage.getItem('userId') === userId;

    const onClickCancelButton = async (id) => {
        const receivedId = await fetcher(
          'delete',
          `/lines/${id}`,
          {
              params: {userId, spotId}
          });

        setAllLineData(allLineData => {
            const targetIndexToDelete = allLineData.findIndex(line => line.id === receivedId + '');
            if (targetIndexToDelete < 0) return;
            const newAllLines = [...allLineData];
            newAllLines.splice(targetIndexToDelete, 1);
            return newAllLines;
        });
        alert('줄서기 등록이 취소 되었습니다.');
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
                <ButtonContainer onClick={() => onClickCancelButton(id)}>
                  {isMyLine && <GiCancel size={'20'}/>}
                </ButtonContainer>
            </LineItemContainer>
        </Container>
    );
};

export default LineItem;