import './navbar.scss'
import  HomeOutlined  from '@mui/icons-material/HomeOutlined';
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlined from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlined from '@mui/icons-material/GridViewOutlined';
import NotificationsNoneOutlined from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlined from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlined from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';


const Navbar = () => {
  
  const {toggle, darkMode} = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext);
  
  return (
    <div className='navbar'>
      <div className="left">
       <Link to="/" style={{textDecoration:'none'}}>
        <span>FeeL</span>
       </Link>
       <HomeOutlined/>
       {darkMode ? <WbSunnyOutlined onClick={toggle}/> : <DarkModeOutlined onClick={toggle}/> }
       <GridViewOutlined/>
       <div className="search">
        <SearchOutlined/>
        <input type='text' placeholder='Search'></input>
       </div>
      </div>
      <div className="right">
        <PersonOutlineOutlined/>
        <EmailOutlined/>
        <NotificationsNoneOutlined/>
        <div className="user">
          <img src={currentUser.profilePic} alt=''/>
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
