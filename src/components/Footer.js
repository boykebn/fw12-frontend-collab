import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#5E50A1]">
        <div className="px-[150px] pt-[70px] pb-[42px]">
          <div>
            <img className="" src={require("../assets/images/footerlogo.png")} alt="footerlogo" />
          </div>
          <div className="text-white w-[300px] leading-[28px] pt-[30px] pb-[67px]">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</span>
          </div>
          <hr className="mb-[30px]" />
          <div className="text-white flex">
            <div className="flex-1">
              <span>2020 Pewworld. All right reserved</span>
            </div>
            <div>
              <span className="pr-[79px]">Telepon</span>
              <span>Email</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
