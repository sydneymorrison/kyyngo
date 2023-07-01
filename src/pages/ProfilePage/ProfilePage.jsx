import React, { useState, useEffect } from 'react';
import ProfileList from '../../components/ProfileList/ProfileList';
import './ProfilePage.css';
//API Routes
import { getProfileList, deleteGoal } from '../../utilities/profiles-api';




export default function ProfilePage() {

  const [profileListItems, setProfileListItems] = useState([]);


  //Fetch the profile list on the initial loan

  useEffect(() => {
    fetchProfileList();
  }, []);


  //Call the funciton to call the profile list
  const fetchProfileList = async () => {
    try {
      const profileList = await getProfileList();
      setProfileListItems(profileList);

      console.log('profileList', profileList);

    } catch (error) {
      console.log('Failed to retrieve profile list items:', error);
    }
  };


  //function to handle the goal deletion

  const handleDeleteGoal = async (goalId) => {
    try {
      //Call the delete api to delete the goal
      await deleteGoal(goalId);

      //Fetch the updated profile list after it has then been deleted
      fetchProfileList();

      console.log('Goal deleted successfully!');
    } catch (error) {
      console.log('Failed to delete goal:', error);
    }
  };



  return (
    <div>
      <div>ProfilePage</div>
      <ProfileList profileListItems={profileListItems} handleDeleteGoal={handleDeleteGoal} />
    </div>
  );
}
