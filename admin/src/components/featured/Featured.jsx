import React from 'react'
import './featured.scss'
import { MoreVert } from '@mui/icons-material'
import {CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVert fontSize='small'/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} strokeWidth={5} text='70%' />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, distinctio.</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">
              Target
            </div>
            <div className="itemResult positive">
              <KeyboardArrowUp fontSize='small' />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">
              Last Week
            </div>
            <div className="itemResult positive">
              <KeyboardArrowUp fontSize='small' />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">
              Last Month
            </div>
            <div className="itemResult negative">
              <KeyboardArrowUp fontSize='small' />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
