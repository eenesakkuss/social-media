import './profile.scss'
import { FacebookTwoTone, MoreVert } from '@mui/icons-material'
import { LinkedIn } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'
import { Pinterest } from '@mui/icons-material'
import { Twitter } from '@mui/icons-material'
import { Place } from '@mui/icons-material'
import { Language } from '@mui/icons-material'
import { EmailOutlined } from '@mui/icons-material'
import Posts from "../../components/posts/Posts"

const Profile = () => {
  return (
    <div className='profile'>
      <div className="images">
        <img src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  className='cover'/>
        <img src="https://enesakkus.vercel.app/static/media/profile.ff8e34557b8a3addb21b.jpg" alt="" className='profilePicture'/>
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
          <a href="http://facebook.com">
              <FacebookTwoTone fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <Instagram fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <Twitter fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedIn fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <Pinterest fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Enes A</span>
            <div className="info">
              <div className="item">
                <Place/>
                <span>Turkiye</span>
              </div>
              <div className="item">
                <Language/>
                <span>TR</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlined/>
            <MoreVert/>
          </div>
        </div>
        <Posts/>
      </div>
    </div>
  )
}

export default Profile
