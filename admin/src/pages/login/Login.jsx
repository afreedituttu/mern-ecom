import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {login} from '../../redux/apiCalls'
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = ()=> {
    login(dispatch, {username:username, password:password});
    navigate('/');
    window.location.reload();
  }
  return (
    <div>
      username : <input onChange={(e)=>{setUsername(e.target.value)}} value={username} type="text" placeholder='username' name='username' />
      username : <input onChange={(e)=>{setPassword(e.target.value)}}  value={password} type="password" placeholder='password' name='password'/> 
      <button onClick={handleSubmit}>login</button>
      
    </div>
  )
}

export default Login
