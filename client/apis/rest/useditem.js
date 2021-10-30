import fetcher from "../../utils/fetcher";
import axios from "axios";

const useditemServices = {

  async getUseditemAll() {
    const res = await fetcher('get','/useditems');
    return res;
  },

  async saveImageAndReturnImagePath (imageFile) {
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
    const imagePath = await this.saveImageAndReturnImagePath(imageFile);
    //imagePath 에러처리 필요함.
    objForPost = { ...objForPost, "imageUrl": imagePath}
    return await fetcher('post', '/useditems', objForPost);
  }
};

export default useditemServices;