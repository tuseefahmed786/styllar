import React from 'react'
import { useContext } from 'react';
import { MyContext } from '../../../MyContext';
import AvatarImg from "../DashboardAvatar/Assests/Styllar ItemsMAGIC-BALLS-736 cop.png"
import "./SelectAvatar.css"
import SideSelectAvatar from './SideSelectAvatar'
function SelectAvatar() {

const {  setfirst } = useContext(MyContext);
function showSideAvtar() {
  setfirst(true)
}
  return (
    <div className='create-avatar'>
{/* {first?console.log(false):<SideSelectAvatar/>}
 */}


    <div className='avatarpic-section'>
      
        <img src={AvatarImg} alt="" />

    </div>

    <div className='avatar-content'>
      <p>No Avatar Selected.<br/>
Please select the avatar<br/>
you wish to upgrade</p>
    </div>

    <div className='avatar-button'>
      <button onClick={showSideAvtar}>Select your Avatar</button>
    </div>
    </div>
  )
}

export default SelectAvatar