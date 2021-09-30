import styled from "styled-components";
import {FaSearch} from 'react-icons/fa';




const Input = styled.input`
  display: block;
  width: 100%;
  border: none;
  padding: 0;
  margin: 0 0 0 20px;
  font-size: 28px;
  color: #212529;
  background-color: transparent;
  height: 100%;

  &:focus {
    outline: none;
  }
`;


const Container = styled.form`
  border-radius: 5px;
  border: solid 1px #e9ecef;
  height: 60px;
  display: flex;
  width: 800px;
  align-items: center;
  margin: 0 auto 0 auto;
`;

const SearchIconContainer = styled.button`
  margin-right: 20px;
  opacity: 0.5;
  cursor: pointer;
  height: 100%;
  background-color: Transparent;
  background-repeat:no-repeat;
  border: none;
`;


const SearchBar = () => {

    return (
        <Container>
            <Input/>
            <SearchIconContainer type="submit">
                <FaSearch size='20'/>
            </SearchIconContainer>
        </Container>


    );
};

export default SearchBar;