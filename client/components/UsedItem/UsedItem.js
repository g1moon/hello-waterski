import Link from 'next/link';
import {
  Overlay,
  OverlayText,
  Image,
  UsedItemGridContainer,
  ItemInfo,
  ItemTitle,
  ItemLocation,
  ItemPrice,
} from './styles';

const UsedItem = ({usedItem}) => {

  const {usedItemId, userId, userName, itemState, itemPrice, itemLocation, imageUrl, text, itemTitle} = usedItem;

  return (
    <Link href={`/useditem/[usedItemId]`} as={`/useditem/${usedItemId}`}>
      <UsedItemGridContainer>
        <Image src={imageUrl}></Image>
        <ItemInfo>
          <ItemTitle>{itemTitle}</ItemTitle>
          <ItemLocation>{itemLocation}</ItemLocation>
          <ItemPrice>{itemPrice}원</ItemPrice>
        </ItemInfo>
        <Overlay>
          <OverlayText>더 보기</OverlayText>
        </Overlay>
      </UsedItemGridContainer>
    </Link>

  )
};

export default UsedItem;