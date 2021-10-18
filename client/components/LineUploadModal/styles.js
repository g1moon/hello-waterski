import styled from "styled-components";
export const Container = styled.div`
`;

export const UploadForm = styled.form`
  //modal-content
  display: ${props => props.isOpenModal ? "block" : "none"};
  //position: relative;
  z-index: 100000000;
  overflow: auto;
  background-color: #fefefe;
  margin: 5% auto 15% auto;
  width: 60%;
  height: 50%;
  border: 1px solid #888;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
export const InnerFormContainer = styled.div`
  //container
  padding: 16px;
  display: flex;
  flex-direction: column;
`;


export const FormHead = styled.h1`
  font-size: 1.2rem;
`;

//label
export const Label = styled.label`
  font-size: 0.8rem;
`;
/*----------------Input------------------*/
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

export const RidingTypeInput = styled(Input)``;
export const BoatTypeInput = styled.input`
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
export const LocationInput = styled(Input)``;
;
export const ImageInput = styled(Input)``;

/*-----------button-----------------*/
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