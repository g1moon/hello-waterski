import styled from 'styled-components';
import ServiceItem from '../ServiceItem/ServiceItem';

const Container = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  position: relative;
  
  
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;


const Services = () => {
    const title = '중고장터';
    const contents = "수상스키 매니아들이 모인 이 공간에서 자유롭게 중고 용품을 구입하고, 판매 가능합니다."

    return (
        <Container>
            <ServiceItem title={'중고장터'} contents={contents}/>
            <ServiceItem title={'중고장터'} contents={contents}/>
            <ServiceItem title={'중고장터'} contents={contents}/>
            <ServiceItem title={'중고장터'} contents={contents}/>

        </Container>
    );
};
export default Services;