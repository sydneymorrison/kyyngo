import React from 'react';
import './ProfileListCard';



export default function ProfileListCard( { profileListItem } ) {
    const createdAt = new Date(profileListItem.createdAt);
    const date = createdAt.getDate();
    const month = createdAt.toLocaleString('default', { month: 'long' });
    const year = createdAt.getFullYear();
    const formattedDate = month + ' ' + date + ', ' + year;
  
    return (
      <div className="goalListCardContainer">
        <div>
            {/* Has the goal icon in the center of the circle */}
            {profileListItem.goals.map((goal) =>(
                <div key={goal._id}>
                    {goal.icon}
                </div>
            ))}
        </div>
        <div>
          {/* Created at date */}
          {formattedDate}
          {/* username from profile model */}
          {/* goal title */}
          {profileListItem.goals.map((goal) =>(
                <div key={goal._id}>
                    {goal.title}
                    {goal.description}
                </div>
            ))}
        </div>
        <div>
            {/* Follower Count */}
            {/* Star icon */}
            {/* Progress Bar */}
        </div>
      </div>
    )
}
