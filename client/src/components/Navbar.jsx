import React from "react";
import styled from 'styled-components'
import {Search} from '@material-ui/icons'
import {Badge} from '@material-ui/core'
import {ShoppingCartOutlined} from '@material-ui/icons'
import {mobile} from '../responsive';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { logout } from "../redux/userRedux";

const Container = styled.div`
    height: 60px;
    ${mobile({height:'auto'})}    
`
const Wrapper = styled.div`
    padding: 5px 10px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    box-shadow:0px 10px 30px rgba(202, 202, 202, 0.682);
    margin-bottom:30px;
    ${mobile({padding:'10px 0px'})} 
`
const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`
const Center = styled.div`
    flex:1;
    text-align:center;
`
const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    ${mobile({flex:2,justifyContent:'center'})} 
`
const InputText = styled.span`
    ${mobile({display:'none'})} 
`
const Language = styled.span`
    font-size:14px;
    cursor:pointer;
    ${mobile({display:'none'})} 
`
const SearchContaincer = styled.div`
    border:0.25px solid black;
    display:flex;
    align-items:center;
    padding:5px;
    margin-left:25px;
`
const Input = styled.input`
    border:none;
    outline:none;
    ${mobile({width:'50px'})} 
`
const Logo = styled.h1`
    font-weight:bold;
    ${mobile({fontSize:'24px'})} 
`
const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
    ${mobile({fontSize:'15px'})} 
`
function Navbar(){
    const quantity = useSelector(state=>state.cart.quantity);
    const user = useSelector(state=>state.user.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleLogout = ()=>{
        navigate('/login');
        dispatch(logout());
    }
    return(<>
        <Container>
            <Wrapper>
                <Left>
                    <Link style={{textDecoration:"none"}} to='/product'><Language>EN</Language></Link>
                    <SearchContaincer>
                        <InputText>input</InputText>
                       <Input /><Link style={{textDecoration:"none"}} to='/products/d'>productlist</Link>
                        <Search style={{color:'gray',fontSize:16}} />
                    </SearchContaincer>
                </Left>
                <Center>
                    <Link style={{textDecoration:"none"}} to='/'><Logo>ECOM</Logo></Link>
                </Center>
                <Right>

                    {user?<MenuItem onClick={handleLogout}>LOGOUT</MenuItem>:<><Link style={{textDecoration:"none"}} to='/register'><MenuItem>REGISTER</MenuItem></Link>
                    <Link style={{textDecoration:"none"}} to='/login'><MenuItem>SIGN IN</MenuItem></Link></>}
                    <MenuItem>
                        <Badge overlap="rectangular" badgeContent={quantity} color="primary">
                            <Link style={{textDecoration:"none"}} to='/cart'><ShoppingCartOutlined /></Link>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    </>)
}

export default Navbar;