import {useRouter} from 'next/router';
import fetcher from '../../utils/fetcher';
import {useEffect, useState} from 'react';
import styled from 'styled-components';
import NavBar from '../../layout/NavBar';
import GlobalStyle from '../../styles/global';
import UsedItemDetail from '../../components/useditemdetail/UsedItemDetail';



const imageitem = ({query}) => {
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


    return (
        <>
            <GlobalStyle/>
            <NavBar/>
            <UsedItemDetail></UsedItemDetail>
        </>


    );
}

export default imageitem;

