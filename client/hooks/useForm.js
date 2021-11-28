import {useState} from "react";

const useForm = ({ initialForm, onSubmit, checkIsValidForm}) => {
  const [form, setForm] = initialForm;

  const onChangeForm = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value});
  };

  const onSubmitHandler = async () => {
    checkIsValidForm(form);
    onSubmit();
  };

  const resetForm = () => {
    setForm(initialForm);
  };



};

export default useForm;