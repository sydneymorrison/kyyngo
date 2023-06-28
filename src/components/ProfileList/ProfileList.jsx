import React from 'react';
import './ProfileList.css';
import GoalListCard from '../GoalListCard/GoalListCard';

export default function ProfileList( { profileListItems }) {
  return (
    <div className="profileListContainer">
        {profileListItems.map((profileListItem) => (
            <GoalListCard key={profileListItem.goalId._id} goalListItem={profileListItem} />
        ))}
    </div>
  );
}
