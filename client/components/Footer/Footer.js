import styled from 'styled-components';


const FooterContainer = styled.div`
  margin-top: 30px;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100px;
  width: 100%;
  text-align: center;
  line-height: 100px;

`;

const ContactsInfo = styled.div`
  display: flex;
  justify-content: center;
`;


const ContactsImage = styled.img`
  width: 50px;
  height: 50px;
  margin: 0 20px;

  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.1);
    opacity: 0.5;
  }
`;


const Footer = () => {
    return (
        <FooterContainer>
            <ContactsInfo>
                <ContactsImage
                    src='https://user-images.githubusercontent.com/44131043/132699062-737ef704-dbbe-4fbe-a784-198dbdad24db.png'></ContactsImage>
                <ContactsImage
                    src='https://user-images.githubusercontent.com/44131043/132699067-16b28992-dcd7-42c3-b98d-6a3422d6cc52.png'></ContactsImage>
            </ContactsInfo>
            <span>© 2021. Cho Gi Moon. All rights reserved.</span>
        </FooterContainer>
    );
};

export default Footer;


