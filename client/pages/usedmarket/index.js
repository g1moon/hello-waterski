import styled from 'styled-components';
import UsedMarketSortingButton from '../../components/UsedMarketSortingButton';
import UsedItemList from '../../components/UsedItemList';
import {useRouter} from "next/router";
import useUser from "../../hooks/useUser";
//
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
  const {checkNeedToLoginService} = useUser();

  const onClickUploadButton = () => {
    if (checkNeedToLoginService()) return alert('로그인이 필요한 서비스 입니다.');
    router.push('/usedmarket/upload');
  };

    return (
      <>
        <Title>중고장터</Title>
        <UsedMarketContainer>
          <UploadButton onClick={onClickUploadButton}>
            Upload New Item
          </UploadButton>
          <UsedMarketSortingButton/>
          <UsedItemList/>
        </UsedMarketContainer>
      </>
    );

  }
;

export default Index;