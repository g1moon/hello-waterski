import { useEffect } from 'react';
import UsedItem from '../UsedItem/UsedItem';
import {
  Row,
  Colum
} from './styles';

import useUseditem from "../../hooks/useUseditem";

const Index = () => {

  const {getUseditemAll, useditemAllLoading, useditemAllData } = useUseditem();

  useEffect(() => {
    getUseditemAll();
  }, []);

  if (useditemAllLoading || !(useditemAllData.length > 0)) return <div>로딩중</div>;

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