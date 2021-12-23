import UsedMarketSortingButton from '../../components/UsedMarketSortingButton';
import UsedItemList from '../../components/UsedItemList';
import useUser from "../../hooks/useUser";
import {PAGE_URL} from "../../constants/PageUrl";
import {Title, UsedMarketContainer} from "./styles";
import {UploadButton} from "../line/[spotId]/styles";
import {useRouter} from "next/router";
import {AERT_MESSAGE} from "../../constants/AlertMessage";

const Index = () => {
  const router = useRouter();
  const {checkNeedToLoginService} = useUser();

  const onClickUploadButton = () => {
    if (checkNeedToLoginService()) return alert(AERT_MESSAGE.NEED_TO_LOGIN);
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