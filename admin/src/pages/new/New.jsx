import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './new.scss'

const New = ({inputs, title}) => {
  const [file, setFile] = useState('');

  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file? URL.createObjectURL(file):''} alt="cant load image" />
          </div>
          <div className="right">
            <form action="">
              <div className="formInput">
                <label htmlFor="">Image upload : <br /></label>
                <input type="file" onChange={e=>setFile(e.target.files[0])} name="" id=""/>
              </div>
              {inputs.map((input)=>{
                return(<div className="formInput" key={input.id}>
                  <label htmlFor="">{input.label}</label>
                  <input type={input.type} name="" placeholder={input.placeholder} id="" />
                </div>)
              })}

              <button >Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
