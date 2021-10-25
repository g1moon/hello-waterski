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

//label
export const Label = styled.label`
  font-size: 0.8rem;
`;

/*----------------Input------------------*/
export const Input = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;

  &:focus {
    background-color: #ddd;
    outline: none;
  }
`;

/*-----------button-----------------*/
export const ButtonContainer = styled.div`;
`;

export const Button = styled.button`
  background-color: #04AA6D;
  color: white;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  font-size: 0.8rem;
  height: 3rem;


  &:hover {
    opacity: 1;
  }
`;


export const CancelButton = styled(Button)`
  float: left;
  width: 50%;
  background-color: #f44336;
`;
export const SubmitButton = styled(Button)`
  float: left;
  width: 50%;
  background-color: #04AA6D;
`;

export const IdChekcerButton = styled(Button)`
  width: 30%;
  height: 3rem;
  padding: 0;
  margin: 5px 0;
  background-color:  black;
`;

export const CheckMessage = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 14px;

  &.possible {
    color: green
  }

  &.impossible {
    color: red
  }
`;

export const IdInputContainer = styled.div`
  display: flex;
`;