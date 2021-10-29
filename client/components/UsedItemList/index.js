import {useState, useEffect, useRef} from 'react';
import fetcher from '../../utils/fetcher';
import UsedItem from '../UsedItem/UsedItem';
import {
  UsedItemListContainer,
  Row,
  Colum
} from './styles';
import TopSpotsList from "../TopSpotsList/TopSpotsList";
import useUseditem from "../../hooks/useUseditem";

const Index = () => {

  const {getUseditemAll,
    useditemAllLoading,
    useditemAllData,
    useditemAllError
  } = useUseditem();

  useEffect(() => {
    getUseditemAll();
  }, []);₩


  if(useditemAllLoading || useditemAllData.length > 0) return <div>로딩중</div>;

  return (
    <>
      <Row>
        {useditemAllData.map(usedItem => {
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