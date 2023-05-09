import React from "react";
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div>
          <SiConsul className="icons" />
        </div>

        <div className="none flex">
          <li className="flex">
            <BsPhoneVibrate className="icons" />
            Support
          </li>
          <li className="flex">
            <AiOutlineGlobal className="icons" />
            Languages
          </li>
        </div>

        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Up</span>
        </div>
      </div>

      <div className="navBarTwo">
        <div className="logoDiv">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
