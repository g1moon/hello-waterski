import NavBar from '../../layout/NavBar';
import Global from '../../styles/global';
import styled from 'styled-components';
import {useState, useEffect, useRef} from 'react';
import UsedMarketSortingButton from '../../components/UsedMarketSortingButton';
import UsedItemList from '../../components/UsedItemList';
import Link from 'next/link';
import alertNeedToLogin from "../../utils/alertNeedToLogin";
import {useRouter} from "next/router";

const UsedMarketContainer = styled.div`
  margin: 0 150px 0 150px;
`;

const UploadButton = styled.button`
  background-color: #04AA6D;
  color: white;
  border: none;
  cursor: pointer;
  opacity: 0.8;
  text-align: center;
  width: 100%;
  height: 70%;
  padding: 20px 20px;
  border-radius: 10px;
  font-size: 1rem;
  margin-bottom: 1.5rem;

  &:hover {
    opacity: 1;
  }
`;

const Title = styled.h1`
`;


const Index = () => {
  const router = useRouter();

  const onClickUploadButton = () => {
    if (alertNeedToLogin()) return;
    router.push('/usedmarket/upload');
  };

    return (
      <>
        <Title>중고장터</Title>
        <UsedMarketContainer>
          {/*<Link href={'/usedmarket/upload'}>*/}
          <UploadButton onClick={onClickUploadButton}>
            Upload New Item
          </UploadButton>
          {/*</Link>*/}
          <UsedMarketSortingButton/>
          <UsedItemList/>
        </UsedMarketContainer>
      </>
    );

  }
;

export default Index;