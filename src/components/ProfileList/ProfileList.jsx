import React from 'react';
import './ProfileList.css';
// import GoalList from '../../components/GoalList/GoalList'
import ProfileListCard from '../../components/ProfileListCard/ProfileListCard'

export default function ProfileList( { profileListItems }) {
  return (
    <div className="profileListContainer">
        {profileListItems.map((profileListItem) => (
            <ProfileListCard key={profileListItem._id} profileListItem={profileListItem} />
        ))}
    </div>
  );
}
