import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl"; // Arrow icon



const Home = () => {
  const [profile, setProfile] = React.useState({});
  React.useEffect(() => {
    getProfile().then((data) => {
      setProfile(data);
    });
  }, []);

  const getProfile = async () => {
    const { data } = await axios.get("https://fw12-backend-collab.vercel.app/users/skill");
    return data;
  };

  return (
    <div className="font-openSans">
      <Navbar />
      <Header />
      <div className="bg-[#E5E5E5]">
        <div className="px-10 py-[50px] md:px-[150px]">
          <div className="">
            <div className="bg-white rounded-[6px] hidden">
              <div className="pl-[20px] pr-[10px] py-[6px] flex items-center">
                <div className="flex-1 text-[14px] text-[#9EA0A5] leading-[20px]">
                  <input className="pr-48 py-[19px] pl-[15px] md:pr-[360px]" placeholder="Search for any skill" />
                </div>
                <div className="md:flex items-center">
                  <div className="mr-[30px]">
                    <img className="" src={require("../assets/images/search.png")} alt="search" />
                  </div>
                  <div className="mr-[25px]">
                    <img className="" src={require("../assets/images/Line.png")} alt="Line" />
                  </div>
                  <div className="mr-[50px]">
                    <select className="text-[#9EA0A5] text-[16px]">
                      <option>Sort</option>
                      <option>Sortir berdasarkan Skill</option>
                      <option>Sortir berdasarkan Freelance</option>
                      <option>Sortir berdasarkan Fulltime</option>
                    </select>
                  </div>
                  <div>
                    <button className=" border-1 bg-[#5E50A1] py-[17px] px-[34px] rounded text-white font-semibold">Search</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden pl-10 mb-5 justify-center items-center md:hidden">
          <div className="mr-[50px]">
            <select className="text-[#9EA0A5] text-[16px]">
              <option>Sort</option>
              <option>Sortir berdasarkan Skill</option>
              <option>Sortir berdasarkan Freelance</option>
              <option>Sortir berdasarkan Fulltime</option>
            </select>
          </div>
          <div>
            <button className=" border-1 bg-[#5E50A1] py-[17px] px-[34px] rounded text-white font-semibold">Search</button>
          </div>
        </div>
        <main className="grid grid-cols-2 px-3 justify-center md:flex md:flex-col lg:flex lg:flex-col md:px-20 lg:px-[150px] pb-[50px] gap-5">
          {profile?.results?.map((bio) => (
            <div className="flex flex-col justify-center items-center gap-5 bg-white md:flex md:flex-row md:pl-[20px] md:pt-[21px] md:pb-[38px] md:pr-[20px] md:mb-[1px] rounded-[8px] lg:justify-start lg:pr-0">
              <div>
                <img className=" md:w-[120px] md:h-[120px] md:rounded-[50%] lg:w-[120px] lg:h-[120px] lg:rounded-[50%]" src={require("../assets/images/testi1.png")} alt="testi1" />
              </div>
              <div className="flex flex-col justify-center items-center gap-5 md:gap-2 md:items-start lg:mr-64">
                <div>
                  <span className="text-[#1F2A36] text-2xl md:text-[22px] font-bold">{bio.name}</span>
                </div>
                <div className="w-[150px] text-center md:w-max">
                  <span className="text-[#9EA0A5] text-[14px] leading-[20px] ">{bio.jobDesk}</span>
                </div>
                <div className="hidden md:flex items-center">
                  <img className="mr-[15px] w-[16px] h-[16px]" src={require("../assets/images/map.png")} alt="map" />
                  <span className="text-[#9EA0A5] text-[14px] leading-[20px]">{bio.address}</span>
                </div>
                <div className="grid md:grid-cols-3 gap-2">
                  {bio.skills.map((skill) => (
                    <div className="w-max">
                      <div className="border-1 bg-[#FBB01799] rounded-[4px] py-[5px] px-[23px] text-white">{skill}</div>
                    </div>
                  ))}
                </div>
                <div className="mb-5 md:hidden"></div>
              </div>
              <div className="flex justify-center items-center justify-self-end">
                <button className="hidden md:block lg:block border-1 bg-[#5E50A1] py-[17px] md:px-3 lg:px-[27px] rounded font-semibold text-white leading-[20px] text-[16px] hover:scale-[1.05] ease-in duration-100">Lihat Profile</button>
              </div>
            </div>
          ))}
        </main>

        <div className="flex px-10 md:px-[150px] pb-[70px] text-[#9EA0A5] text-[18px] md:flex justify-center gap-4">
          <div className="flex justify-center items-center h-[58px] w-[58px] bg-white rounded-[4px] hover:scale-[1.05] hover:bg-[#5E50A1] hover:text-white">
            <SlArrowLeft />
          </div>
          <button className="border-1 bg-white rounded h-[58px] w-[58px] hover:scale-[1.05] hover:bg-[#5E50A1] hover:text-white">1</button>
          <button className="border-1 bg-white rounded h-[58px] w-[58px] hover:scale-[1.05] hover:bg-[#5E50A1] hover:text-white">2</button>
          <button className="border-1 bg-white rounded h-[58px] w-[58px] hover:scale-[1.05] hover:bg-[#5E50A1] hover:text-white">3</button>
          <button className="border-1 bg-white rounded h-[58px] w-[58px] hover:scale-[1.05] hover:bg-[#5E50A1] hover:text-white hidden md:block">4</button>
          <button className="border-1 bg-white rounded h-[58px] w-[58px] hover:scale-[1.05] hover:bg-[#5E50A1] hover:text-white hidden md:block">5</button>
          <button className="border-1 bg-white rounded h-[58px] w-[58px] hover:scale-[1.05] hover:bg-[#5E50A1] hover:text-white hidden md:block">6</button>
          <div className="flex justify-center items-center h-[58px] w-[58px] bg-white rounded-[4px] hover:scale-[1.05] hover:bg-[#5E50A1] hover:text-white">
            <SlArrowRight />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
