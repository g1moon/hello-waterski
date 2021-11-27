import fetcher from "../../utils/fetcher";
import axios from "axios";

const useditemServices = {

  async getUseditemAll() {
    const res = await fetcher('get','/useditems');
    return res;
  },

  async saveImageAndReturnImagePath (imageFile) {
    console.log('saveimagepath');
    const formData = new FormData();
    formData.append("img", imageFile);
    return await
      axios({
        method: 'post',
        url: '/saveImage',
        baseURL: "http://localhost:8000",
        data: formData,
        headers: {"Content-Type": "multipart/form-data"},
      })
      .then(res => {
        const {fileName} = res.data;
        return `http://localhost:8000/img/${fileName}`;
      })
      .catch(err => {
        console.error(err);
      });
  },

  async postUseditem({ imageFile, objForPost }) {
    const imageUrl = await useditemServices.saveImageAndReturnImagePath(imageFile);
    objForPost = { ...objForPost, imageUrl}
    return await fetcher('post', '/useditems', objForPost);
  }
};

export default useditemServices;