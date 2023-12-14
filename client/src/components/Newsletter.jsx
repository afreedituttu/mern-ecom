import React from 'react'
import { Send } from '@material-ui/icons'
import { styled } from 'styled-components'
import {mobile} from '../responsive';

const Container = styled.div`
    height:60vh;
    background-color: #fcf5f5;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
const Title = styled.h1`
    font-size:70px;
`
const Description = styled.div`
    font-size:24px;
    font-weight:300;
    margin-bottom:20px;
    ${mobile({textAlign:'center'})};
`
const InputContainer = styled.div`
    width:50%;
    height:40px;
    background-color:white;
    display:flex;
    justify-content:space-between;
    border: 1px solid lightgray;
    ${mobile({width:'80%'})};
`
const Input = styled.input`
    width:100%;
    border:none;
    flex:8;
    padding-left:20px
`
const Button = styled.button`
    flex:1;
    border:none;
    background-color:teal;
    color:white;
`

const Newsletter = () => {
  return(
  <Container>
    <Title>Newsletter </Title>
    <Description>tasd ijraeir eifaji efiasae esgaa f aefafafga </Description>
    <InputContainer>
        <Input placeholder='Your Email' />
        <Button>
            <Send />
        </Button>
    </InputContainer>
  </Container>)
}

export default Newsletter
