import React from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl"; // Arrow icon
import { CiSearch } from "react-icons/ci"; // Search icon

const Home = () => {
  const [profile, setProfile] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [amountPage, setAmountPage] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [sortBy, setSortBy] = React.useState("");
  const [status, setStatus] = React.useState("");

  React.useEffect(() => {
    axios
      .get(`https://fw12-backend-collab.vercel.app/users/skill?page=${page}&search=${search}&sortBy=${sortBy}&status=${status}`)
      .then((data) => data.data)
      .then((res) => {
        pageAmount(res.pageInfo.totalData);
        setProfile(res.results);
      });
  }, [page, search, sortBy, status]);

  const searchUser = () => {
    const searchValue = document.querySelector("#search-input").value;
    setSearch(searchValue);
    setPage(1);
  };

  const pageAmount = (users) => {
    const pageArr = [];
    const result = parseInt(users) / 4;
    const pageNum = Math.ceil(result);

    for (let i = 1; i <= pageNum; i++) {
      pageArr.push(i);
    }

    setAmountPage(pageArr);
  };

  const sort = (value) => {
    if (value === "Skill") {
      setSortBy("skills");
      setStatus("");
      setPage(1);
    } else if (value === "Freelancer") {
      setStatus("Freelancer");
      setSortBy("");
      setPage(1);
    } else {
      setStatus("Fulltime");
      setSortBy("");
      setPage(1);
    }
  };

  return (
    <div className="font-openSans">
      <Navbar />
      <Header />
      <div className="bg-[#E5E5E5] ">
        <div className="px-10 py-[50px] md:px-[150px]">
          <div>
            <div className="bg-white rounded-[6px] hidden lg:block w-max">
              <div className="pl-[20px] pr-[10px] py-[6px] flex items-center">
                <div className="flex-1 text-[14px] text-[#9EA0A5] leading-[20px] relative">
                  <input id="search-input" className=" py-[19px] pl-[15px] pr-14 w-[38rem] outline-1 outline-[#9EA0A5]" placeholder="Search for any skill" />
                  <CiSearch className="absolute w-8 h-8 top-3 right-3" />
                </div>
                <div className="md:flex items-center">
                  <div className="mr-[25px]">
                    <img className="" src={require("../assets/images/Line.png")} alt="Line" />
                  </div>
                  <div className="mr-[50px]">
                    <select onClick={(e) => sort(e.target.value)} className="text-[#9EA0A5] text-[16px] bg-white outline-none">
                      <option className="hidden">Sort</option>
                      <option value="Skill">Sortir berdasarkan Skill</option>
                      <option value="Freelancer">Sortir berdasarkan Freelance</option>
                      <option value="Fulltime">Sortir berdasarkan Fulltime</option>
                    </select>
                  </div>
                  {/* <div className="mr-[50px]">
                    <span className="text-[#9EA0A5] leading-[20px] font-semibold">Kategori</span>
                  </div> */}
                  <div>
                    <button onClick={() => searchUser()} className=" border-1 bg-[#5E50A1] py-[17px] px-[34px] rounded text-white font-semibold">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-10 mb-5 flex justify-center items-center md:hidden">
          <div className="mr-[50px]">
            <select onClick={(e) => sort(e.target.value)} className="text-[#9EA0A5] text-[16px]">
              <option className="hidden">Sort</option>
              <option value="Skill">Sortir berdasarkan Skill</option>
              <option value="Freelancer">Sortir berdasarkan Freelance</option>
              <option value="Fulltime">Sortir berdasarkan Fulltime</option>
            </select>
          </div>
          <div>
            <button onClick={() => searchUser()} className=" border-1 bg-[#5E50A1] py-[17px] px-[34px] rounded text-white font-semibold">
              Search
            </button>
          </div>
        </div>
        <main className="px-[150px] pb-[50px]">
          {profile.map((bio) => (
            <div className="bg-white md:flex pl-[20px] pt-[21px] pb-[38px] pr-[77px] mb-[1px] rounded-[8px]">
              <div className="mr-[35px] flex md:items-center">
                <img className="md:w-[100px] md:h-[100px]" src={require("../assets/images/testi1.png")} alt="testi1" />
              </div>
              <div className="flex-1">
                <div>
                  <span className="text-[#1F2A36] text-2xl md:text-[22px] font-bold">{bio.name}</span>
                </div>
                <div className="mb-[6px]">
                  <span className="text-[#9EA0A5] text-[14px] leading-[20px]">
                    {bio.jobDesk} - {bio.status ? bio.status : null}
                  </span>
                </div>
                <div className="flex items-center mb-[17px]">
                  <img className="mr-[15px] w-[16px] h-[16px]" src={require("../assets/images/map.png")} alt="map" />
                  <span className="text-[#9EA0A5] text-[14px] leading-[20px]">{bio.address}</span>
                </div>

                <div className="flex flex-wrap md:grid-cols-3 gap-2 ">
                  {bio.skills.map((skill) => (
                    <div>
                      <div className="border-1 bg-[#FBB01799] rounded-[4px] px-2 py-[5px] text-white text-center">{skill}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center items-center">
                <Link to={"/jobseeker-profile/" + bio.id} className="border-1 bg-[#5E50A1] py-[17px] px-[27px] rounded font-semibold text-white leading-[20px] text-[16px]">
                  Lihat Profile
                </Link>
              </div>
            </div>
          ))}
        </main>
        <div className="px-10 md:px-[150px] pb-[70px] text-[#9EA0A5] text-[18px] flex justify-center">
          <div className="mr-[14px]">
            <button>
              <img className="border-1 bg-white rounded py-[19px] px-[23px]" src={require("../assets/images/left.png")} alt="left" />
            </button>
          </div>
          {amountPage.map((page, i) => (
            <div key={i} className="mr-[14px]">
              <button onClick={() => setPage(() => page)} className="border-1 hover:text-white focus:text-white bg-white hover:bg-[#5E50A1] focus:bg-[#5E50A1] rounded py-[15.5px] px-[24px]">
                {page}
              </button>
            </div>
          ))}

          <div className="mr-[14px]">
            <button>
              <img className="border-1 bg-white rounded py-[19px] px-[23px]" src={require("../assets/images/right.png")} alt="right" />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
