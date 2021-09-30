import {useState, useEffect, useRef} from 'react';
import fetcher from '../../utils/fetcher';
import UsedItem from '../UsedItem/UsedItem';
import {
    UsedItemListContainer,
    Row,
    Colum
} from './styles';
import TopSpotsList from "../TopSpotsList/TopSpotsList";


const Index = () => {

    const [allUsedItemData, setAllUsedItemsData] = useState([]);

    const getUsedItemsData = async () => {
        const data = await fetcher('get', '/data/useditems.json');
        setAllUsedItemsData(data);
    }


    //처음에 데이터 받아와서 등록.
    useEffect(() => {
        getUsedItemsData();
    }, []);


    return (
        <>
            <Row>
                {allUsedItemData.map(usedItem =>
                    (
                        <Colum>
                                <UsedItem usedItem={usedItem}/>
                        </Colum>
                    ))

                }
            </Row>
        </>
    );
};

export default Index;