import { useContext } from "react";
import {AuthContext} from '../../context/authContext'
import "./comments.scss"

const Comments = () => {

    const {currentUser} = useContext(AuthContext)

    //Temporary 
    const comments = [
        {
            id:1,
            desc: "çok güzel foto",
            name: "Enes akkus",
            userId: 1,
            profilePicture: "https://images.pexels.com/photos/762041/pexels-photo-762041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id:2,
            desc: "çok güzel foto yorum2",
            name: "Enes akkus 2",
            userId: 2,
            profilePicture: "https://images.pexels.com/photos/762041/pexels-photo-762041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ];

  return (
    <div className="comments">
        <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
        </div>
        {comments.map(comment => (
            <div className="comment">
                <img src={comment.profilePicture} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className="date">1 hour ago</span>
            </div>
        ))}
    </div>
  )
}

export default Comments
