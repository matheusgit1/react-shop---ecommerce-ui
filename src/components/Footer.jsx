import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  LinkedIn,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MATHEUS ALVES PEREIRA.</Logo>
        <Desc>
          {`javaScript full stack dev. sou só mais um cara que curte desenvolvimento e tech.
          bora trocar uma ideia?`} <a target={"_blank"} href="https://www.instagram.com/ap_matheus/">instagram</a>. {"\n\n\nchama-la"}
         
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links uteis</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Moda Masculina</ListItem>
          <ListItem>Moda Feminina</ListItem>
          <ListItem>Acessorios</ListItem>
          <ListItem>Minha Conta</ListItem>
          <ListItem>Compras</ListItem>
          <ListItem>Lista de Desejos</ListItem>
          <ListItem>Termos de Uso</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contatos</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> Endereço
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +55 27 997822665 
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> pereira.matheusalves@gmail.com
        </ContactItem>
        <ContactItem>
          <LinkedIn style={{marginRight:"10px"}} /> https://www.linkedin.com/in/matheus-alves-pereira-4b3781222/
        </ContactItem>
        
      </Right>
    </Container>
  );
};

export default Footer;
