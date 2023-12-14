import React from 'react'
import { styled } from 'styled-components'
import {mobile} from '../responsive';
import { Link } from 'react-router-dom';
const Container = styled.div`
  padding:10px;
  flex:1;
  margin:3;
  height:70vh;
  position:relative;
  margin:3px;
`
const Image = styled.img`
  width:100%;
  object-fit:cover;
  ${mobile({height:'30vh'})};
`
const Info = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:rgba(37, 37, 37, 0.298);
`
const Title = styled.h1`
  color:white;
  margin-bottom:20px;
`
const Button = styled.button`
  border:none;
  padding:10px;
  background:white;
  color:gray;
  cursor:pointer;
  font-weight:600;
`
const CategoryItem = ({item}) => {
  return (
    <Container>
    <Link style={{textDecoration:"none"}} to={`/products/${item.cat}`}>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Link>
    </Container>
  )
}

export default CategoryItem
