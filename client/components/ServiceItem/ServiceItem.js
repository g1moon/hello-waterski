import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin: 40px;
  transition: all .2s ease-in-out;


  &:hover {
    transform: scale(1.15);
    opacity: 0.4;
  }


`;
const Title = styled.span`
  display: block;
  font-size: 1.5rem;
  font-family: S-CoreDream-6;
`;
const Contents = styled.span`
  margin-top: 15px;
  display: block;
  font-size: 13px;
`;
const Image = styled.img`
  width: 70px;
  height: 70px;
`;

const Caption = styled.div`
    margin-left: 15px;
`;


const ServiceItem = ({title, contents}) => {
    return (
        <Container>
            <Image
                src='https://user-images.githubusercontent.com/44131043/132690666-527bf9eb-768f-480c-b73c-630a17a14296.png'></Image>
            <Caption>
                {/*<Title>중고 장터</Title>*/}
                <Title>{title}</Title>
                <Contents>{contents}</Contents>
            </Caption>

        </Container>
    );
};
export default ServiceItem;