import { useContext } from 'react'
import {AuthContext} from '../../context/authContext'
import './stories.scss'

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  const stories = [
    {
      id:1,
      name:"Enes a.",
      img:"https://images.pexels.com/photos/3314294/pexels-photo-3314294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id:2,
      name:"Enes a2.",
      img:"https://images.pexels.com/photos/3314294/pexels-photo-3314294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id:3,
      name:"Enes a3.",
      img:"https://images.pexels.com/photos/3314294/pexels-photo-3314294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id:4,
      name:"Enes a3.",
      img:"https://images.pexels.com/photos/3314294/pexels-photo-3314294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
  ]

  return (
    <div className='stories'>
      <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories
