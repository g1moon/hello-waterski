import styled from "styled-components";

export const SortingButtonContainer = styled.div``;

export const SortingButton = styled.button`
  cursor: pointer;
  width: 100px;
  height: 50px;
  background-color: #04AA6D;
  color: white;
  border: none;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    background-color: green;
  }

  &.active {
    opacity: 1;
    background-color: green;
  }
`;