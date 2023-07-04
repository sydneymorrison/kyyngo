import React from 'react';
import './ProfileList.css';
// import GoalList from '../../components/GoalList/GoalList'
import ProfileListCard from '../../components/ProfileListCard/ProfileListCard'
import ProfileFormCard from '../../components/ProfileFormCard/ProfileFormCard'

export default function ProfileList( { profileListItems, selectedProfile, handleProfileFormSelection }) {
  return (
    <div className="profileListContainer">

      <div className="profileListProfileFormCardComponent">
        <ProfileFormCard 
          // profileListItems={profileListItems} 
          profileListItems={profileListItems} 
          selectedProfile={selectedProfile}
        />
        </div>

        <div className="profileListCardComponent">
       {profileListItems.map((profileListItem) => (
            <ProfileListCard 
              key={profileListItem._id} 
              profileListItem={profileListItem} 
              handleProfileFormSelection={handleProfileFormSelection}
            />
        ))}
        </div>
    </div>
  );
}
