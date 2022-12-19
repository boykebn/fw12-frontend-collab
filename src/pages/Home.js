import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="bg-[#E5E5E5]">
        <div className="py-[50px] px-[150px]">
          <div className="">
            <div className="bg-white rounded-[6px]">
              <div className="pl-[20px] pr-[10px] py-[6px] flex items-center">
                <div className="flex-1 text-[14px] text-[#9EA0A5] leading-[20px]">
                  <input
                    className="py-[19px] pl-[15px] pr-[380px]"
                    placeholder="Search for any skill"
                  />
                </div>
                <div className="flex items-center">
                  <div className="mr-[30px]">
                    <img
                      className=""
                      src={require("../assets/images/search.png")}
                      alt="search"
                    />
                  </div>
                  <div className="mr-[25px]">
                    <img
                      className=""
                      src={require("../assets/images/Line.png")}
                      alt="Line"
                    />
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
                    <button className=" border-1 bg-[#5E50A1] py-[17px] px-[34px] rounded text-white font-semibold">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main className="px-[150px] pb-[50px]">
          <div className="bg-white flex pl-[20px] pt-[21px] pb-[38px] pr-[77px] mb-[1px] rounded-[8px]">
            <div className="mr-[35px] flex items-center">
              <img
                className="w-[100px] h-[100px]"
                src={require("../assets/images/testi1.png")}
                alt="testi1"
              />
            </div>
            <div className="flex-1">
              <div>
                <span className="text-[#1F2A36] text-[22px] font-bold">
                  Louis Tomlinson
                </span>
              </div>
              <div className="mb-[6px]">
                <span className="text-[#9EA0A5] text-[14px] leading-[20px]">
                  Web developer - Freelance
                </span>
              </div>
              <div className="flex items-center mb-[17px]">
                <img
                  className="mr-[15px] w-[16px] h-[16px]"
                  src={require("../assets/images/map.png")}
                  alt="map"
                />
                <span className="text-[#9EA0A5] text-[14px] leading-[20px]">
                  Lorem ipsum
                </span>
              </div>
              <div>
                <button className="border-1 bg-[#FBB01799] rounded-[4px] py-[5px] px-[23px] text-white">
                  PHP
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button className="border-1 bg-[#5E50A1] py-[17px] px-[27px] rounded font-semibold text-white leading-[20px] text-[16px]">
                Lihat Profile
              </button>
            </div>
          </div>
        </main>
        <div className="px-[150px] pb-[70px] text-[#9EA0A5] text-[18px] flex justify-center">
          <div className="mr-[14px]">
            <button>
              <img
                className="border-1 bg-white rounded py-[19px] px-[23px]"
                src={require("../assets/images/left.png")}
                alt="left"
              />
            </button>
          </div>
          <div className="mr-[14px]">
            <button className="border-1 bg-white rounded py-[15.5px] px-[24px]">
              1
            </button>
          </div>
          <div className="mr-[14px]">
            <button className="border-1 bg-white rounded py-[15.5px] px-[24px]">
              2
            </button>
          </div>
          <div className="mr-[14px]">
            <button className="border-1 bg-white rounded py-[15.5px] px-[24px]">
              3
            </button>
          </div>
          <div className="mr-[14px]">
            <button className="border-1 bg-white rounded py-[15.5px] px-[24px]">
              4
            </button>
          </div>
          <div className="mr-[14px]">
            <button className="border-1 bg-white rounded py-[15.5px] px-[24px]">
              5
            </button>
          </div>
          <div className="mr-[14px]">
            <button className="border-1 bg-white rounded py-[15.5px] px-[24px]">
              6
            </button>
          </div>
          <div className="mr-[14px]">
            <button>
              <img
                className="border-1 bg-white rounded py-[19px] px-[23px]"
                src={require("../assets/images/right.png")}
                alt="right"
              />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
