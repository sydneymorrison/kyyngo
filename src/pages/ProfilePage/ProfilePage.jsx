import React, { useState, useEffect } from 'react';
import ProfileList from '../../components/ProfileList/ProfileList';
import './ProfilePage.css';
//API Routes
import { getProfileList, deleteGoal } from '../../utilities/profiles-api';
import { getProfileByUserId } from '../../utilities/profiles-api';




export default function ProfilePage() {

  const [profileListItems, setProfileListItems] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState({});
  //To track if a user has already submitted a form
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); 


  //Fetch the profile list on the initial loan

  useEffect(() => {
    fetchProfileList();
  }, []);


  //Call the function to call the profile list
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

  //Select the Profile to add the Form to the profile page
  const handleProfileFormSelection = (userId) => {
    const selectedProfile = profileListItems.find((profile) => profile.userId === userId);
    setSelectedProfile(selectedProfile || {} );
    console.log('selectedProfile 1:', selectedProfile);
};


  return (
      <div className="profilePageContainer">
      <ProfileList 
        profileListItems={profileListItems} 
        selectedProfile={selectedProfile}
        handleDeleteGoal={handleDeleteGoal} 
        handleProfileFormSelection={handleProfileFormSelection}
      />
    </div>
  );
}
