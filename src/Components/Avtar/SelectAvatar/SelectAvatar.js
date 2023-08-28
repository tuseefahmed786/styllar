import React from 'react'
import AvatarImg from "../DashboardAvatar/Assests/Styllar ItemsMAGIC-BALLS-736 copy 1.png"
import "./SelectAvatar.css"
function SelectAvatar() {
  return (
    <div className='create-avatar'>
    <div className='avatarpic-section'>
      
        <img src={AvatarImg} alt="" />

    </div>

    <div className='avatar-content'>
      <p>No Avatar Selected.
Please select the avatar
you wish to upgrade</p>
    </div>

    <div className='avatar-button'>
      <button>Select your Avatar</button>
    </div>
    </div>
  )
}

export default SelectAvatar