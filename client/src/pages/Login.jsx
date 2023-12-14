import React, { useState } from 'react'
import styled from 'styled-components'
import imu from '../static/imu.jpg'
import {mobile} from '../responsive';
import Navbar from '../components/Navbar';
import { login } from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';

const Container = styled.div`
    width:100vw;
    height:100vh;
    background:linear-gradient(255,255,2,0.5), url(${imu});
    background-size:cover;
    display:flex;
    justify-content:center;
    align-items:center;
`
const Wrapper = styled.div`
    width:40%;
    padding:20px;
    margin:4px;
    font-weight:300;
    font-size:24px;
    ${mobile({width:'80%'})};
`
const Form = styled.div`
    display:flex;
    flex-wrap:wrap;
`
const Input = styled.input`
    flex:1;
    min-width:100%;
    margin:20px 10px 0px 0px;
    padding:10px;
`
const Error = styled.span`
  color:red;
`
const Button = styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background-color:teal;
    color:white;
    cursor:pointer;
    margin-top:10px;
    &:disabled{
      color:#fff;
      background:gray;
      cursor:not-allowed;
    }
`
const Title = styled.h1``
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const {isFetching, error} = useSelector(state=>state.user);
  const handleSubmit = ()=> {
    login(dispatch, {username, password})
  }
  return (<>
    <Navbar />
    <Container>
      <Wrapper>
        <Title>LOGI INTO ACCOUNT</Title>
        <Form>
            <Input palcholder="username" type='text' onChange={(e)=>{setUsername(e.target.value)}} />
            <Input palcholder="password" type='password' onChange={(e)=>{setPassword(e.target.value)}} />
            <Button onClick={handleSubmit} disabled={isFetching}>LOGIN</Button>
            <Error>{error && "something went wrong"}</Error>
        </Form>
      </Wrapper>
    </Container>
    </>
  )
}

export default Login
