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

  //DELETE
  {
    method: 'delete',
    route: '/lines/:id',
    handler: (req, res) => {
      try {
        const lines = getLines();
        const {query, params} = req;
        const {userId, spotId} = query;
        const {id} = params
        const targetIndexToDelete = lines.findIndex(elem =>
          elem.userId === userId && elem.spotId === spotId
        );
        lines.splice(targetIndexToDelete, 1);
        setLines(lines);
        res.send(id);
      } catch (err) {
        res.status(500).send({error: err});
      }
    }
  },
];

export default linesRoute;