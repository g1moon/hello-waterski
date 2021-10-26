import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import fetcher from "../../utils/fetcher";

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
  const [isLiked, setIsLiked] = useState(false);

  //post /spotLikes/unLike
  const getIsLiked = async () => {
    const userId = sessionStorage.getItem('userId');
    const objForPost = {userId, spotId};
    const targetIndex = await fetcher('get', `/spotLikes`, {params: objForPost})
    setIsLiked(targetIndex >= 0);
  };

  const onClickLike = (e) => {
    console.log('click');
  };

  useEffect( () => {
    getIsLiked();
  }, []);

    return (
      <LikeButton onClick={onClickLike}>
          <SpotLikeImage src={`/${isLiked ? '' : 'un'}liked.png`}/>
          <SpotLike>{likeCount}</SpotLike>
      </LikeButton>
    );
};

export default SpotLikeButton;