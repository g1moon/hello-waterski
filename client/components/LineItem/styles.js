import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const LineItemContainer = styled.div`
  //background-color: ;
  border: 1px solid rgba(234, 237, 229, 0.99);
  background-color: ${props => props.isMyLine ? 'red' : 'rgba(246, 250, 225, 0.99)'};
  opacity: ${props => props.isMyLine ? '0.5' : '1'};
  border-radius: 20px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  width: 30rem;
  padding-bottom: 10px;
`;

export const LineInfoContainer = styled.div``;
export const ButtonContainer = styled.button`
  display: flex;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  margin-right: 20px;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.3;
  }
`;

export const UserInfoContainer = styled.div``;
export const UserInfo = styled.span`
  font-weight: bold;
  margin-left: 10px;
  font-size: 12px;

`;

export const TypeContainer = styled.div`
  margin-left: 10px;
  display: flex;
`;

export const Type = styled.p`
  float: left;
  padding: 1px 6px;
  border-radius: 10px;
  line-height: 20px;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  background-color: rgb(29, 205, 255);
  margin: 4px 2px 4px 0;
`;

export const LineIndexContainer = styled.div`
  display: flex;
  justify-content: end;
  
`;
export const LineIndex = styled.span`
  font-size: 15px;
  margin: auto 5px auto 20px;
  
  color: ${props => props.isMyLine ? 'red' : 'black'};
  font-weight: ${props => props.isMyLine ? 'bold' :  'null'};
  font-size: ${props => props.isMyLine ? '20px' :  '15px'};
`;
