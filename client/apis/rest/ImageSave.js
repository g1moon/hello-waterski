import axios from "axios";

const ImageSaveServices = {

  async saveImageAndReturnImagePath(imageFile) {
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
};

export default ImageSaveServices;

