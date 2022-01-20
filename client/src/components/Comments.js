import React from 'react'
import { Toast, ToastContainer } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'

const Comments = ({ comments }) => {   
    console.log(comments)
    
    return (
    <div className="toast-comment">
      <h4>Comments</h4>  
      {comments.map((comment) => (
      <ToastContainer key ={comment._id}>
        <Toast className='toast-main'>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">
            {[...Array(comment.rating)].map((star) => {
                return (  
                  <FaStar key={star}/>
                )
            })}  
          </strong>
          <small className="text-muted">{comment.createdAt.slice(0, 10)}</small>
        </Toast.Header>
       <Toast.Body>{comment.text}</Toast.Body>
       </Toast>
      </ToastContainer>
      ))}  
    </div>
    )
}

export default Comments
