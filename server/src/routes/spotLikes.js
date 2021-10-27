import {readDB, writeDB} from '../dbController.js';
import {v4} from "uuid";

const getSpotLikes = () => readDB('spotLikes');
const setSpotLikes = data => writeDB('spotLikes', data);

const spotLikesRoute = [
  {
    method: 'get',
    route: '/spotLikes',
    handler: (req, res) => {
      try {
        const spotLikes = getSpotLikes();
        res.send(spotLikes);
      } catch (err) {
        res.send({error: err});
      }
    }
  },
  {
    method: 'post',
    route: '/spotLikes/isLiked',
    handler: ({body}, res) => {
      try {
        console.clear();
        const {userId, spotId} = body;
        const spotLikes = getSpotLikes();
        const targetIndex = spotLikes.findIndex(spotLike => spotLike.userId === userId && spotLike.spotId === spotId);
        res.send(targetIndex >= 0);
      } catch (err) {
        res.send({error: err});
      }
    }
  },
  {
    method: 'post',
    route: '/spotLikes/like',
    handler: ({body}, res) => {
      try {
        const {userId, spotId} = body;
        const spotLikes = getSpotLikes();
        const targetIndex = spotLikes.findIndex(spotLike => spotLike.userId === userId && spotLike.spotId === spotId);
        if (targetIndex >= 0) throw 'already exists';
        const newSpotLike = {
          id: v4(),
          userId,
          spotId
        };
        spotLikes.unshift(newSpotLike);
        setSpotLikes(spotLikes);
        res.send(newSpotLike);
      } catch (err) {
        res.send({error: err});
      }
    }
  },
  {
    method: 'delete',
    route: '/spotLikes/like',
    handler: ({query}, res) => {
      try {
        const spotLikes = getSpotLikes();
        const {userId, spotId} = query;
        const targetIndex = spotLikes.findIndex(spotLikes => spotLikes.userId === userId && spotLikes.spotId === spotId);
        if (targetIndex < 0) throw 'does not exist';
        const {id: deletedId} = spotLikes[targetIndex];
        spotLikes.splice(targetIndex, 1)
        setSpotLikes(spotLikes);
        res.send(deletedId);
      } catch (err) {
        res.send({error: err});
      }
    }
  }
];

export default spotLikesRoute;