import React from 'react'
import Sidebar  from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './home.scss'
import Widget from '../../components/widgets/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import List from '../../components/tables/Table'
import { userRequest } from '../../requestMethods'
import { useState, useEffect } from 'react';
import { AccountBalanceOutlined, MonetizationOn, PersonOutline, ShoppingCart } from '@mui/icons-material';
const Home = ()=>{
  const [users, setUsers] = useState(0);
  const [orders, setOrders] = useState([]);
  const [orderCount, setOrderCount] = useState(0);
  const [income, setIncome] = useState(0);
  useEffect(()=>{
    function getData(){
      try{
        userRequest.get("/order/").then((res)=>{
          console.log(res.data);
          setOrders(res.data);
          setOrderCount(res.data.length);
        }).catch((e)=>{
          console.log(e);
        })
        userRequest.get('/order/income').then((res)=>{
          setIncome(res.data[0].total);
        }).catch((e)=>{
          console.log(e);
        })
        userRequest.get("/users/count").then((res)=>{
          setUsers(res.data);
        })
      }catch(e){
        console.log(e);
      }
    }
    getData();
  },[]);
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className='widgets'>
          <Widget type="user" title="USERS" link="see all users" amount={users} icon={<PersonOutline className='icon' style={{color:"crimson",background:"rgba(255, 0, 0, 0.2)"}} />} />
          <Widget type="order" title="ORDERS" link="see all orders" amount={orderCount}  icon={<ShoppingCart className='icon' style={{color:"crimson",background:"rgba(218, 165, 32, 0.2)"}}/>}  />
          <Widget type="balance"  isMoney="true" title="BALANCE" link="view balance" amount={income} icon={<MonetizationOn className='icon' style={{color:"crimson",background:"rgba(0, 128, 0, 0.2)"}}/>}  />
          <Widget type="earning" isMoney="true"  title="EARNINGS" link="view net earning" amount={((5*income)/100)} icon={<AccountBalanceOutlined className='icon' style={{color:"crimson",background:"rgba(128, 0, 128, 0.2)"}}/>}  />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 months Revenue" aspect={2/1}/>
        </div>
        <div className="listContainer">
          <div className="listTitle">
            Latest Trens
          </div>
          <List orders={orders} />
        </div>
      </div>
    </div>
  )
}

export default Home
