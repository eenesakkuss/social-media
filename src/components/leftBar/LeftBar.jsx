import './leftBar.scss'
import Friends from '../../assets/1.png'
import Groups from '../../assets/2.png'
import MarketPlace from '../../assets/3.png'
const LeftBar = () => {
  return (
    <div className='leftBar'>
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src='https://images.pexels.com/photos/3314294/pexels-photo-3314294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
            <span>Enes Akkuş</span>
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
