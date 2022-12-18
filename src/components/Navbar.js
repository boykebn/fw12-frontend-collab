import React from "react";

const Navbar = (props) => {
  return (
    <div>
      <div className="flex px-[150px] pt-[45px] pb-[34px]">
        <div className="flex-1">
          <img className="" src={require("../assets/images/navlogo.png")} alt="navlogo" />
        </div>
        <div className="flex items-center">
          <div className="mr-[45px]">
            <img className="" src={require("../assets/images/bell.png")} alt="bell" />
          </div>
          <div className="mr-[52px]">
            <img className="" src={require("../assets/images/mail.png")} alt="mail" />
          </div>
          <div>
            <img className="" src={require("../assets/images/profile.png")} alt="profile" />
          </div>
        </div>
      </div>
        <div className={props.blueBg}></div>
    </div>
  );
};

export default Navbar;
