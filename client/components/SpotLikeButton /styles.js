//spot like
import styled from "styled-components";

export const LikeButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background: none;
  border: none;
  transition: all .3s;

  &:hover {
    opacity: 0.3;
  }
`;
export const SpotLikeImage = styled.img`
  height: 1.2rem;
`;
export const SpotLike = styled.p`
  margin-left: 2px;
  font-size: 0.7rem;
`;
