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

    const getAndSetUsedItemsData = async () => {
        const data = await fetcher('get', '/useditems');
        setAllUsedItemsData(data);
    }

    //처음에 데이터 받아와서 등록.
    useEffect(() => {
        getAndSetUsedItemsData();
    }, []);

    useEffect(() => {

    }, [allUsedItemData]);


    return (
      <>
          <Row>
              {allUsedItemData.map(usedItem => {
                  console.log(usedItem);
                  return (
                    <Colum>
                        <UsedItem usedItem={usedItem}/>
                    </Colum>
                  )
              })
              }
          </Row>
      </>
    );
};

export default Index;