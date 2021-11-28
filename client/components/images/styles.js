import styled from "styled-components";

export const Row = styled.div`
  content: "";
  display: table;
  clear: both;
  margin: 0 auto;


  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const Col = styled.div`
  float: left;
  width: 33.33%;
  height: 100%;

  @media screen and (max-width: 1400px) {
    display: flex;
    width: 50%;
  }

  @media screen and (max-width: 1024px) {
    display: flex;
    width: 100%;
    margin: 0 auto;
  }
`;