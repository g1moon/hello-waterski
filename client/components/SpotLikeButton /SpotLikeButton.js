import React, {useEffect, useState} from 'react';
import fetcher from "../../utils/fetcher";
import {LikeButton, SpotLike, SpotLikeImage} from "./styles";

const SpotLikeButton = ({likeCount, spotId}) => {
  const [isLiked, setIsLiked] = useState(null);
  const [spotLikes, setSpotLikes] = useState([])

  const getSpotLikes = async () => {
    const data = await fetcher('get', '/spotLikes');
    setSpotLikes(data);
  };

  //post /spotLikes/unLike
  const postIsLiked = async () => {
    const userId = sessionStorage.getItem('userId');
    const objForPost = {userId, spotId};
    const res = await fetcher('post', `/spotLikes/isLiked`, objForPost);
    console.log('res',spotId, res);
    setIsLiked(res);
  };

  const likeSpot = async () => {
    const userId = sessionStorage.getItem('userId');
    const objForPost = {userId, spotId}
    const newSpotLike = await fetcher('post', '/spotLikes/like', objForPost);

    const newSpotLikes = [newSpotLike, ...spotLikes];
    setSpotLikes(newSpotLikes);

    setIsLiked(true);
  }

  const dislikeSpot = async () => {
    console.log('clicked dislike', spotId);
    const userId = sessionStorage.getItem('userId');
    const objForDelete = {userId, spotId}
    const deletedId = await fetcher('delete', `/spotLikes/like`, {params: objForDelete});

    const newSpotLikes = [...spotLikes];
    const targetIndex = spotLikes.findIndex(spotLike => spotLike.id === deletedId);
    if (targetIndex < 0) return;

    newSpotLikes.splice(targetIndex, 1);
    setSpotLikes(newSpotLikes);

    setIsLiked(false);
  }

  const onClickLikeButton = (e) => {
    isLiked ? dislikeSpot() : likeSpot();
  }

  useEffect(() => {
    getSpotLikes();
  }, []);

  useEffect(() => {
    postIsLiked();
  }, [isLiked, spotLikes]);

  if (isLiked === null) {
    return <div>로딩중</div>;
  }


  return (
    <LikeButton onClick={onClickLikeButton}>
      <SpotLikeImage src={`/${isLiked ? '' : 'un'}liked.png`}/>
      <SpotLike>{likeCount}</SpotLike>
    </LikeButton>
  );
};

export default SpotLikeButton;