import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <nav className="fixed px-5 py-[33px] md:px-20 lg:pl-[150px] lg:pr-[130px] bg-white w-full z-10 top-0">
        <div className="container m-auto flex justify-between items-center text-gray-700">
          <img className="" src={require("../assets/images/navlogo.png")} alt="navlogo" />
          <div className="flex items-center pr-0 text-base font-semibold gap-6 md:gap-12 lg:gap-12">
            <div className="group">
              <button className="">
                <img className="" src={require("../assets/images/bell.png")} alt="bell" />
              </button>
              <div className="hidden right-2 md:right-[165px] top-14 group-hover:block absolute">
                <img className="w-[258px] h-[305px] drop-shadow-lg ease-in duration-500 " src={require("../assets/images/notif.png")} alt="notif" />
              </div>
            </div>
            <div>
              <button>
                <img className="" src={require("../assets/images/mail.png")} alt="mail" />
              </button>
            </div>
            <div>
              <Link to="/edit-jobseeker-profile">
                <img className="w-[32px] h-[32px] rounded-[50%]" src={require("../assets/images/luffy.jpg")} alt="profile" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className={props.blueBg}></div>
      <div className={props.grayBg}></div>
    </div>
  );
};

export default Navbar;
