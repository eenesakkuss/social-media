import './leftBar.scss'
import Friends from '../../assets/1.png'
import Groups from '../../assets/2.png'
import MarketPlace from '../../assets/3.png'
import { AuthContext } from '../../context/authContext'
import { useContext } from 'react'
const LeftBar = () => {

  const {currentUser} = useContext(AuthContext);

  return (
    <div className='leftBar'>
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt='' />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img alt='' src={Friends}/>
            <span>Friends</span>
          </div>
          <div className="item">
            <img alt='' src={Groups}/>
            <span>Groups</span>
          </div>
          <div className="item">
            <img alt='' src={MarketPlace}/>
            <span>Marketplace</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img alt='' src={Friends}/>
            <span>Friends</span>
          </div>
          <div className="item">
            <img alt='' src={Groups}/>
            <span>Groups</span>
          </div>
          <div className="item">
            <img alt='' src={MarketPlace}/>
            <span>Marketplace</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img alt='' src={Friends}/>
            <span>Friends</span>
          </div>
          <div className="item">
            <img alt='' src={Groups}/>
            <span>Groups</span>
          </div>
          <div className="item">
            <img alt='' src={MarketPlace}/>
            <span>Marketplace</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img alt='' src={Friends}/>
            <span>Friends</span>
          </div>
          <div className="item">
            <img alt='' src={Groups}/>
            <span>Groups</span>
          </div>
          <div className="item">
            <img alt='' src={MarketPlace}/>
            <span>Marketplace</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img alt='' src={Friends}/>
            <span>Friends</span>
          </div>
          <div className="item">
            <img alt='' src={Groups}/>
            <span>Groups</span>
          </div>
          <div className="item">
            <img alt='' src={MarketPlace}/>
            <span>Marketplace</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar
