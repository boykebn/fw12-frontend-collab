import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex px-[150px] pt-[45px]">
        <div className="flex-1">
          <img className="" src={require("../assets/images/navlogo.png")} alt="navlogo" />
        </div>
        <div>
          <button className="border-2 border-[#5E50A1] px-[20px] py-[10px] rounded text-[#5E50A1] font-bold mr-[16px]">Masuk</button>
          <button className="border-1 bg-[#5E50A1] px-[22px] py-[12px] rounded text-white">Daftar</button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
