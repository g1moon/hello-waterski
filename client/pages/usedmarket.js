import NavBar from '../layout/NavBar';
import Global from '../styles/global';
import styled from 'styled-components';
import {useState, useEffect, useRef} from 'react';
import UsedMarketSortingButton from '../components/UsedMarketSortingButton';
import UsedItemList from '../components/UsedItemList';


const UsedMarketContainer = styled.div`
  margin: 0 150px 0 150px;
`;


const Usedmarket = () => {

        return (
            <>
                <Global/>
                <NavBar></NavBar>
                <h1>중고장터</h1>
                <UsedMarketContainer>
                <UsedMarketSortingButton/>
                <UsedItemList/>
                </UsedMarketContainer>
            </>
        );

    }
;

export default Usedmarket;