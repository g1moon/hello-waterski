import {readDB, writeDB} from '../dbController.js';

const getSpotLikes = () => readDB('spotLikes');
const setSpotLikes = data => writeDB('spotLikes', data);

const spotLikesRoute = [
 {
    method: 'get',
    route: '/spotLikes',
    handler: ({ query }, res) => {
      const {userId, spotId} = query;
      const spotLikes = getSpotLikes();
      const targetIndex = spotLikes.findIndex(spotLike => spotLike.userId === userId && spotLike.spotId === spotId);
      res.send(targetIndex.toString())
    }
  },
];

export default spotLikesRoute;