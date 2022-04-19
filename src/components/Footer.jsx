import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons"
import styled from "styled-components"

import payments from "../assets/credit-cards-logos.png"
import { mobile } from "../responsive"

const Container = styled.div`
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.p`
  margin: 20px 0;
`
const SocialContainer = styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    display: "none",
  })}
`

const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    backgroundColor: "#fff8f8",
  })}
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const Payment = styled.img`
  width: 300px;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Athena Chic</Logo>
        <Desc>Home of the best homemade bathing suits on the planet.</Desc>
        <SocialContainer>
          <SocialIcon color="#3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#55acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="#e60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          123 Main Street, South Hamptons, Florida
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          860-659-4262
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          amanda@athena.dev
        </ContactItem>
        <Payment src={payments} />
      </Right>
    </Container>
  )
}

export default Footer
