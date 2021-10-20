import styled from 'styled-components';

export const UsedItemListContainer = styled.div`
`;
export const Row = styled.div`
  content: "";
  display: table;
  clear: both;
  
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;
export const Colum = styled.div`
  float: left;
  width: 33.33%;
  height: auto;

  @media screen and (max-width: 1024px){
    width: 50%;
  }

  @media screen and (max-width: 768px){
    display: flex;
    width: 80%;
  }
  




`;