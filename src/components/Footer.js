import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#5E50A1]">
        <div className="pl-4 md:px-[150px] pt-[70px] pb-[42px]">
          <div>
            <img className="" src={require("../assets/images/footerlogo.png")} alt="footerlogo" />
          </div>
          <div className="text-white w-[300px] mb-3 leading-[28px] pt-[30px] md:pb-[67px]">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</span>
          </div>
          <hr className="w-80 md:w-full block md:mb-[30px] text-white" />
          <div className="hidden md:flex text-white">
            <div className="flex-1">
              <span>2020 Pewworld. All right reserved</span>
            </div>
            <div>
              <span className="pr-[79px]">Telepon</span>
              <span>Email</span>
            </div>
          </div>
          <div className="pt-3 md:hidden text-white">
            <div className="mb-3">
              <div className="pr-[79px] mb-3">Telepon</div>
              <div>Email</div>
            </div>
            <div className="flex-1">
              <span>2020 Pewworld. All right reserved</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
