import React from 'react'
import './GoalCommentCard.css';


export default function GoalCommentCard({ comment, createdAt   }) {
  return (
    <div className="goalCommentCard">
        <div>{comment}</div>
        <div>{createdAt}</div>
    </div>
  )
}
