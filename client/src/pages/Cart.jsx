import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Announcment from '../components/Announcment'
import Footer from '../components/Footer'
import styled from 'styled-components'
import imu from '../static/imu.jpg'
import { Add, Remove } from '@material-ui/icons'
import {mobile} from '../responsive'
import { useSelector, useDispatch } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout';
import { userRequest } from '../requestMethods';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/cartRedux';

const Container = styled.div``
const Wrapper = styled.div`
  padding:20px;
  ${mobile({padding:'10px'})};
`
const Title = styled.h1`
  font-weight:300;
  text-align:center;
`
const Top = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
`
const TopButton = styled.button`
  padding:10px;
  font-weight:600;
  cursor:pointer;
  border:${(props)=>{return props.type === 'filled' && 'none'}};
  background-color:${(props)=>{return props.type === 'filled' && 'black'}};
  color:${(props)=>{return props.type === 'filled' && 'white'}};

`
const TopTexts = styled.div`
    ${mobile({display:'none'})};
`
const TopText = styled.span`
  text-decoration: underlined;
  cursor:pointer;
  margin:0 10px;
`
const Bottom = styled.span`
  display:flex;
  justify-content:space-between;
  ${mobile({flexDirection:'column'})};
`
const Info = styled.div`
  flex:3;
`
const Product = styled.div`
  display:flex;
  justify-content:space-between;
  ${mobile({flexDirection:'column'})};
`
const ProductDetail = styled.div`
  flex:2;
  display:flex;
`
const Image = styled.img`
  width:200px;
`
const Details = styled.div`
  padding:20px;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductSize = styled.span``
const ProductColor = styled.div`
  width:20px;
  height:20px;
  border-radius:50%;
  background:${(props)=>{return props.color}};
`
const PriceDetail = styled.div`
  flex:1;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
`
const ProductAmountContainer = styled.div`
  display:flex;
  align-items:center;
  margin-bottom:20px;
`
const ProductAmount = styled.div`
  font-size:24px;
  margin:5px;
  ${mobile({margin:'5px 15px'})};
  
`
const ProductPrice = styled.div`
  font-size:30px;
  font-weight:200;
  ${mobile({marginBottom:'30px'})};
`
const Hr = styled.hr`
  border:none;
  background:#999;
  height:1px;
  opacity:0.5;
`
const Summary = styled.div`
  flex:1;
  border:0.5px solid lightgray;
  border-radius: 10px;
  padding:20px;
  height:50vh;
`
const SummaryItem = styled.div`
  display:flex;
  margin: 30px 0px;
  display:flex;
  justify-content:space-between;
  font-weight:${(props)=>{
    if(props.type === 'total'){
      return '500'
    }else{
      return
    }
  }}
`
const SummaryItemPrice = styled.div``
const SummaryItemText = styled.span``
const SummaryTitle = styled.h1`
  font-weight:200;
`
const SummaryButton = styled.button`
  width:100%;
  padding:10px;
  background:black;
  color:white;
  font-weight:600;
`

const Cart = () => {
  const user = useSelector(state=>state.user.currentUser);
  const cart = useSelector(state=>state.cart);
  const KEY = process.env.REACT_APP_STRIPE || "pk_test_51Llx5hSANGqKudJ3UmGfnUmzV0bL5bysg2uW4bgQQv9PdoQkNkcn4TuDEQyYMkzhaXaOsusxw52ilMQO8hvhbLC500zPZJEOfH"
  const [stripeToken, setStripeToken] = useState(null);
  
  const history = useNavigate();
  const onToken = (token) => {
    setStripeToken(token);
  }
  console.log(stripeToken);
  useEffect(()=>{
    const makeRequest = async ()=>{
      try{
        const res = await userRequest.post("/checkout/payment", {
          tokenId:stripeToken.id,
          amount: cart.total * 100,
        })
        history.push("/success",{data:res.data});
      }catch(e){
        console.log(e);
      }
    }
    stripeToken && cart.total>=1 &&makeRequest();
  }, [stripeToken, cart.total, history])
  const dispatch = useDispatch();
  const handleOrder = ()=> {
    if(cart){
      try{
        // cart : products, quantity, total
        userRequest.post("/order", {...cart, userId:user._id, address:user.address, username:user.username}).then((res)=>{
          dispatch(clearCart());
          alert('order placed')
        }).catch((e)=>{
          console.log(e);
        })
      }catch(e){
        console.log(e);
      }
    }
  }
  return (
    <Container>
      <Announcment />
      <Navbar />
        <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shopping Bag(2)</TopText>
              <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            <TopButton type="filled" >CHECK OUT</TopButton>
          </Top>
          <Bottom>
            <Info>
            {cart.products.map((product)=>{
              return <Product>
                <ProductDetail>
                  <Image src={product.img}></Image>
                  <Details>
                    <ProductName><b>Product : </b>{product.title}</ProductName>
                    <ProductId><b>ID : </b>{product._id}</ProductId>
                    <ProductColor color={product.color} ></ProductColor>
                    <ProductSize><b>Size : </b>{product.size}</ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>{product.price}</ProductPrice>
                </PriceDetail>
              </Product>
            })}
              <Hr />
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>{cart.total}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimate Shipping</SummaryItemText>
                <SummaryItemPrice>$ 5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>$ -5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type='total'>
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>{cart.total}</SummaryItemPrice>
              </SummaryItem>
              <button onClick={handleOrder}>Order Now</button>
              <StripeCheckout
              name='afreedi z'
              billingAddress
              shippingAddress
              description={`Your total is ${cart.total}`}
              amount={cart.total*100}
              token={onToken}
              stripeKey={KEY}
              key="1"
              >Checkout Now</StripeCheckout>
            </Summary>
          </Bottom>
        </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart
