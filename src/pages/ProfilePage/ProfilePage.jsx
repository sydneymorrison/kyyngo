import React, { useState, useEffect } from 'react';
import GoalList from '../../components/GoalList/GoalList'
import './ProfilePage.css';

export default function ProfilePage() {

  const [profileListItems, setProfileListItems] = useState([]);

  //Set up useEffect to fetch goal List items
  useEffect(() => {
    async function fetchProfileList() {
    try {
      const profileList = await getProfileList();
      setProfileListItems(profileList);
    } catch (error) {
      console.log('Failed to retrieve profile items:', error);
    }
  }
    fetchProfileList();
}, []);


  return (
    <div>
    <div>ProfilePage</div>
    <ProfileList profileListItems={profileListItems} />
    </div>
  )
}
