import React, { useState } from "react";
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";

import logo from "../../assests/logo.png";

const Navbar = () => {
  const [isSideNavActive, setIsSideNavActive] = useState("navBarMenu");

  const showNavBar = () => {
    isSideNavActive === "navBarMenu"
      ? setIsSideNavActive("navBarMenu showNavBar")
      : setIsSideNavActive("navBarMenu");
  };

  const hideNavBar = () => {
    setIsSideNavActive("navBarMenu");
  };

  const [noBG, addBG] = useState("navBarTwo");
  
  const addBGColor = () => {
    if(window.scrollY >= 10){
      addBG('navBarTwo navbar_with_bg')
    }
    else {
      addBG('navBarTwo')
    }
  };

  window.addEventListener('scroll', addBGColor)

  

  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div>
          <SiConsul className="icons" />
        </div>

        {/* <div className="none flex">
          <li className="flex">
            <BsPhoneVibrate className="icons" />
            Support
          </li>
          <li className="flex">
            <AiOutlineGlobal className="icons" />
            Languages
          </li>
        </div> */}

        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Up</span>
        </div>
      </div>

      <div className={noBG}>
        <div className="logoDiv">
          <img src={logo} alt="logo" className="Logo" />
        </div>

        <div className={isSideNavActive}>
          <ul className="menu flex">
            <li onClick={hideNavBar} className="listItem">
              About
            </li>
            <li onClick={hideNavBar} className="listItem">
              Offers
            </li>
            <li onClick={hideNavBar} className="listItem">
              Seats
            </li>
            <li onClick={hideNavBar} className="listItem">
              Home
            </li>
            <li onClick={hideNavBar} className="listItem">
              Destinations
            </li>
          </ul>

          <button className="btn flex btnOne">Contact</button>
        </div>

        <button className="btn flex btnTwo">Contact</button>

        <div onClick={showNavBar} className="toggleIcon">
          <CgMenuGridO className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
