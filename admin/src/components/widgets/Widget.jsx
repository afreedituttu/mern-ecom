import React from 'react'
import './widget.scss';
import { AccountBalanceOutlined, KeyboardArrowUp, MonetizationOn, PersonOutline, ShoppingCart } from '@mui/icons-material';


const Widget = ({title, link, amount, icon, isMoney}) => {
  const diff = 20

  
  return (
    <div className='widget'>
      <div className="left">
        <div className="title">{title}</div>
        <div className="counter">{isMoney && "$"}{amount}</div>
        <div className="link">{link}</div>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUp />
          {diff}%
        </div>
        {icon}
      </div>
    </div>
  )
}

export default Widget
