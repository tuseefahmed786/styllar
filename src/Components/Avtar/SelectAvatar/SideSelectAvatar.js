/* eslint-disable eqeqeq */
import React from "react";
import SideImage from "./Side-Assests/Rectangle 654 (1).png";
import SideImage2 from "./Side-Assests/Rectangle 655.png";
import SideImage3 from "./Side-Assests/Rectangle 656 (1).png";
import SideImage4 from "./Side-Assests/Rectangle 656.png";
import SideImage5 from "./Side-Assests/Rectangle 657 (1).png";
import SideImage6 from "./Side-Assests/Rectangle 657.png";
import { useContext } from "react";
import { useState } from "react";
import { MyContext } from "../../../MyContext";
function SideSelectAvatar() {
  const { setfirst } = useContext(MyContext);

const [selectsvg, setselectsvg] = useState("second")

function selectsvgs(e) {
  setselectsvg(e.target)
}
  function closedSide() {
    setfirst(false)
  }

  
  function remove(params) {
    setfirst(false)
  }



  return (
    <>
      <div className="side-avatar">
        <div className="backcolor" onClick={remove}></div>
        <div className="side-avatar-content">
          <div className="side-avatar-images">
            <div className="side-avatar-image">
              <img  src={SideImage} onClick={selectsvgs}  alt="" id="1" className={`img-r ${selectsvg.id == "1"?"slect-img":""}`}/>
            </div>
            <div className="side-avatar-image">
              <img src={SideImage2} onClick={selectsvgs} alt="" className={`img-r ${selectsvg.id == "2"?"slect-img":""}`} id="2"/>
            </div>
            <div className="side-avatar-image">
             
              <img src={SideImage3} alt="" onClick={selectsvgs} className={`img-r ${selectsvg.id == "3"?"slect-img":""}`} id="3"/>
            </div>
            <div className="side-avatar-image">
              <img src={SideImage4} alt="" onClick={selectsvgs} className={`img-r ${selectsvg.id == "4"?"slect-img":""}`} id="4"/>
            </div>
            <div className="side-avatar-image">
              <img src={SideImage5} alt="" className={`img-r ${selectsvg.id == "5"?"slect-img":""}`} onClick={selectsvgs}  id="5"/>
            </div>
            <div className="side-avatar-image">
              <img src={SideImage6} alt="" onClick={selectsvgs} className={`img-r ${selectsvg.id == "6" ? "slect-img":""}`} id="6"/>
            </div>
          </div>
          <div className="side-avatar-buttons">
            <button onClick={closedSide}>Cancel</button>
            <button>Select Avatar</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideSelectAvatar;
