import './ProfileFormPage.css';
import ProfileForm from '../../components/ProfileForm/ProfileForm'

import React from 'react'

export default function ProfileFormPage() {
  return (
    <div className="profileFormPageContainer">
    <h1 className="profileFormPageH1">Add A Profile</h1>
    <ProfileForm />
    </div>
  )
}
