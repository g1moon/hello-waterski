export const createImageUploadFormError = (objectFormSubmit) => {
  console.log('import useInput from "../../hooks/useInput";\n');
  console.log(objectFormSubmit);
  const error = {};
  const {title, contents, location, image} = objectFormSubmit;

  if (title.length === 0) {
    error.title = 'title을 입력해주세요.';
    error.isVaildForm = false;
  }
  if (contents.length === 0) {
    error.title = 'contents를 입력해주세요.';
    error.isVaildForm = false;
  }

  if (location.length === 0) {
    error.location = 'location을 입력해주세요.';
    error.isVaildForm = false;
  }

  console.log(error);
  return error;
};