import fetcher from "../../utils/fetcher";
import ImageSaveServices from "./ImageSave";

const imageServices = {
  async getImages() {
    return await fetcher('get', '/images');
  },

  async postImage({title, contents, location, userId, imageFile}) {
    const imageUrl = await ImageSaveServices.saveImageAndReturnImagePath(imageFile);
    return await fetcher('post', '/images', {
      title,
      contents,
      location,
      imageUrl,
      userId,
    });
  },
};

export default imageServices;