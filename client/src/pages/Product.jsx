import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcment from '../components/Announcment'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import imu from '../static/imu.jpg'
import { Remove, Add } from '@material-ui/icons'
import {mobile} from '../responsive'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../requestMethods'
import { addProduct } from '../redux/cartRedux'
import { useDispatch, useSelector } from 'react-redux'

const Container = styled.div``
const Wrapper = styled.div`
    padding:50px;
    display:flex;
    ${mobile({flexDirection:'column'})};
`
const ImageContainer = styled.div`
    flex:1;
`
const Image = styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;
    ${mobile({height:'40%'})};
`
const InfoContainer = styled.div`
    flex:1;
    padding:0px 50px;
    ${mobile({padding:'10px'})};
`
const Title = styled.h1`
    font-weight:200;
`
const Desc = styled.p`
    margin:20px 0px;
`
const Price = styled.span`
    font-weight:100;
    font-size:40px;
`
const FilterCotainer = styled.div`
    width:50%;
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
    ${mobile({width:'100%'})};
`
const Filter = styled.div`
    display:flex;
    align-items:center;
`
const FilterTitle = styled.span`
    font-size:20px;
    font-weight:200;
`
const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${(props)=>{return props.color}};
    margin:0 5px;
    cursor:pointer;
`
const FilterSize = styled.select`
    margin-left:10px;
    padding:5px;
`
const FilterSizeOption = styled.option``
const AddContainer = styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    ${mobile({width:'100%'})};
`
const AmountContainer = styled.div`
    display:flex;
    align-items:center;
    font-weight:600;
`
const Amount = styled.span`
    width:30px;
    height:30px;
    border-radius:10px;
    border:1px solid teal;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0px 5px;
`
const Button = styled.button`
    padding:15px;
    border:2px solid teal;
    background:white;
    cursor:pointer;
    font-weight:500;
    transition:all 0.4s ease;
    font-size:1em;

    &:hover{
        background:teal;
        color:white;
    }
`

const Product = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const id = location.pathname.split('/')[2];
    const [product, setProduct] = useState({});
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [color, setColor] = useState(colors[0]);
    const [size, setSize] = useState(sizes[0]);
    const [quantity, setQuantity] = useState(1);
    const cart = useSelector(state=>state.cart);
    
    useEffect(()=>{
            publicRequest.get(`product/find/${id}`).then((res)=>{
            setProduct(res.data);
            let temp = [];
            res.data.color.map((e)=>{
                temp.push(e);
            });
            setColors(temp)
            let temp2 = [];
            res.data.size.map((e)=>{
                temp2.push(e);
            });
            setSizes(temp2);
        }).catch((e)=>{
            console.log(e);
        })
    },[id])
    const handleQuantity = (type) => {
        if(type === 'inc'){
            setQuantity(quantity + 1);
        }else if(quantity > 1){
            setQuantity(quantity - 1);
        }else{
            setQuantity(1);
        }
    }
    const handleClick = async()=> {
        dispatch(addProduct({...product, color, size, quantity}));
    }
    return (
    <Container>
      <Announcment />
      <Navbar />
      <Wrapper>
        <ImageContainer>
            <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>{product.desc}</Desc>
            <Price>{product.price}</Price>
            <FilterCotainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    {colors.map((c)=>{
                        return <FilterColor color={c} key={c} onClick={()=>{setColor(c)}} />
                    })}
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize onChange={(e)=>{setSize(e.target.value)}}>
                        {sizes.map((e)=>{
                            return <FilterSizeOption value={e}>{e}</FilterSizeOption>
                        })}
                    </FilterSize>
                </Filter>
            </FilterCotainer>
            <AddContainer>
                <AmountContainer>
                    <Remove onClick={()=>{handleQuantity('dec')}} />
                    <Amount>{quantity}</Amount>
                    <Add onClick={()=>{handleQuantity('inc')}} />
                </AmountContainer>
                <Button onClick={handleClick}>ADD TO CART</Button>
            </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Product
