import React, {useEffect, useState} from 'react';
import fetcher from "../../utils/fetcher";
import {LikeButton, SpotLike, SpotLikeImage} from "./styles";
import alertNeedToLogin from "../../utils/alertNeedToLogin";

const SpotLikeButton = ({allSpotData, setAllSpotData, likeCount, spotId}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [spotLikes, setSpotLikes] = useState([]);
  const [likeCounts, setLikeCounts] = useState(0);

  const getSpotLikes = async () => {
    const data = await fetcher('get', '/spotLikes');
    setSpotLikes(data);
  }

  const getLikeCounts = async () => {
    const data = await fetcher('get', '/spots/like', {params: {spotId}});
    setLikeCounts(data);
  };

  //post /spotLikes/unLike
  const postIsLiked = async () => {
    const userId = sessionStorage.getItem('userId');
    const objForPost = {userId, spotId};
    const res = await fetcher('post', `/spotLikes/isLiked`, objForPost);
    setIsLiked(res);
  };

  const likeSpot = async () => {
    const userId = sessionStorage.getItem('userId');
    const objForPost = {userId, spotId}
    const {newSpotLike, newLike} = await fetcher('post', '/spotLikes/like', objForPost);

    const newSpotLikes = [newSpotLike, ...spotLikes];
    setSpotLikes(newSpotLikes);

    setLikeCounts(prev => prev + 1);
    setIsLiked(true);
  }

  const dislikeSpot = async () => {
    const userId = sessionStorage.getItem('userId');
    const objForDelete = {userId, spotId}
    const {
      deletedId,
      newLike
    } = await fetcher('delete', `/spotLikes/like`, {params: objForDelete});

    const newSpotLikes = [...spotLikes];
    const targetIndex = spotLikes.findIndex(spotLike => spotLike.id === deletedId);
    if (targetIndex < 0) return;
    newSpotLikes.splice(targetIndex, 1);
    setSpotLikes(newSpotLikes);

    setLikeCounts(prev => prev - 1);
    setIsLiked(false);
  }

  const onClickLikeButton = () => {
    if (alertNeedToLogin()) return;
    isLiked ? dislikeSpot() : likeSpot();
  }

  useEffect(() => {
    getSpotLikes();
    getLikeCounts();
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
      <SpotLike>{likeCounts}</SpotLike>
    </LikeButton>
  );
};

export default SpotLikeButton;