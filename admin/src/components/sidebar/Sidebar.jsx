import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ViewListIcon from '@mui/icons-material/ViewList';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import {DarkModeContext} from '../../context/darkModeContext'
import {logout} from '../../redux/userRedux'
import {useDispatch} from 'react-redux'
const Sidebar = () => {
  const dispatcher = useDispatch();
  const navigate = useNavigate();
  const handleLogout = ()=> {
    dispatcher(logout());
    navigate('/login');
    window.location.reload();
  }
  const {dispatch} = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
      <div className='top'>
      <Link to='/' style={{textDecoration:'none'}}>
        <span className='logo'>Afreedi Admin</span>
      </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <Link to='/' style={{textDecoration:'none'}}>
          <li>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </li>
          </Link>
          <p className='title'>LIST</p>
          <Link to='/users' style={{textDecoration:'none'}}>
          <li>
            <PersonIcon className='icon' />
            <span>Users</span>
          </li>
          </Link>
          <Link to='/products' style={{textDecoration:'none'}}>
          <li>
            <ProductionQuantityLimitsIcon className='icon' />
            <span>Products</span>
          </li>
          </Link>
          <Link to='/orders' style={{textDecoration:'none'}}>
          <li>
            <ViewListIcon className='icon' />
            <span>Orders</span>
          </li>
          </Link>
          <Link to='/delivery' style={{textDecoration:'none'}}>
          <li>
            <AirportShuttleIcon className='icon' />
            <span>Delivery</span>
          </li>
          </Link>
          <p className='title'>USEFUL LINKS</p>
          <Link to='/stats' style={{textDecoration:'none'}}>
          <li>
            <QueryStatsIcon className='icon' />
            <span>Stats</span>
          </li>
          </Link>
          <Link to='/notifications' style={{textDecoration:'none'}}>
          <li>
            <CircleNotificationsIcon className='icon' />
            <span>Notificatins</span>
          </li>
          </Link>
          <p className='title'>SERVICE</p>
          <Link to='/health' style={{textDecoration:'none'}}>
          <li>
            <SettingsSystemDaydreamIcon className='icon' />
            <span>System health</span>
          </li>
          </Link>
          <Link to='/settings' style={{textDecoration:'none'}}>
          <li>
            <SettingsIcon className='icon' />
            <span>Settings</span>
          </li>
          </Link>
          <p className='title'>USER</p>
          <Link to='/profile' style={{textDecoration:'none'}}>
          <li>
            <AccountBoxIcon className='icon' />
            <span>Profile</span>
          </li>
          </Link>
          <Link style={{textDecoration:'none'}}>
          <li onClick={handleLogout}>
            <LogoutIcon className='icon' />
            <span>Logout</span>
          </li>
          </Link>
        </ul>
      </div>
      <div className='bottom'>
        <div className='colorOptions' onClick={()=>{dispatch({type:'LIGHT'})}}></div>
        <div className='colorOptions' onClick={()=>{dispatch({type:'DARK'})}}></div>
      </div>
    </div>
  )
}

export default Sidebar
