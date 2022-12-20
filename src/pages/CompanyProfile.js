import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import http from '../helpers/http'

const CompanyProfile = () => {
  const [company, setCompany] = React.useState({})
  const {id} = useParams()
  const navigate = useNavigate()

  React.useEffect(() => {
    getCompany()
  }, [id, company])
  
  const getCompany = async ()=> {
    const {data} = await http().get(`/users/company/${id}`)
    setCompany(data.results)
  }

  const editProfile = () => {
    navigate('/edit-company-profile', {state: company})
  }

  return (
    <div className="font-openSans">
      <Navbar />
      <div className="bg-[#E5E5E5]">
        <div className="px-10 md:px-[150px] pt-[170px] pb-[270px] flex flex-col justify-center">
          <div className=" bg-[#5E50A1] rounded-tl-[8px] rounded-tr-[8px] md:w-full">
            <div className="flex justify-center pt-[114px] mb-[-50px] relative">
              <img className="" src={require("../assets/images/test3.png")} alt="test3" />
            </div>
          </div>
          <div className="bg-white text-center rounded-bl-[8px] rounded-br-[8px]">
            <div className="pt-[74px]">
              <div>
                <div className="text-[#1F2A36] text-[22px] leading-[56px] font-semibold">{company.name}</div>
                <div className="text-[#1F2A36] text-[14px] leading-[24px] mb-[10px]">{company.field}</div>
              </div>
              <div className="flex justify-center mb-[20px]">
                <img className="" src={require("../assets/images/map.png")} alt="map" />
                <div className="text-[#9EA0A5] text-[14px] leading-[20px] pl-[17px]">{company.address}</div>
              </div>
              <div className=" md:flex justify-center md:px-[263px] mb-[20px]">
                <div className="text-[#9EA0A5] text-[14px] leading-[24px]">
                {company.bio}
                </div>
              </div>
              <div className="mb-[42px]">
                <button onClick={() => editProfile()} className="border-1 bg-[#5E50A1] px-[104px] py-[15px] rounded text-white font-bold">Edit profile</button>
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
                    <span>{company.email}</span>
                  </div>
                  <div className="flex justify-start mb-[37px]">
                    <span>{company.instagram}</span>
                  </div>
                  <div className="flex justify-start mb-[37px]">
                    <span>{company.phoneNumber}</span>
                  </div>
                  <div className="flex justify-start mb-[37px]">
                    <span>{company.linkedin}</span>
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
