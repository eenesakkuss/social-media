import React from 'react'
import './posts.scss'
import Post from '../post/Post'
const Posts = () => {

  const posts = [
    {
      id:1,
      name: "EA",
      userId:1,
      profilePic: "https://images.pexels.com/photos/3314294/pexels-photo-3314294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "selam naber iyi sen bende iyi güzel foto falan filan",
      img:"https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id:2,
      name: "EB",
      userId:2,
      profilePic: "https://images.pexels.com/photos/3314294/pexels-photo-3314294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "selam naber iyi sen bende iyi güzel foto falan filan",
    },
  ]

  return (
    <div className='posts'>
      {posts.map(post => (
        <Post post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default Posts
