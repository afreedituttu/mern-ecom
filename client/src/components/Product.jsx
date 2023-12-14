import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Container = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:5px;
    height:auto;
    min-width:280px;
    background:rgba(236, 236, 236, 0.974);
    position:relative;
`
const Circle = styled.div`
    width:200px;
    height:200px;
    background:white;
    border-radius:50%;
    position:absolute;
`
const Image = styled.img`
    width:80%;
    border-radius:50%;
    max-width:200px;
    z-index:2;
`
const Info = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background:rgba(200, 200, 200, 0.682);
    z-index:3;
    justify-content:center;
    align-items:center;
    display:flex;
    opacity:0;
    transition:all 0.5s ease;
    &:hover{
        opacity:100%;
    }
`
const Icon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    background-color:white;
    display:flex;
    margin:10px;
    align-items:center;
    justify-content:center;
    transition:all 0.2s ease;
    cursor:pointer;
    &:hover{
        background-color: #e9f5f5;
        transform:scale(1.1);
    }
`

const Product = ({item}) => {
  return(
  <Container>
    <Circle />
    {item.title}
    <Image src={item.img} />
    <Info>
        <Icon>
            <ShoppingCartOutlined />
        </Icon>
        <Icon>
        <Link style={{textDecoration:"none"}} to={`/product/${item._id}`}>
            <SearchOutlined />
        </Link>
        </Icon>
        <Icon>
            <FavoriteBorderOutlined />
        </Icon>
    </Info>
  </Container>
  )
}

export default Product
