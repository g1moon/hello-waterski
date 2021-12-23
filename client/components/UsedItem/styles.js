import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 160px;
  opacity: 0;
  transition: .5s ease;
  background-color: #008CBA;
  border-radius: 10px;
`;

export const OverlayText = styled.div`
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;

  color: white;
  font-size: 16px;
`;


export const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: contain;
  border-radius: 30px;
`;

export const UsedItemGridContainer = styled.div`
  box-sizing: border-box;
  margin-right: 34px;
  margin-bottom: 40px;
  position: relative;
  cursor: pointer;

  &:hover ${Overlay} {
    opacity: 0.8;
  }

  &:hover ${OverlayText} {
    opacity: 1;
  }

`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;

`;
export const ItemTitle = styled.span`
  font-weight: 600;
  color: #212529;
  font-size: 14px;
  line-height: 18px;
  margin-top: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ItemLocation = styled.span`
  font-size: 11px;
  color: #868e96
`;
export const ItemPrice = styled.span`
  font-weight: 600;
  color: #ff8a3d;
  font-size: 12px;
  line-height: 18px;
  margin-top: 6px;
`;

export const DetailLink = styled.a`
  text-decoration-line: none;
`