import './GoalDetailCard.css'
import React from 'react'



export default function GoalDetailCard( { goalDetailItems } ) {

//Update date to readable format
const createdAt = new Date(goalDetailItems.createdAt);
const date = createdAt.getDate();
const month = createdAt.toLocaleString('default', { month: 'long' });
const year = createdAt.getFullYear();
const formattedDate = month + ' ' + date + ', ' + year;



  return (
    <div className="goalDetailCardContainer">
        <div>
          {/* Has the goal icon in the center of the circle */}
          {goalDetailItems.icon}
      </div>
      <div>
        {/* Created at date */}
        {formattedDate}
        {/* username from profile model */}
        {/* goal title */}

        {/* Wrap the title in a link that navigates to the Goal Detail Page */}
        {goalDetailItems.title}
        {goalDetailItems.description}
      </div>
      <div>
          {/* Follower Count */}
          {/* Star icon */}
          {/* Progress Bar */}
      </div>
    </div>
  )
}
