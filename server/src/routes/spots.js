import {readDB, writeDB} from '../dbController.js';

const getSpots = () => readDB('spots');
const setSpots = data => writeDB('spots', data);

const spotsRoute = [
  {
    //GET
    method: 'get',
    route: '/spots',
    handler: (req, res) => {
      const spots = getSpots();
      res.send(spots);
    }
  },
  {
    method: 'get',
    route: '/spots/like',
    handler: ({query}, res) => {
      try {
        const {spotId} = query;
        const spots = getSpots();
        const targetIndex = spots.findIndex(spot => spot.spotId === spotId);
        res.send(spots[targetIndex]['like'] + '');
      } catch (err){
        res.send({error: err});
      }
    }
  }
];

export default spotsRoute;