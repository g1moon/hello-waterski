import {useRouter} from 'next/router';
import fetcher from '../../utils/fetcher';
import {useEffect, useState} from 'react';
import styled from 'styled-components';
import NavBar from '../../layout/NavBar';
import GlobalStyle from '../../styles/global';

const UsedItemContainer = styled.div`
  margin: 0 20% 0 20%;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 70%;
  height: auto;
  margin: 0 auto 0 auto;

`;

const UserInfo = styled.div`
  margin-top: 30px;
  display: inline-block;
  margin-left: 0px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e9ecef;


`;

const UserName = styled.div`
  font-size: 15px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.6px;
  color: #212529;
`;


const Location = styled.div`
    font-size: 13px;
    line-height: 1.46;
    letter-spacing: -0.6px;
    color: #212529;
`;


const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.6px;
`;

const State = styled.p`
  font-size: 13px;
  line-height: 1.46;
  letter-spacing: -0.6px;
  color: #868e96;
  margin: 1px;
`;


const Price = styled.p`
  margin: 1px;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ItemContents = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e9ecef;

`;

const Text = styled.div`
  margin-bottom: 16px;
  margin-top: 8px;
`;

const UsedItemDetail = () => {

    const router = useRouter();
    //이 아이디에 맞는 데이터를 찾아야함
    const id = router.query.usedItemId;
    const [itemInfo, setItemInfo] = useState(null);

    const getUsedItemDataById = async () => {
        const data = await fetcher('get', '/useditems');
        //값에 맞는 것 찾아주고
        const res = data.find(i => i.usedItemId === id);
        setItemInfo(res);
    };

    //처음에 데이터 받아옴
    useEffect(() => {
        getUsedItemDataById();
    }, []);

    useEffect(() => {
        console.log(itemInfo)
    }, [itemInfo]);


    return (
        <>
            <UsedItemContainer>
                {itemInfo
                    ?
                    <>
                        <Image src={itemInfo.imageUrl}></Image>
                        <UserInfo>
                            <UserName>{itemInfo.userName}</UserName>
                            <Location>{itemInfo.itemLocation}</Location>
                        </UserInfo>

                        <ItemContents>
                            <Title>{itemInfo.itemTitle}</Title>
                            <State>{itemInfo.itemState}</State>
                            <Price>{itemInfo.itemPrice}원</Price>
                            <Text>{itemInfo.text}</Text>
                        </ItemContents>
                    </>
                    :
                    <div>로딩중</div>
                }
            </UsedItemContainer>
        </>
    );

}

    export default UsedItemDetail;