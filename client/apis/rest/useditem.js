import fetcher from "../../utils/fetcher";
import ImageSaveServices from "./ImageSave";

const useditemServices = {

  async getUseditemAll() {
    return await fetcher('get','/useditems');
  },

  async postUseditem({ imageFile, objForPost }) {
    const imageUrl = await ImageSaveServices.saveImageAndReturnImagePath(imageFile);
    objForPost = { ...objForPost, imageUrl}
    return await fetcher('post', '/useditems', objForPost);
  }
};

export default useditemServices;