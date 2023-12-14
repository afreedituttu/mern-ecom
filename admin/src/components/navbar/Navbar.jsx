import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ChatIcon from '@mui/icons-material/Chat';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import {DarkModeContext} from '../../context/darkModeContext'
import { useContext } from 'react';

const Navbar = () => {
  const {dispatch} = useContext(DarkModeContext);
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='search' />
          <SearchIcon />
        </div>
        <div className='items' >
          <div className='item' >
            <LanguageIcon />
            English
          </div>
          <div className='item' >
            <DarkModeIcon className='icon' onClick={()=>{dispatch({type:"TOGGLE"})}} />
          </div>
          <div className='item' >
            <FullscreenExitIcon />
          </div>
          <div className='item' >
            <CircleNotificationsIcon />
            <div className='counter'>3</div>
          </div>
          <div className='item' >
            <ChatIcon />
            <div className='counter'>1</div>
          </div>
          <div className='item' >
            <FormatListBulletedIcon />
          </div>
          <div className='item' >
            <img src='https://tse1.mm.bing.net/th?id=OIP.WvSE35Sq4Sj4jL0tc-EW9wHaHa&pid=Api&P=0&h=180' alt='' className='avatar' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
