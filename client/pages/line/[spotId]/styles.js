import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UploadButton = styled.button`
  background-color: #04AA6D;
  color: white;
  margin: 0.5rem 0 1.5rem 0;
  border: none;
  cursor: pointer;
  opacity: 0.8;
  text-align: center;
  position: relative;
  width: 100%;
  height: 70%;
  padding: 20px 20px;
  border-radius: 10px;
  font-size: 1rem;

  &:hover {
    opacity: 1;
  }
`;

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

export const MainInfoAndCurrent = styled.div`
  margin-left: 20px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 30px;
  }
`;

export const WatingInfoContainer = styled.div`
  margin-bottom: 15px;
`;