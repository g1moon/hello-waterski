import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const UploadButton = styled.button`
  background-color: #04AA6D;
  color: white;
  border: none;
  cursor: pointer;
  opacity: 0.8;
  text-align: center;
  width: 100%;
  height: 70%;
  padding: 20px 20px;
  border-radius: 10px;
  font-size: 1rem;
  margin-bottom: 3rem;

  &:hover {
    opacity: 1;
  }
`;

export const Container = styled.div`
  left: 0;
  top: 50px;
  position: absolute;
  z-index: 10;
  width: 100%;

`

export const BodyBlackoutStyle = styled.div`
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .6);
  display: ${props => props.isOpenModal ? 'block' : 'none'};
`;

export const ImagetalkContainer = styled.div`
  margin: 40px 200px 0 200px;
`;