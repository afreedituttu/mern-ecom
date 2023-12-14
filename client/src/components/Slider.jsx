import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import imu from '../static/imu.jpg'
import { sliderItem } from '../data'
import {mobile} from '../responsive'

const Container = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  overflow:hidden;
  ${mobile({display:'none'})};
`

const Arrow1 = styled.div`
  width:50px;
  height:50px;
  background-color:transparent;
  border-radius:50%;
  diplay:flex;
  align-items:center;
  justify-content:center;
  position:absolute;
  top:0;
  bottom:0;
  left:10px;
  margin:auto;
  cursor:pointer;
  z-index:1;
`
const Arrow2 = styled.div`
  width:50px;
  height:50px;
  background-color:transparent;
  border-radius:50%;
  diplay:flex;
  align-items:center;
  justify-content:center;
  position:absolute;
  top:0;
  bottom:0;
  right:10px;
  margin:auto;
  cursor:pointer;
  z-index:1;
`

const Wrapper= styled.div`
  height:100%;
  display:flex;
  transform:translateX(${(props)=>{return props.slideIndex * -100}}vw);
  transition:all 1s ease;
`

const Slide = styled.div`
  display:flex;
  align-items:center;
  width:100vw;
  height:100vh;
  background-color:#${(props)=>{return props.bg}};

`
const ImgContainer = styled.div`
  height:100%;
  flex:1;
`
const Image = styled.img`
  height:80%;
`

const InfoContainer = styled.div`
  flex:1;
  padding:50px;
`
const Title = styled.h1`
  font-size:78px;
`
const Description = styled.p`
  margin:50px 0px;
  font-size:20px;
  font-weight:500;
  letter-spacing:3px;
`
const Button = styled.button`
  padding:10px;
  font-size:20px;
  background-color:transparent;
`

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction)=>{
    if(direction==="left"){
      setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
    }else{
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  }

  return (
    <Container>
      <Arrow1 direction='left' onClick={()=>{handleClick('left')}}>
        <ArrowLeftOutlined />
      </Arrow1>
      <Wrapper slideIndex={slideIndex}>
        {
          sliderItem.map((item)=>{
            return(<>
              <Slide bg={item.bg} key={item.id} >
            <ImgContainer>
              <Image src={item.img}></Image>
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
            </>)
          })
        }
      </Wrapper>
      <Arrow2 direction='right' onClick={()=>{handleClick("right")}}>
        <ArrowRightOutlined/>
      </Arrow2>
    </Container>
  )
}

export default Slider
