import {readDB, writeDB} from "../dbController.js";
import {v4} from "uuid";


const getImages = () => readDB('images');
const setImages = data => writeDB('images', data);

const imagesRoute = [
  //GET
  {
    method: 'get',
    route: '/images',
    handler: (req, res) => {
      const images = getImages();
      res.send(images);
    }
  },
  //POST
  {
    method: 'post',
    route: '/images',
    handler: ({body}, res) => {
      try {
        const {title, contents, location, imageUrl, userId} = body;
        const images = getImages();
        const newPost = {
          id: v4(),
          text: contents,
          imageUrl,
          title,
          location,
          userId,
        };
        images.unshift(newPost);
        setImages(images);
        res.send(newPost);
      } catch (err){
        res.status(500).send({error: err});
      }
    }
  }

]

export default imagesRoute;