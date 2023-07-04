import React from 'react'
import './GoalCommentCard.css';


export default function GoalCommentCard({ comment, createdAt   }) {

  const createdAtDate = new Date(createdAt);
  const formattedCreatedAt = createdAtDate.toLocaleString();


  return (
    <div className="goalCommentCardContainer">
    <div className="goalCommentCard">
        <div className="goalCommentCardCreatedAt">
        {formattedCreatedAt}
        </div>
        <div className="goalCommentCardComment">
            {comment}
        </div>
    </div>
    </div>
  )
}
