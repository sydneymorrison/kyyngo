import React from 'react'
import './ProfileFormCard.css';


export default function ProfileFormCard({ selectedProfile, profileListItems  }) {

  console.log('profileListItems form card:', profileListItems);

//   return (
//     <div className="ProfileFormCardContainer">
//         <div className="profileFormCardContainer">
//             <div>ProfileFormCard</div>
//             {profileListItems.map((profileListItem) => (
//             <div key={profileListItem._id}>
//               <div>{profileListItem.username}</div>
//               <img src={profileListItem.profilePicture} alt="Profile Picture" />
//               {/* <div>{profileListItem.profilePicture}</div> */}
//               <div>{profileListItem.bio}</div>
//             </div>
//       ))}
//     </div>
//   </div>
// );

// }

const loggedInUser = profileListItems.find(
  (profile) => profile.userId);

return (
  <div className="profileFormCardContainer">
      <div className="profileFormCardContainer">
          <div>ProfileFormCard</div>
          {loggedInUser && (
            <div>
            <div>{loggedInUser.username}</div>
            <img src={loggedInUser.profilePicture} alt="Profile Picture" />
            <div>{loggedInUser.bio}</div>
          </div>
          )}
  </div>
  </div>
);
}