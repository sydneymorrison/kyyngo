import React from 'react'
import './ProfileFormCard.css';


export default function ProfileFormCard({ selectedProfile, profileListItems  }) {

  console.log('profileListItems form card:', profileListItems);

const loggedInUser = profileListItems.find(
  (profile) => profile.userId);

return (
  <div className="profileFormCardContainer">
      <div className="profileFormCard">
          {loggedInUser && (
            <div>
            <div className="profileFormCardUsername">{loggedInUser.username}</div>
            <img className="profileFormCardProfilePhoto" src={loggedInUser.profilePicture} alt="Profile Picture" />
            <div className="profileFormCardProfileBio"v>{loggedInUser.bio}</div>
          </div>
          )}
  </div>
  </div>
);
}