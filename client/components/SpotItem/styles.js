import styled from "styled-components";

export const SpotItemContainer = styled.div`
  display: flex;
  background-color: rgba(246, 250, 245, 0.99);
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  height: 300px;
  align-items: center;
  
  

  //media
  @media screen and (max-width: 768px) {
    width: 40%;
  }

`;


//spot like
export const SpotLikeContainer = styled.div`
  display: flex;
  align-items: center;

`;
export const SpotLikeImage = styled.img`
  height: 0.5rem;
  
`;
export const SpotLike = styled.p`
    margin-left: 2px;
  font-size: 0.5rem;
`;


//spot info
export const SpotInfoContainer = styled.div`
    width: 30%;
    padding-left: 20px;
  margin-left: 20px;
  
`;
export const SpotTitle = styled.h2`
    font-size: 17px;
`;
export const SpotLocation = styled.p`
    font-size: 11px;
`;
export const SpotIntro = styled.p`
  font-size: 12px;
1`;

//spot image
export const SpotImageContainer = styled.div`
    display: flex;
  align-items: center;
  margin-right: 15px;
`;
export const SpotImage = styled.img`
  width: 230px;
  height: 180px;
  object-fit: cover;
`;