import React from 'react'
import styled from 'styled-components'
import imu from '../static/imu.jpg'
import {mobile} from '../responsive';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import { register } from '../redux/apiCalls';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

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
    flex-wrap:wrap;
    max-width:400px;
`
const Input = styled.input`
    width:100%;
    min-width:40%;
    margin:20px 10px 0px 0px;
    padding:10px;
`
const Aggrement = styled.div`
  margin:1rem 0rem;
  font-size:1rem;
  color:gray;
`
const Button = styled.button`
    width:100%;
    border:none;
    padding:15px 20px;
    background-color:teal;
    color:white;
    cursor:pointer;
`
const Title = styled.h1``
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    username:"",
    email:"",
    password:"",
    img:"",
    age:"",
    address:""
  });

  const handleData = (e)=>{
    setData((preValue)=>{
      return {
        ...preValue,
        [e.target.name]:e.target.value
      }
    })
  }
  const handleSubmit = async()=> {
    register( dispatch, data, navigate);
  }
  return (<>
    <Navbar />
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
            username: <br /><Input type='text' palcholder="username" name='username' value={data.username} onChange={handleData} /><br />
            age : <br /><Input type='number' palcholder="username" name='age' value={data.age} onChange={handleData} /><br />
            img : <br /><Input type='text' palcholder="username" name='img' value={data.img} onChange={handleData} /><br />
            address : <br /><Input type='text' palcholder="address" name='address' value={data.address} onChange={handleData} /><br />
            email: <br /><Input type='text' palcholder="email" name='email' value={data.email} onChange={handleData} /><br />
            password: <br /><Input type='password' palcholder="password" name='password' value={data.password} onChange={handleData} /><br />
            <Aggrement>
                rierm  9ruea9ri 09wie 90ir09wei wfoisjf df a  jfsj  ojd oisjo fjpaosfj osd fjodsj djso jfsojfdjfsdjfojsfjs
            </Aggrement>
            <Button onClick={handleSubmit}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
    </>
  )
}

export default Register
