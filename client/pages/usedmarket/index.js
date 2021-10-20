import NavBar from '../../layout/NavBar';
import Global from '../../styles/global';
import styled from 'styled-components';
import {useState, useEffect, useRef} from 'react';
import UsedMarketSortingButton from '../../components/UsedMarketSortingButton';
import UsedItemList from '../../components/UsedItemList';


const UsedMarketContainer = styled.div`
  margin: 0 150px 0 150px;
`;

const Title = styled.h1`
`;


const Index = () => {

        return (
            <>
                <Title>중고장터</Title>
                <UsedMarketContainer>
                    <UsedMarketSortingButton/>
                    <UsedItemList/>
                </UsedMarketContainer>
            </>
        );

    }
;

export default Index;