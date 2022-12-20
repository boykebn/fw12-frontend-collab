import React from "react";

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

const Navbar = (props) => {
  return (
    <div>
      <nav className="fixed px-5 py-[33px]  md:pl-[150px] md:pr-[130px] bg-white w-full z-10">
        <div className="container m-auto flex justify-between items-center text-gray-700">
          <img className="" src={require("../assets/images/navlogo.png")} alt="navlogo" />
          <div className="flex items-center pr-0 text-base font-semibold gap-6 md:gap-12 lg:gap-12">
            <div className="group border-[1px] border-black">
              <button className="">
                <img className="" src={require("../assets/images/bell.png")} alt="bell" />
              </button>
              <div className="hidden right-2 md:right-[165px] top-14 group-hover:block absolute border-[1px] border-black">
                <img className="w-[258px] h-[305px] drop-shadow-lg ease-in duration-500 " src={require("../assets/images/notif.png")} alt="notif" />
              </div>
            </div>
            <div>
              <button>
                <img className="" src={require("../assets/images/mail.png")} alt="mail" />
              </button>
            </div>
            <div>
              <button>
                <img className="" src={require("../assets/images/profile.png")} alt="profile" />
              </button>
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
