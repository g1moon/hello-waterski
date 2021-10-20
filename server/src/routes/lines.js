import {readDB, writeDB} from '../dbController.js';

const getLines = () => readDB('lines');
const setLines = data => writeDB('lines', data);

const linesRoute = [
  //GET
  {
    method: 'get',
    route: '/lines',
    handler: (req, res) => {
      try {
        const lines = getLines();
        res.send(lines);
      } catch (err){
        res.status(404).send({error: err});
      }
    }
  },
];

export default linesRoute;