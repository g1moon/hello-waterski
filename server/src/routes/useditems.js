import {readDB, writeDB} from '../dbController.js';
import {v4} from "uuid";

const getUseditems = () => readDB('useditems');
const setUseditems = data => writeDB('useditems', data);

const useditemsRoute = [
  {
    //GET
    method: 'get',
    route: '/useditems',
    handler: (req, res) => {
      const useditems = getUseditems();
      res.send(useditems);
    }
  },
  {
    //POST
    method: 'post',
    route: '/useditems',
    handler: ({body}, res) => {
      try {
        const usedItems = getUseditems();
        const {title, price, location, description, userId, userName, imageUrl} = body;
        const newItems = {
          usedItemId: v4(),
          itemTitle: title,
          itemPrice: price,
          itemLocation: location,
          text: description,
          itemState: 'selling',
          userId,
          userName,
          imageUrl,
        }
        //------------------------------------
        usedItems.unshift(newItems);
        setUseditems(usedItems);
        res.send(newItems);
      } catch (err) {
        res.status(500).send({error: err});
      }
    }
  }
];

export default useditemsRoute;