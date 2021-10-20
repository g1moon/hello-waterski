import {readDB, writeDB} from '../dbController.js';
import {v4} from "uuid";

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
  //POST
  {
    method: 'post',
    route: '/lines',
    handler: ({body}, res) => {
      try {
        const newLines = getLines();
        const newLine = {
          id: v4(),
          ...body
        };
        newLines.push(newLine);
        setLines(newLines);
        res.send(newLine);

      } catch (e) {
        res.status(500).send({error: err});
      }
    },
  },

];

export default linesRoute;