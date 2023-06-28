import React, { useState } from 'react';
import { createProfile } from '../../utilities/profiles-api';
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
    async function onSubmitProfileForm (evt) {
        evt.preventDefault();

        if(isSubmitted){
          //Call update Profile Form functionality for a user to update their profile
          updateProfileForm();

        } else {
          //Create logic for profile form to be submitted
          createProfileForm();

          //Set the isSubmitted State to true
          setIsSubmitted(true);
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
          <form className="profileForm" onSubmit={onSubmitProfileForm}>
            {/* //Input for First Name */}
            <label> First Name</label>
            <input
              name="firstName"
              value={profileFormData.firstName}
              onChange={handleChange}
            />
    
              {/* //Input for Last Name */}
              <label> Last Name</label>
              <input
                name="lastName"
                value={profileFormData.lastName}
                onChange={handleChange}
              />
    
              {/* //Input for Username */}
              <label>Username</label>
              <input
                name="username"
                value={profileFormData.username}
                onChange={handleChange}
              />
    
              {/* //Input for Profile Picture */}
              <label> Profile Picture</label>
              <input
                name="profilePicture"
                value={profileFormData.profilePicture}
                onChange={handleChange}
              />
    
              {/* //Input for Bio */}
              <label> Bio</label>
              <input
                name="bio"
                value={profileFormData.bio}
                onChange={handleChange}
              />
    
    
              {/* //Submit Button */}
              <button type="submit">Submit</button>
    
        </form>
        </div>
  );
}
