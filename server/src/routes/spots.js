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
];

export default spotsRoute;