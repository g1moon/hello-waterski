import {readDB, writeDB} from '../dbController.js';

const getLines = () => readDB('spots');
const setLines = data => writeDB('spots', data);

const spotsRoute = [
  {
    //GET
    method: 'get',
    route: '/spots',
    handler: (req, res) => {
      const spots = getLines();
      res.send(spots);
    }
  },
];

export default spotsRoute;