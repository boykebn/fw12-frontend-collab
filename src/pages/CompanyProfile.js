import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CompanyProfile = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#E5E5E5]">
        <div className="px-5 pt-10 pb-28 md:px-[150px] lg:px-[150px] md:pt-[170px] md:pb-[200px] lg:pb-[270px] flex flex-col justify-center">
          <div className="bg-white md:bg-[#5E50A1] lg:bg-[#5E50A1] h-48 rounded-tl-[8px] rounded-tr-[8px] md:w-full">
            <div className="flex justify-center pt-[114px] h-48 mb-[-50px]">
              <img className="h-[150px] w-[150px] rounded-[50%] absolute" src={require("../assets/images/luffy.jpg")} alt="test3"/>
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
              <div className=" md:flex justify-center md:px-24 lg:px-32 mb-[20px]">
                <div className="text-[#9EA0A5] text-[14px] leading-[24px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.
                </div>
              </div>
              <div className="mb-[42px]">
                <button className="border-1 w-[297px] h-[50px] bg-[#5E50A1] py-[15px] rounded text-white font-bold hover:scale-[1.05] hover:ease-in duration-100">Edit profile</button>
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
