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
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left">
       <Link to="/" style={{textDecoration:'none'}}>
        <span>FeeL</span>
       </Link>
       <HomeOutlined/>
       <DarkModeOutlined/>
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
          <img src='https://images.pexels.com/photos/3314294/pexels-photo-3314294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
          <span>Enes Akkuş</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
