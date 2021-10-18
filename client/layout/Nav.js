import styled from 'styled-components';

const Container = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`

const NavElem = styled.nav`
  position: fixed;
  width: 100%;
  background: #000000;
  border-bottom: rgba(0, 0, 0, 0.1) solid 1px;
  padding: 22px 0;
  transition: all 0.5s;
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavH1 = styled.h1`
  font-size: 22px;

  a {
    text-decoration: none;
    color: white;
  }
`;

const NavUl = styled.ul`
  display: flex;
  justify-content: end;
`;

const NavLi = styled.li`
  font-size: 14px;
  margin-left: 25px;
  color: white;
`;


const Nav = () => {

    return (
        <Container>
            <NavElem>
                <NavContainer>
                    <NavH1>
                        <a href="#">
                            Hello Waterski
                        </a>
                    </NavH1>
                    <NavUl>
                        <NavLi><a href='#'>서비스</a></NavLi>
                        <NavLi><a href='#'>서비스</a></NavLi>
                        <NavLi><a href='#'>서비스</a></NavLi>
                        <NavLi><a href='#'>서비스</a></NavLi>
                        <NavLi><a href='#'>서비스</a></NavLi>
                        <NavLi><a href='#'>서비스</a></NavLi>
                    </NavUl>
                </NavContainer>
            </NavElem>
        </Container>

    );
};

export default Nav;
