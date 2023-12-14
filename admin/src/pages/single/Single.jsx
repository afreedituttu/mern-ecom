import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import './single.scss'
import List from '../../components/tables/Table'
import {useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { userRequest } from '../../requestMethods'
const Single = () => {
  const [user, setUser] = useState("");
  const [orders, setOrders] = useState([]);
  const location = useLocation();
  const id = location.pathname.split('/')[2]

  useEffect(()=>{
    try{
      userRequest.get(`/users/find/${id}`).then((res)=>{
        setUser(res.data)
      }).catch((e)=>{
        console.log(e);
      })
      userRequest.get(`/order/find/${id}`).then((res)=>{
        setOrders(res.data)
      }).catch((e)=>{
        console.log(e);
      })
    }catch(e){
      console.log(e);
    }
  }, [])
  
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
          <div className="editButton">Edit</div>
            <div className="title">
              <h1 className='title'>Information</h1>
              <div className="item">
                <img className='itemImage' src="https://tse1.mm.bing.net/th?id=OIP.WvSE35Sq4Sj4jL0tc-EW9wHaHa&pid=Api&P=0&h=180" alt="" />
                <div className="details">
                  <h1 className="itemTitle">{user.username}</h1>
                  <div className="detailItem">
                    <span className="itemKey">Email : </span>
                    <span className="itemValue">{user.email}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone : </span>
                    <span className="itemValue">+91999004382</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Address : </span>
                    <span className="itemValue"> Lorem ipsum dolor sit amet. </span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Country :</span>
                    <span className="itemValue">India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title="User Spending ( Last 6 months )"/>
          </div>
        </div>
        <div className="bottom">
        <h1 className='title'>Past Transactions</h1>
          <List orders={orders} />
        </div>
      </div>
    </div>
  )
}

export default Single
