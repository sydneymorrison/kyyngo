import React, { useState } from 'react';
import { createProfile } from '../../utilities/profiles-api';
import { checkExistingProfile } from '../../utilities/profiles-service';
import { fetchExistingProfile } from '../../utilities/profiles-api';
import './ProfileForm.css';


export default function ProfileForm() {
    const [profileFormData, setProfileFormData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        profilePicture: "",
        bio: ""
      });


    //State to track if a profile form has been submitted each user can only submit one profile form
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    
    //Handle Change Function
    function handleChange(evt) {
        const newProfileFormData = { ...profileFormData, [evt.target.name]: evt.target.value };
        setProfileFormData(newProfileFormData);
      }
    
    
    //Update Profile Form
    function updateProfileForm(){
      try {
        // Add the update logic here
      } catch (error) {
        console.error('Failed to update profile:', error.message);
      }
    }

    //Create Profile Form
    async function createProfileForm () {
      try {
        //Send a POST request to create a new Profile
        const newProfile = await createProfile({ 
          firstName: profileFormData.firstName,
          lastName: profileFormData.lastName,
          username: profileFormData.username,
          profilePicture: profileFormData.profilePicture,
          bio: profileFormData.bio,
        });

      // Handle the successful response
      console.log("New profile created:", newProfile);

      } catch (error) {
        // Handle the error
        console.error("Failed to create profile:", error.message);

      }
    }


    //Handle Submit Function
    async function onSubmitProfileForm(evt) {
        evt.preventDefault();

        if(isSubmitted) {
          //Call update Profile Form functionality for a user to update their profile
          updateProfileForm();

        } else {
          try {
            console.log('profileFormData.userId:', profileFormData.userId);
            const profileExists = await fetchExistingProfile(profileFormData.userId);

            if (profileExists) {
              console.log('Profile form already submitted');

              //Display message to user that the profile already exits
              alert('Profile already submitted. You cannot submit another profile.')
              return;
            }

            //Create logic for profile form to be submitted
            createProfileForm();

            //Set the isSubmitted State to true
            setIsSubmitted(true);
        } catch (error) {
          console.error('Failed to fetch existing profile:', error.message);
        
        }
      
      }
        //Clear the form data
        setProfileFormData({
          firstName: "",
          lastName: "",
          username: "",
          profilePicture: "",
          bio: "",
        });
      }
    
      
      return (
        <div className="profileFormContainer">
          <div className="profileFormComponent">
          <form className="profileForm" onSubmit={onSubmitProfileForm}>
            
            {/* //Input for First Name */}
            <div className="profileFormRow">
            <label className="profileFormLabel"> First Name</label>
            <input
              name="firstName"
              value={profileFormData.firstName}
              onChange={handleChange}
              className="profileFormInput"
            />
            </div>
    
              {/* //Input for Last Name */}
              <div className="profileFormRow">
              <label className="profileFormLabel"> Last Name</label>
              <input
                name="lastName"
                value={profileFormData.lastName}
                onChange={handleChange}
                className="profileFormInput"
              />
              </div>
    

              {/* //Input for Username */}
              <div className="profileFormRow">
              <label className="profileFormLabel">Username</label>
              <input
                name="username"
                value={profileFormData.username}
                onChange={handleChange}
                className="profileFormInput"
              />
              </div>
    
              {/* //Input for Profile Picture */}
              <div className="profileFormRow">
              <label className="profileFormLabel"> Profile Picture</label>
              <input
                name="profilePicture"
                value={profileFormData.profilePicture}
                onChange={handleChange}
                className="profileFormInput"
              />
              </div>
    
              {/* //Input for Bio */}
              <div className="profileFormRow">
              <label className="profileFormLabel"> Bio</label>
              <input
                name="bio"
                value={profileFormData.bio}
                onChange={handleChange}
                className="profileFormInput"
              />
              </div>
    
    
              {/* //Submit Button */}
              <button type="submit">Submit</button>
    
        </form>
        </div>
      </div>
  );
}
