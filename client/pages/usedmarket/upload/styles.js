import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  margin: 10px auto;
  height: 80rem;
`;
export const UploadForm = styled.form`
  //modal-content
  flex-direction: column;
`;
export const InnerFormContainer = styled.div`
  //container
  padding: 16px;
  display: flex;
  flex-direction: column;
`;
export const FormHead = styled.h1`
  font-size: 2rem;
`;
export const Label = styled.label`
  font-size: 0.8rem;
`;
export const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;

  &:focus {
    background-color: #ddd;
    outline: none;
  }
`;
export const UserNameInput = styled(Input)``;
export const ItemTitleInput = styled(Input)``;
export const ItemPrceInput = styled(Input)``;
export const ItemLocationInput = styled(Input)``;
export const DescriptionInput = styled.textarea`
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
  height: 5rem;

  &:focus {
    background-color: #ddd;
    outline: none;
  }
`;
export const ButtonContainer = styled.div`;
`;
export const Button = styled.button`
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  font-size: 0.8rem;

  &:hover {
    opacity: 1;
  }
`;
export const CancelButton = styled(Button)`
  float: left;
  width: 50%;
  padding: 14px 20px;
  background-color: #f44336;
`;
export const SubmitButton = styled(Button)`
  float: left;
  width: 50%;
  padding: 14px 20px;
  background-color: #04AA6D;
`;