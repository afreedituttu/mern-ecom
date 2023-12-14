import React, { useState } from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { userRows, userColumns } from './datatablesource'
import './datatable.scss'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { userRequest } from '../../requestMethods'

const Datatable = () => {
    const [data, setData] = useState([]);
    const handleDelete=(id)=>{
        setData(data.filter(item=>item.id !== id))
    }
const actionColumn = [
    {field:"action", headerName:"Action", width:200, renderCell:(params)=>{
        return(<>
            <div className='cellAction'>
                <Link to={`/users/${params.row._id}`}>
                    <div className="viewButton">View</div>
                </Link>
                <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
            </div>
        </>)
    }}
]
    useEffect(()=>{
        try{
            userRequest.get("/users").then((res)=>{
                setData(()=>{
                    return res.data.map((value, index)=>{
                        return{
                                ...value,
                                id:index+1,
                                img:'https://tse1.mm.bing.net/th?id=OIP.WvSE35Sq4Sj4jL0tc-EW9wHaHa&pid=Api&P=0&h=180',
                                status:"pending",
                                age:21
                            }
                    })
                })
            }).catch((e)=>{
                console.log(e);
            })
        }catch(e){
            console.log(e);
        }

    }, [])
    setTimeout(()=>{
    }, 3000)
  return (
    <div className='datatable'>
        <div className="datatableTitle">
            Add new User 
            <Link to='/users/new' className='link'>Add new</Link>
        </div>
        <DataGrid
            className='datagrid'
            rows={data}
            columns={userColumns.concat(actionColumn)}
            initialState={{
            pagination: {
                paginationModel: { page: 0, pageSize: 9 },
            },
            }} 
            pageSizeOptions={[5, 10]}
            checkboxSelection
        />
    </div>
  )
}

export default Datatable