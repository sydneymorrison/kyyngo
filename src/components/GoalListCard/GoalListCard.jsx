import React from 'react';
import './GoalListCard.css';

export default function GoalListCard({ goalListItem }) {

  const createdAt = new Date(goalListItem.createdAt);
  const date = createdAt.getDate();
  const month = createdAt.toLocaleString('default', { month: 'long' });
  const year = createdAt.getFullYear();
  const formattedDate = month + ' ' + date + ', ' + year;

  return (
    <div className="goalListCardContainer">
      <div>
          {/* Has the goal icon in the center of the circle */}
          {goalListItem.icon}
      </div>
      <div>
        {/* Created at date */}
        {formattedDate}
        {/* username from profile model */}
        {/* goal title */}
        {goalListItem.title}
        {goalListItem.description}
      </div>
      <div>
          {/* Follower Count */}
          {/* Star icon */}
          {/* Progress Bar */}
      </div>
    </div>
  )
}
