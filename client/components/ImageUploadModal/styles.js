import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  
`;

export const UploadForm = styled.form`
  //modal-content
  display: ${props => props.isOpenModal ? "block" : "none"};
  //position: relative;
  z-index: 100000000;
  overflow: auto;
  background-color: #fefefe;
  margin: 5% auto 15% auto;
  width: 40%;
  height: 70%;
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


export const FormHead = styled.h1``;

//label
export const Label = styled.label``;
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

export const TitleInput = styled(Input)``;
export const ContentTextarea = styled.textarea`
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
export const LocationInput = styled(Input)``;
;

export const ImageInputContainer = styled.div`
  height: 50px;
  margin: 20px auto;
  position: relative;
  width: 200px;
`;

export const ImageLabel = styled.label`
  background: #fff;
  color:#EB6A5A;
  display: inline-block;
  font-size: 1.2em;
  line-height: 50px;
  padding: 0;
  text-align: center;
  white-space: nowrap;
  text-transform: uppercase;
  font-weight: 400;
  box-shadow: 0 1px 1px gray;
`;
export const ImageInput = styled(Input)`
`;

export const ImagePreview = styled.img`
  width: 50%;
  height: auto;
  text-align: center;
  margin: 5px auto 20px auto;
`;

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
  opacity: 0.9;

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