import React, {useEffect} from 'react';
import styled from "styled-components";

//spot like
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

const SpotLikeButton = ({likeCount, spotId}) => {
  console.log(spotId);

  //post /spotLikes/unLike
  const getIsLiked = async () => {
    const objForPost = {userId, spotId};
    const res = await fetcher('get', '/spotLikes', spotId);
    console.log(res);
  };

  const onClickLike = (e) => {
    console.log('click');
  };

  useEffect(() => {
  }, []);

    return (
      <LikeButton onClick={onClickLike}>
          <SpotLikeImage src={'https://cdn-icons-png.flaticon.com/512/833/833300.png'}/>
          <SpotLike>{likeCount}</SpotLike>
      </LikeButton>
    );
};

export default SpotLikeButton;