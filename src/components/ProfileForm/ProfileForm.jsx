import React, { useState } from 'react';
import './ProfileForm.css';


export default function ProfileForm() {
    const [profileFormData, setProfileFormData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        profilePicture: "",
        bio: ""
      });
    
      //Handle Change Function
    
      function handleChange(evt) {
        const newProfileFormData = { ...profileFormData, [evt.target.name]: evt.target.value };
        setProfileFormData(newProfileFormData);
      }
    
      //Handle Submit Function
      function onSubmitProfileForm (evt) {
        evt.preventDefault();
      }
    
      
      return (
        <div>
          <form onSubmit={onSubmitProfileForm}>
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
