import React from "react";
import { Link } from "react-router-dom";

// const Navbar = (props) => {
//   return (
//     <div>
//       <div className="flex px-[150px] pt-[45px] pb-[34px]">
//         <div className="flex-1">
//           <img className="" src={require("../assets/images/navlogo.png")} alt="navlogo" />
//         </div>
//         <div className="flex items-center">
//           <div className="mr-[45px]">
//             <img className="" src={require("../assets/images/bell.png")} alt="bell" />
//           </div>
//           <div className="mr-[52px]">
//             <img className="" src={require("../assets/images/mail.png")} alt="mail" />
//           </div>
//           <div>
//             <img className="" src={require("../assets/images/profile.png")} alt="profile" />
//           </div>
//         </div>
//       </div>
//         <div className={props.blueBg}></div>
//     </div>
//   );
// };

const Navbar = () => {
  return (
    <div>
      <nav className="fixed pl-5 py-[33px]  md:pl-[150px] md:pr-[130px] bg-white  w-full ">
        <div className="container m-auto flex justify-between items-center text-gray-700">
          <img className="" src={require("../assets/images/navlogo.png")} alt="navlogo" />
          <div className="flex items-center pr-0 text-base font-semibold">
            <div className="group">
              <button className="mr-[45px]">
                <img className="" src={require("../assets/images/bell.png")} alt="bell" />
              </button>
              <div className="hidden pr-[200px] group-hover:block absolute">
                <img className="text-left" src={require("../assets/images/notif.png")} alt="notif" />
              </div>
            </div>
            <div>
              <button className="mr-[52px]">
                <img className="" src={require("../assets/images/mail.png")} alt="mail" />
              </button>
            </div>
            <div>
              <Link to="/edit-jobseeker-profile">
                <img className="" src={require("../assets/images/profile.png")} alt="profile" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
