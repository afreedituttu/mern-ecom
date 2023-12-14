import { Facebook, Instagram, MailOutline, Pinterest, Twitter, Room, Phone } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive';

const Container = styled.div`
    display:flex;
    ${mobile({flexDirection:'column'})};
`
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`
const Center = styled.div`
    flex:1;
    padding:20px;
    ${mobile({display:'none'})};
`
const Right = styled.div`
    flex:1;
    padding:20px;
    ${mobile({backgroundColor:'lightgray'})};
`
const Title = styled.h3`
    margin-bottom:30px;
`
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`
const ListItem = styled.li`
    width:50%;
    margin-bottom:10px;
`
const Logo = styled.h1``
const Desc = styled.p`
    margin:20px 0px;
`
const SocailContainer = styled.div`
    display:flex;
`
const SocialIcon = styled.div`
    width:40px;
    height:40px;
    margin:5px 10px;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    background-color:#${(props)=>{return props.bg}};
`
const ContactItem = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:10px;
`
const Payment = styled.div`

`
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>ECOM</Logo>
            <Desc> lfaifieu faeufpaeu  uf89e uf9aeu 98pf98 ue upe9fu pijfpisjf piosj pfi jdsioj dsij fvnpjpiofio fjpioefujpisdidojfsdjfdsjvidjviodj oidj ivjdsvjpijv poidjvpoij vojo jodsjodsjoiv </Desc>
            <SocailContainer>
                <SocialIcon bg='385999'><Facebook /></SocialIcon>
                <SocialIcon bg='E4405F'><Instagram /></SocialIcon>
                <SocialIcon bg='55ACEE'><Twitter /></SocialIcon>
                <SocialIcon bg='E60023'><Pinterest /></SocialIcon>
            </SocailContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:'5px'}} /> 543/1343423 dfahi  fiufioeufoiuaoi  ifoei e fef oi</ContactItem>
            <ContactItem><Phone style={{marginRight:'5px'}}/>+00932310490249024</ContactItem>
            <ContactItem><MailOutline style={{marginRight:'5px'}}/>fahfuhfuahdsi@faf.fsdf</ContactItem>
            <Payment src=''/ >
        </Right>
    </Container>
  )
}

export default Footer
