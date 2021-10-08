import styled from "styled-components";

export const SortingButtonContainer = styled.div`
  margin-bottom: 20px;

  @media screen and (max-width: 1024px){
    display: flex;
    justify-content: center;
  }
    
`;

export const SortingButton = styled.button`
  cursor: pointer;
  width: 80px;
  height: 30px;
  background-color: rgba(246, 250, 225, 0.99);
  color: black;
  border: 1px solid silver;
  opacity: 0.8;
  font-size: 13px;
  border-right: 0;


  &:hover {
    opacity: 1;
    background-color: navajowhite;
  }

  &.active {
    opacity: 1;
    background-color: navajowhite;

  }

  &.last {
    border-right: 1px solid silver;
  }
`;