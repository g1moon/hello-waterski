import styled from 'styled-components';
import UsedMarketSortingButton from '../../components/UsedMarketSortingButton';
import UsedItemList from '../../components/UsedItemList';
import {useRouter} from "next/router";
import useUser from "../../hooks/useUser";
import {PAGE_URL} from "../../constants/PageUrl";

const Index = () => {
  const router = useRouter();
  const {checkNeedToLoginService} = useUser();

  const onClickUploadButton = () => {
    if (checkNeedToLoginService()) return alert('로그인이 필요한 서비스 입니다.');
    router.push(PAGE_URL.USED_MARKET_UPLOAD);
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