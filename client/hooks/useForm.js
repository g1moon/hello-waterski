import {useEffect, useState} from "react";
import {useAppDispatch} from "../store";

const useForm = ( {initialForm, onSubmitForm, createFormError, restDataForSubmit}) => {

  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState({});

  const onChangeHandler = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value});
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const objectForSubmit = {...form, ...restDataForSubmit};
    setError(createFormError(objectForSubmit))
    onSubmitForm(objectForSubmit);
    resetForm();
  };

  const resetForm = () => {
    setForm(initialForm);
  };

  return {onChangeHandler, onSubmitHandler, setForm, form, resetForm};
};

export default useForm;