import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './table.scss'

const rows = [
  {
    id:1,
    product:'acer',
    image:"https://tse2.mm.bing.net/th?id=OIP.Nrx616fmXeSL1vgIWoOUmQHaHa&pid=Api&P=0&h=180",
    customer:'john',
    date:'1 march',
    amount: 785,
    method:'cash on delivery',
    status:'approved'
  },
  {
    id:12,
    product:'acer2',
    image:"https://tse2.mm.bing.net/th?id=OIP.Nrx616fmXeSL1vgIWoOUmQHaHa&pid=Api&P=0&h=180",
    customer:'john2',
    date:'1 march2',
    amount: 7852,
    method:'cash on delivery',
    status:'approved'
  },
  {
    id:13,
    product:'acer3',
    image:"https://tse2.mm.bing.net/th?id=OIP.Nrx616fmXeSL1vgIWoOUmQHaHa&pid=Api&P=0&h=180",
    customer:'john3',
    date:'1 march3',
    amount: 7853,
    method:'cash on delivery',
    status:'approved'
  },
  {
    id:14,
    product:'acer4',
    image:"https://tse2.mm.bing.net/th?id=OIP.Nrx616fmXeSL1vgIWoOUmQHaHa&pid=Api&P=0&h=180",
    customer:'john4',
    date:'1 march4',
    amount: 7854,
    method:'cash on delivery',
    status:'pending'
  },
  {
    id:155,
    product:'acer5',
    image:"https://tse2.mm.bing.net/th?id=OIP.Nrx616fmXeSL1vgIWoOUmQHaHa&pid=Api&P=0&h=180",
    customer:'john5',
    date:'1 march5',
    amount: 7855,
    method:'cash on delivery',
    status:'pending'
  }
]
const List = ({orders}) => {
  console.log('orders at component');
  console.log(orders);
  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>index</TableCell>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell className='tableCell'>{index}</TableCell>
              <TableCell className='tableCell'>{row._id}</TableCell>
              <TableCell className='tableCell'>{row.username}</TableCell>
              <TableCell className='tableCell'>{row.createdAt}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.paymentMethod}</TableCell>
              <TableCell className='tableCell'>
                <div className={`status ${row.status}`}>{row.status}</div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List;
