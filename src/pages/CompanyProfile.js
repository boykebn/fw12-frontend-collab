import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CompanyProfile = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#E5E5E5]">
        <div className="px-[150px] pt-[170px] pb-[270px] flex flex-col justify-center">
          <div className="bg-[#5E50A1] rounded-tl-[8px] rounded-tr-[8px]">
            <div className="flex justify-center pt-[114px]">
              <img className="" src={require("../assets/images/test3.png")} alt="test3" />
            </div>
          </div>
          <div className="bg-white text-center rounded-bl-[8px] rounded-br-[8px]">
            <div className="pt-[74px]">
              <div>
                <div className="text-[#1F2A36] text-[22px] leading-[56px] font-semibold">PT. Martabat Jaya Abadi</div>
                <div className="text-[#1F2A36] text-[14px] leading-[24px] mb-[10px]">Financial</div>
              </div>
              <div className="flex justify-center mb-[20px]">
                <img className="" src={require("../assets/images/map.png")} alt="map" />
                <div className="text-[#9EA0A5] text-[14px] leading-[20px] pl-[17px]">Purwokerto, Jawa Tengah</div>
              </div>
              <div className="flex justify-center px-[263px] mb-[20px]">
                <div className="text-[#9EA0A5] text-[14px] leading-[24px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.
                </div>
              </div>
              <div className="mb-[42px]">
                <button className="border-1 bg-[#5E50A1] px-[104px] py-[15px] rounded text-white font-bold">Edit profile</button>
              </div>
              <div className="flex justify-center">
                <div className="mr-[20px] ">
                  <div className="mb-[33px]">
                    <img className="" src={require("../assets/images/mail.png")} alt="mail" />
                  </div>
                  <div className="mb-[33px]">
                    <img className="" src={require("../assets/images/instagram.png")} alt="instagram" />
                  </div>
                  <div className="mb-[31px]">
                    <img className="" src={require("../assets/images/phone.png")} alt="phone" />
                  </div>
                  <div className="mb-[37px]">
                    <img className="" src={require("../assets/images/linkedin.png")} alt="linkedin" />
                  </div>
                </div>
                <div className="text-[#9EA0A5] text-[14px] leading-[20px] mb-[238px]">
                  <div className="flex justify-start mb-[37px] ">
                    <span>martabatjaya@gmail.com</span>
                  </div>
                  <div className="flex justify-start mb-[37px]">
                    <span>martabat_jaya</span>
                  </div>
                  <div className="flex justify-start mb-[37px]">
                    <span>0821-8190-1821</span>
                  </div>
                  <div className="flex justify-start mb-[37px]">
                    <span>Martabat Jaya Abadi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CompanyProfile;
