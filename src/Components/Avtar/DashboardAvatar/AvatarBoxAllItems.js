import React from 'react'
import closedavatar from "./Assests/Group 1.png"
import Stlavar from "./Assests/Styllar ItemsMAGIC-BALLS-736 copy 1.png"
import IronIcon from "./Assests/Vector 243.png"
function AvatarBoxAllItems() {
  return (
   <>
 

<div className='avatar-closed-layout'>
<img src={closedavatar} alt="" />
</div>

<div className='avatar-box-layout stalker-box'>
  <span className='iron-icon'>
    <img src={IronIcon} alt=""/>
  </span>

  <span className="icon-22x">
<p>22x</p>
  </span>
<div className='stalker-img'><img src={Stlavar} alt="" /></div>
</div>

<div className='avatar-box-layout stalker-box'>
  <span className='iron-icon'>
    <img src={IronIcon} alt=""/>
  </span>

  <span className="icon-22x blue22x">
<p>22x</p>
  </span>
<div className='stalker-img'><img src={Stlavar} alt="" /></div>
</div>
<div className='avatar-box-layout stalker-box'>
  <span className='iron-icon'>
    <img src={IronIcon} alt=""/>
  </span>

  <span className="icon-22x blue22x">
<p>22x</p>
  </span>
<div className='stalker-img'><img src={Stlavar} alt="" /></div>
</div>

   </>
  )
}

export default AvatarBoxAllItems