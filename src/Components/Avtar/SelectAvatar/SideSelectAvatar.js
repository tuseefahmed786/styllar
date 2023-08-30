import React from "react";
import SideImage from "./Side-Assests/Rectangle 654 (1).png";
import SideImage2 from "./Side-Assests/Rectangle 655.png";
import SideImage3 from "./Side-Assests/Rectangle 656 (1).png";
import SideImage4 from "./Side-Assests/Rectangle 656.png";
import SideImage5 from "./Side-Assests/Rectangle 657 (1).png";
import SideImage6 from "./Side-Assests/Rectangle 657.png";
import { useContext } from "react";
import { MyContext } from "../../../MyContext";
function SideSelectAvatar() {
  const { setfirst } = useContext(MyContext);
  function closedSide() {

    setfirst(false)
  }
  return (
    <>
      <div className="side-avatar">
        <div className="backcolor"></div>
        <div className="side-avatar-content">
          <div className="side-avatar-images">
            <div className="side-avatar-image">
              <img src={SideImage} alt="" />
            </div>
            <div className="side-avatar-image">
              <img src={SideImage2} alt="" />
            </div>
            <div className="side-avatar-image">
              <img src={SideImage3} alt="" />
            </div>
            <div className="side-avatar-image">
              <img src={SideImage4} alt="" />
            </div>
            <div className="side-avatar-image">
              <img src={SideImage5} alt="" />
            </div>
            <div className="side-avatar-image">
              <img src={SideImage6} alt="" />
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
