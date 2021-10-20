import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  margin-bottom: 3rem;

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
  }

`;

export const Button = styled.button`
  cursor: pointer;
  width: 80px;
  height: 2.7rem;
  font-size: 16px;
  margin-right: 0.5px;
  color: black;
  background-color: white;
  border: none;

  &.active {
    font-weight: bold;
    color: green;
    border-bottom: 3px solid green;
  }

`;