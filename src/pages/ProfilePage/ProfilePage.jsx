import React, { useState, useEffect } from 'react';
import ProfileList from '../../components/ProfileList/ProfileList';
import './ProfilePage.css';
//API Routes
import { getProfileList } from '../../utilities/profiles-api';



export default function ProfilePage() {

  const [profileListItems, setProfileListItems] = useState([]);

  //Set up useEffect to fetch goal List items
  useEffect(() => {
    async function fetchProfileList() {
    try {
      const profileList = await getProfileList();
      setProfileListItems(profileList);

      console.log('profileList', profileList);

    } catch (error) {
      console.log('Failed to retrieve profile list items:', error);
    }
  }
    fetchProfileList();
}, []);


  return (
    <div>
      <div>ProfilePage</div>
      <ProfileList profileListItems={profileListItems} />
    </div>
  );
}
