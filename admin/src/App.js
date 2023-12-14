import React, { useContext } from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Login from './pages/login/Login';
import New from './pages/new/New';
import Single from './pages/single/Single';
import { productInput, userInput } from './formSource';
import './style/dark.scss';
import { DarkModeContext } from './context/darkModeContext';
import { useState } from 'react';

const App = ()=>{

  const {darkMode} = useContext(DarkModeContext)
  const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin;
  return (
    <div className={darkMode? "app dark" : "app"}>
        <Routes>
          {admin &&
          <Route path="/">
            <Route index element={<Home />} />
            <Route path='users'>
              <Route index element={<List />} />
              <Route path=':userId' element={<Single />} />
              <Route path='new' element={<New inputs={userInput} title="Add New User" />} />
            </Route>
            <Route path='products'>
              <Route index element={<List />} />
              <Route path=':productId' element={<Single />} />
              <Route path='new' element={<New inputs={productInput} title="Add New Product" />} />
            </Route>
          </Route>
          }
          <Route path='/login' element={<Login />} />
        </Routes>
    </div>
  )
}

export default App;
